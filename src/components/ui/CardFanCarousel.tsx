"use client";

import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import gsap from "gsap";

export interface FanCardItem {
  id: string;
  content: ReactNode;
}

interface CardFanCarouselProps {
  cards: FanCardItem[];
}

const MAX_VISIBLE = 5;
const HALF = 2;

const FAN_POSITIONS = [
  { rot: -18, scale: 0.80, x: -28, y: 5.5, zIndex: 1 },
  { rot: -9,  scale: 0.91, x: -13, y: 1.8, zIndex: 3 },
  { rot: 0,   scale: 1.00, x: 0,   y: 0.0, zIndex: 10 },
  { rot: 9,   scale: 0.91, x: 13,  y: 1.8, zIndex: 3 },
  { rot: 18,  scale: 0.80, x: 28,  y: 5.5, zIndex: 1 },
];

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.3;
  if (width < 640) return 0.45;
  if (width < 768) return 0.6;
  if (width < 1024) return 0.8;
  return 1.0;
}

function getSlotConfig(totalCards: number, slot: number) {
  if (totalCards >= MAX_VISIBLE) return FAN_POSITIONS[slot];
  const center = totalCards >> 1;
  const distance = totalCards > 1 ? (slot - center) / center : 0;
  const absD = Math.abs(distance);
  return {
    rot: distance * 18,
    scale: 1.0 - 0.2 * absD * absD,
    x: distance * 28,
    y: absD * absD * 5.5,
    zIndex: 10 - Math.abs(slot - center),
  };
}

const ARROW_BTN =
  "relative flex items-center justify-center rounded-full border border-navy/20 bg-white/70 backdrop-blur-md text-navy/50 cursor-pointer shrink-0 z-30 outline-none shadow-lg hover:border-amber/50 hover:text-amber-600 active:opacity-70 transition-all duration-300";

export default function CardFanCarousel({ cards }: CardFanCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);
  const directionRef = useRef<"left" | "right" | null>(null);
  const prevVisible = useRef<Set<number>>(new Set());

  const totalCards = cards.length;
  const needsPagination = totalCards > MAX_VISIBLE;
  const [centerIndex, setCenterIndex] = useState(needsPagination ? HALF : totalCards >> 1);

  const getVisibleMap = useCallback(
    (center: number) => {
      const map = new Map<number, number>();
      if (!needsPagination) {
        cards.forEach((_, i) => map.set(i, i));
        return map;
      }
      for (let slot = 0; slot < MAX_VISIBLE; slot++) {
        map.set(((center + slot - HALF) % totalCards + totalCards) % totalCards, slot);
      }
      return map;
    },
    [totalCards, needsPagination, cards]
  );

  const cycle = useCallback(
    (direction: "left" | "right") => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      directionRef.current = direction;
      setCenterIndex((prev) =>
        direction === "right" ? (prev + 1) % totalCards : (prev - 1 + totalCards) % totalCards
      );
    },
    [totalCards]
  );

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => cycle("right"), 3500);
    return () => clearInterval(interval);
  }, [cycle]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !totalCards) return;

    const cardEls = Array.from(container.querySelectorAll<HTMLElement>(".fan-card"));
    if (!cardEls.length) return;

    const visibleMap = getVisibleMap(centerIndex);
    const previouslyVisible = prevVisible.current;
    const direction = directionRef.current;
    const isFirstMount = !hasEntered.current;
    const mult = getResponsiveMultiplier(window.innerWidth);
    const slotCount = needsPagination ? MAX_VISIBLE : totalCards;
    const cfg = (slot: number) => getSlotConfig(slotCount, slot);

    if (isFirstMount) isAnimating.current = true;

    let done = 0;
    const visibleCount = visibleMap.size;
    const onDone = () => {
      if (++done >= visibleCount) {
        isAnimating.current = false;
        if (isFirstMount) hasEntered.current = true;
      }
    };

    cardEls.forEach((card, i) => {
      const slot = visibleMap.get(i);
      const wasVisible = previouslyVisible.has(i);

      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = cfg(slot);
        const target = { x: `${x * mult}rem`, y: `${y}rem`, rotation: rot, scale, opacity: 1, zIndex };

        if (isFirstMount) {
          gsap.set(card, { x: 0, y: "10rem", rotation: 0, scale: 0.5, opacity: 0 });
          gsap.to(card, { ...target, duration: 1.2, ease: "elastic.out(1.05,.78)", delay: 0.15 + slot * 0.07, onComplete: onDone });
        } else if (!wasVisible) {
          const enterX = direction === "right" ? 35 : -35;
          gsap.set(card, { x: `${enterX}rem`, y: `${y}rem`, rotation: direction === "right" ? 25 : -25, scale: 0.5, opacity: 0 });
          gsap.to(card, { ...target, duration: 0.55, ease: "power2.out", onComplete: onDone });
        } else {
          gsap.to(card, { ...target, duration: 0.45, ease: "power2.out", onComplete: onDone });
        }
      } else if (wasVisible) {
        const exitX = direction === "right" ? -35 : 35;
        gsap.to(card, { x: `${exitX}rem`, opacity: 0, scale: 0.5, rotation: direction === "right" ? -25 : 25, duration: 0.35, ease: "power2.in", zIndex: 0 });
      } else if (isFirstMount) {
        gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 });
      }
    });

    prevVisible.current = new Set(visibleMap.keys());

    // Hover spread interactions
    const visibleEntries: { el: HTMLElement; slot: number }[] = [];
    cardEls.forEach((el, i) => {
      const slot = visibleMap.get(i);
      if (slot !== undefined) visibleEntries.push({ el, slot });
    });
    visibleEntries.sort((a, b) => a.slot - b.slot);

    let activeSlot: number | null = null;
    let leaveTimer: ReturnType<typeof setTimeout> | null = null;
    const centerSlot = visibleEntries.length >> 1;

    const updateHover = (hoveredSlot: number | null) => {
      const m = getResponsiveMultiplier(window.innerWidth);
      visibleEntries.forEach(({ el, slot }) => {
        const base = cfg(slot);
        let tx = base.x * m, ty = base.y, tr = base.rot, ts = base.scale, delay = 0;

        if (hoveredSlot !== null) {
          const dist = Math.abs(slot - hoveredSlot);
          delay = dist * 0.02;
          if (slot === hoveredSlot) {
            ty -= 2.2;
            ts *= 1.07;
          } else {
            const norm = centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0;
            const push = 7 * (1 - Math.abs(norm)) * (1 + 0.2 * Math.max(0, 2 - dist));
            if (slot < hoveredSlot) { tx -= push * m; tr -= 3 / (dist + 1); }
            else { tx += push * m; tr += 3 / (dist + 1); }
          }
        } else {
          delay = Math.abs(slot - centerSlot) * 0.02;
        }

        gsap.to(el, { x: `${tx}rem`, y: `${ty}rem`, rotation: tr, scale: ts, duration: 0.5, delay, ease: "elastic.out(1,.75)", overwrite: "auto" });
        gsap.set(el, { zIndex: base.zIndex });
      });
    };

    const enterHandlers = visibleEntries.map(({ el, slot }) => {
      const h = () => {
        if (isAnimating.current) return;
        if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null; }
        if (activeSlot !== slot) { activeSlot = slot; updateHover(slot); }
      };
      el.addEventListener("mouseenter", h);
      return { el, h };
    });

    const onLeave = () => {
      if (isAnimating.current) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => { activeSlot = null; updateHover(null); }, 60);
    };
    container.addEventListener("mouseleave", onLeave);

    const onResize = () => { if (!isAnimating.current) updateHover(activeSlot); };
    window.addEventListener("resize", onResize);

    return () => {
      enterHandlers.forEach(({ el, h }) => el.removeEventListener("mouseenter", h));
      container.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [centerIndex, totalCards, getVisibleMap, needsPagination]);

  if (!totalCards) return null;

  const chevron = (dir: "left" | "right") => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points={dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-center w-full">
        <div
          ref={containerRef}
          className="relative flex justify-center items-center w-full"
          style={{ height: "340px" }}
        >
          {cards.map((card, index) => (
            <div key={card.id} className="fan-card absolute" style={{ width: "260px" }}>
              {card.content}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-5 mt-6 z-30">
        <button
          className={`${ARROW_BTN} w-11 h-11`}
          onClick={() => cycle("left")}
          aria-label="Previous"
        >
          {chevron("left")}
        </button>

        <div className="flex items-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isAnimating.current) {
                  const dir = i > centerIndex ? "right" : "left";
                  isAnimating.current = true;
                  directionRef.current = dir;
                  setCenterIndex(i);
                }
              }}
              className={`rounded-full transition-all duration-300 ${
                i === centerIndex
                  ? "bg-amber w-6 h-2.5 scale-100"
                  : "bg-navy/20 w-2.5 h-2.5 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>

        <button
          className={`${ARROW_BTN} w-11 h-11`}
          onClick={() => cycle("right")}
          aria-label="Next"
        >
          {chevron("right")}
        </button>
      </div>
    </div>
  );
}
