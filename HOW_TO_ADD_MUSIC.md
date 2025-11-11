# How to Add Background Music 🎵

## Quick Steps:

### Step 1: Get Your Music File
- Choose a romantic song (MP3 format recommended)
- Make sure you have the rights to use it
- Keep the file size reasonable (under 10MB is best)

### Step 2: Add Music to Your Project

**Option A: Use a file named `music.mp3` (Easiest!)**
1. Rename your music file to `music.mp3`
2. Copy it to the `public` folder (same level as `images` folder)
3. That's it! The code is already set up to use `/music.mp3`

**Option B: Use a different filename**
1. Copy your music file to the `public` folder
2. Open `src/components/MusicPlayer.jsx`
3. Change line 11 from:
   ```javascript
   audioRef.current = new Audio('/music.mp3')
   ```
   To:
   ```javascript
   audioRef.current = new Audio('/your-song-name.mp3')
   ```

### Step 3: Test It
1. Run `npm run dev`
2. Click the 🎵 Music Player button (bottom-right)
3. Music should start playing!

## File Structure
```
public/
  ├── images/
  │   ├── photo1.jpg
  │   └── ...
  └── music.mp3  ← Put your music file here
```

## Supported Formats
✅ .mp3 (recommended - best compatibility)
✅ .wav (larger file size)
✅ .ogg
✅ .m4a

## Tips
- **Volume**: Music is set to 50% volume by default
- **Loop**: Music will loop automatically
- **Autoplay**: Music won't autoplay (user must click the button)
- **Mobile**: Some mobile browsers require user interaction before playing audio

## Troubleshooting

**Music doesn't play?**
- Check the file is in the `public` folder
- Check the filename matches exactly (case-sensitive!)
- Check browser console for errors (F12)
- Try a different browser

**Music is too loud/quiet?**
Open `src/components/MusicPlayer.jsx` and change line 12:
```javascript
audioRef.current.volume = 0.5  // Change 0.5 to 0.1-1.0
```
- 0.1 = 10% volume
- 0.5 = 50% volume (default)
- 1.0 = 100% volume

## Song Suggestions
Choose a meaningful song that represents your relationship:
- Your song together
- Song from your first date
- Her favorite song
- A romantic instrumental

---

**Note**: Make sure you have the legal right to use any music file!
