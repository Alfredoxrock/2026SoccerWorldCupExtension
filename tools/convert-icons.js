const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = [16, 32, 48, 128];
const iconsDir = path.join(__dirname, '..', 'icons');

async function convertIcons() {
    console.log('Converting SVG icons to PNG...\n');

    for (const size of sizes) {
        const svgPath = path.join(iconsDir, `icon${size}.svg`);
        const pngPath = path.join(iconsDir, `icon${size}.png`);

        try {
            // Check if SVG exists
            await fs.access(svgPath);

            // Convert SVG to PNG
            await sharp(svgPath)
                .resize(size, size)
                .png()
                .toFile(pngPath);

            console.log(`✓ Created ${size}x${size} PNG icon`);
        } catch (error) {
            console.error(`✗ Error converting icon${size}.svg:`, error.message);
        }
    }

    console.log('\n✓ Icon conversion complete!');
}

convertIcons().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
