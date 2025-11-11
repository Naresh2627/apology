# Apology & Memory Website 💕

A beautiful, interactive React website to express your apology and share precious memories with your loved one.

## 🌐 Live Demo
[View Live Website](https://apology-naresh.vercel.app)

## 📸 Features Overview

## Features

✨ **Interactive Hero Section** - Floating hearts animation with smooth fade-in effects
🎊 **Confetti Celebration** - Confetti bursts when clicking "See Our Memories"
🖼️ **Polaroid Photo Gallery** - Beautiful polaroid-style photos with handwritten notes
🔍 **Image Lightbox** - Click images to view in fullscreen with prev/next navigation
📖 **Expandable Memory Cards** - Click to reveal full stories behind each memory
💌 **Interactive Letter** - Click envelope to open and read the letter with animated text
⏱️ **Live Countdown Timer** - Shows time together (days, hours, minutes, seconds)
💝 **Random Love Messages** - Surprise popup messages appear periodically
🎨 **Parallax Scrolling** - Beautiful parallax effect with floating hearts
❤️ **Clickable Hearts** - Click the footer heart to send floating hearts
🎵 **Music Player** - Toggle background music (add your own music file)

## Setup

1. Install dependencies:
```bash
npm install
```

2. **Add your photos** (Important!):
   - **Easy way**: Double-click `open-images-folder.bat` to open the images folder
   - Put your photos in the `public/images` folder
   - Name them: `photo1.jpg` through `photo6.jpg` (for gallery)
   - And: `memory1.jpg` through `memory4.jpg` (for memories)
   - See `HOW_TO_ADD_PHOTOS.md` for detailed instructions

3. **Add background music** (Optional):
   - Copy your music file to the `public` folder
   - Rename it to `music.mp3`
   - See `HOW_TO_ADD_MUSIC.md` for detailed instructions

4. Run development server:
```bash
npm run dev
```

5. Open your browser to the URL shown (usually http://localhost:5173)

## Customization

### Replace Images
- Update image URLs in `src/components/Gallery.jsx` and `src/components/Memories.jsx`
- Replace placeholder URLs with your actual photo URLs or local images
- Update polaroid notes in Gallery.jsx for each photo

### Edit Text
- **Apology message**: Edit in `src/components/Hero.jsx`
- **Memory captions & stories**: Edit in `src/components/Memories.jsx`
- **Love letter**: Edit in `src/components/Letter.jsx`
- **Your name**: Update signature in `src/components/Letter.jsx`
- **Love popup messages**: Edit messages array in `src/components/LovePopup.jsx`
- **Parallax quote**: Edit in `src/components/ParallaxSection.jsx`

### Set Your Relationship Date
- Update the `startDate` in `src/components/Countdown.jsx` to your actual relationship start date

### Add Music
- Add your music file to the `public` folder
- Update `src/components/MusicPlayer.jsx` with the file path

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy!

## Technologies Used

- React 18
- Vite
- CSS3 Animations
- Intersection Observer API

Made with ❤️
