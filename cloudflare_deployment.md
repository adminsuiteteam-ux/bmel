# Deploying BMEL Frontend to Cloudflare Pages

You can host your React single page application on Cloudflare Pages using one of two methods:

---

## Method 1: Direct Command Line Upload (Fastest)

If you want to publish the site directly from your computer, run these commands in your terminal:

1. **Change directory to the frontend project**:
   ```bash
   cd frontend
   ```
2. **Build the production bundle**:
   ```bash
   npm run build
   ```
3. **Deploy the built folder to Cloudflare Pages**:
   ```bash
   npx wrangler pages deploy dist
   ```

*Note: The first time you run `wrangler`, it will open a browser window asking you to log in to your Cloudflare account and authorize the CLI.*

---

## Method 2: Git Integration (Recommended for Continuous Deployment)

This is the recommended approach. Every time you push changes to GitHub, Cloudflare will automatically build and deploy your site.

### Step 1: Initialize Git and Commit Your Code
Run these commands in your project root (`c:\Users\Dimacode.x\Desktop\BMEL\frontend`):
```bash
git init
git add .
git commit -m "Initial commit with i18n and premium hero section"
```

### Step 2: Push to GitHub
1. Create a new repository on [GitHub](https://github.com).
2. Link and push your local repository:
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

### Step 3: Link to Cloudflare Pages
1. Go to your **Cloudflare Dashboard**.
2. Navigate to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select your GitHub repository.
4. Configure the **Build Settings**:
   - **Framework preset**: `Vite` (or `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `frontend` (Since the React code is inside the `frontend` subfolder)
5. Click **Save and Deploy**.
