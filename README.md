# 🏆 World Cup 2026 Countdown - Chrome Extension

A beautiful Chrome extension that displays a live countdown to the FIFA World Cup 2026 opening match on June 11, 2026.

## 🎯 Features

- ⚽ **Live Countdown** - Real-time countdown showing days, hours, minutes, and seconds
- 🎨 **Beautiful Design** - Modern gradient interface with smooth animations
- 📅 **Event Details** - Opening match information (Mexico City, Mexico)
- 🔗 **Quick Link** - Direct access to official FIFA World Cup 2026 information
- 🌍 **Host Countries** - USA 🇺🇸, Canada 🇨🇦, Mexico 🇲🇽

## 📦 Installation

### Load as Unpacked Extension

1. **Download/Clone** this folder to your computer

2. **Open Chrome Extensions Page**
   - Navigate to `chrome://extensions/`
   - Or click the three dots menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner

4. **Load the Extension**
   - Click "Load unpacked" button
   - Select the `2026WorldCupCountdown` folder
   - The extension icon will appear in your toolbar

5. **Pin the Extension** (Optional)
   - Click the puzzle piece icon in Chrome toolbar
   - Find "World Cup 2026 Countdown"
   - Click the pin icon to keep it visible

## 🚀 Usage

- Click the extension icon to see the countdown
- Watch as it updates every second
- Click "Learn More" to visit the official FIFA World Cup 2026 page
- Dynamic messages change based on how much time remains

## 📁 Project Structure

```
2026WorldCupCountdown/
├── manifest.json       # Extension configuration (Manifest V3)
├── popup.html          # Countdown popup interface
├── popup.css           # Styles with gradient design
├── popup.js            # Countdown logic and updates
├── icons/              # Extension icons
│   ├── icon.svg        # Source SVG icon
│   ├── icon16.png      # 16x16 toolbar icon
│   ├── icon32.png      # 32x32 toolbar icon
│   ├── icon48.png      # 48x48 extension icon
│   └── icon128.png     # 128x128 Chrome Web Store icon
└── README.md           # This file
```

## ⚙️ Technical Details

- **Manifest Version**: 3 (Latest Chrome standard)
- **Permissions**: None required
- **Target Date**: June 11, 2026, 12:00 PM EDT (16:00 UTC)
- **Update Interval**: Updates every 1 second

## 🎨 Customization

You can customize the extension by editing:

- **Colors**: Modify CSS variables in `popup.css`
- **Target Date**: Change `WORLD_CUP_DATE` in `popup.js`
- **Messages**: Update the message logic in `popup.js`
- **Design**: Adjust HTML structure in `popup.html`

## 📝 Notes

- The countdown automatically shows "The World Cup has begun!" when the date arrives
- Messages change dynamically based on time remaining:
  - More than 1 year: "The wait continues..."
  - Less than 1 year: "Less than a year to go!"
  - Less than 6 months: "Getting closer!"
  - Less than 3 months: "The excitement builds!"
  - Less than 1 month: "Almost there!"
  - Less than 1 week: "Final countdown!"

## 🌐 Official Links

- [FIFA World Cup 2026 Official Site](https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026)

## 📄 License

Free to use and modify. Created for World Cup fans worldwide! ⚽🌍

---

**Enjoy counting down to the World Cup 2026!** 🏆🎉
