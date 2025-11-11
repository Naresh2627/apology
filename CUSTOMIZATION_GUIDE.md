# Quick Customization Guide 💕

## Step-by-Step Instructions

### 1. Set Your Relationship Start Date
Open `src/components/Countdown.jsx` and change line 17:
```javascript
const startDate = new Date('2024-01-14T00:00:00')
```
Change to your actual date (format: YYYY-MM-DD)

### 2. Replace Photos
**Gallery Photos** - Open `src/components/Gallery.jsx` (lines 11-16):
- Replace the placeholder URLs with your actual photo URLs
- Update the `note` text for each photo (this appears on the polaroid)

**Memory Photos** - Open `src/components/Memories.jsx` (lines 16-39):
- Replace image URLs
- Update dates, captions, and full stories

### 3. Personalize Messages
**Hero Apology** - `src/components/Hero.jsx` (lines 38-41)
**Love Letter** - `src/components/Letter.jsx` (lines 30-48)
**Your Name** - `src/components/Letter.jsx` (line 50)
**Love Popups** - `src/components/LovePopup.jsx` (lines 8-15)

### 4. Add Background Music (Optional)
1. Add your music file (MP3) to the `public` folder
2. Open `src/components/MusicPlayer.jsx`
3. Uncomment lines 9-10 and update the file path:
```javascript
const audio = new Audio('/your-music-file.mp3')
if (!isPlaying) audio.play() else audio.pause()
```

### 5. Customize Colors (Optional)
Main colors are in the CSS files:
- Pink: `#ff69b4`, `#ffb6d9`, `#ffd4e5`
- Change these throughout the CSS files to your preferred colors

## Tips for Best Results

📸 **Photos**: Use high-quality images (at least 800x600px)
💝 **Messages**: Be genuine and heartfelt
🎨 **Colors**: Keep them soft and romantic
🎵 **Music**: Choose a meaningful song

## Need Help?
Check the main README.md for more details!
