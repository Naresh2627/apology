# How to Add Your Own Photos 📸

## Easy Steps:

### 1. Prepare Your Photos
- Collect 6 photos for the gallery
- Collect 4 photos for the memories section
- Make sure they're good quality (at least 800x600 pixels)

### 2. Add Photos to the Project

**Option A: Copy photos to the images folder**
1. Open the `public/images` folder in your project
2. Copy your photos there
3. Rename them:
   - For Gallery: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`, `photo6.jpg`
   - For Memories: `memory1.jpg`, `memory2.jpg`, `memory3.jpg`, `memory4.jpg`

**Option B: Use online photos**
1. Upload your photos to an image hosting service (like Imgur, Google Photos, etc.)
2. Get the direct image URL
3. Replace the URLs in the code

### 3. The Code is Already Set Up!

I've already updated the code to use local photos from `/images/` folder.

**Gallery photos** are in: `src/components/Gallery.jsx` (lines 11-48)
**Memory photos** are in: `src/components/Memories.jsx` (lines 10-37)

### 4. Supported File Formats
- `.jpg` or `.jpeg` (recommended)
- `.png`
- `.gif`
- `.webp`

### 5. Example File Structure
```
public/
  └── images/
      ├── photo1.jpg    ← Your gallery photos
      ├── photo2.jpg
      ├── photo3.jpg
      ├── photo4.jpg
      ├── photo5.jpg
      ├── photo6.jpg
      ├── memory1.jpg   ← Your memory photos
      ├── memory2.jpg
      ├── memory3.jpg
      └── memory4.jpg
```

### 6. If Photos Don't Show Up
- Make sure the file names match exactly (case-sensitive!)
- Check the file extension (.jpg, .png, etc.)
- Restart the dev server: Stop it (Ctrl+C) and run `npm run dev` again

### 7. Using Different File Names?
If you want to use different names like `us_at_beach.jpg`, just update the URL in the code:

```javascript
url: '/images/us_at_beach.jpg',
```

## Quick Test
After adding photos, refresh your browser. If you see broken image icons, check:
1. File names are correct
2. Files are in the `public/images` folder
3. File extensions match (.jpg vs .jpeg)

That's it! Your photos will now appear in the website! 💕
