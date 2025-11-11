# Migration to Next.js

This project has been migrated from React + Vite to Next.js 14 (App Router).

## Changes Made

1. **Project Structure**
   - Moved from `src/` to Next.js `app/` directory structure
   - Components moved to root-level `components/` folder
   - Global styles moved to `styles/globals.css`

2. **Configuration**
   - Replaced `vite.config.js` with `next.config.js`
   - Updated `package.json` with Next.js dependencies
   - Updated `vercel.json` for Next.js deployment

3. **Components**
   - Added `'use client'` directive to all interactive components
   - All components now work with Next.js App Router

4. **Files to Keep**
   - Old `src/` folder can be deleted after verification
   - Old `index.html` no longer needed (Next.js handles this)
   - Old `vite.config.js` can be deleted

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

The project is configured for Vercel deployment. Simply push to your repository and Vercel will automatically deploy using Next.js.
