const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svg = `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="128" fill="#0e0c0b"/>
  <text x="256" y="380" font-family="'Times New Roman', serif" font-style="italic" font-size="340" font-weight="bold" fill="#E8553D" text-anchor="middle">F</text>
  <circle cx="390" cy="380" r="28" fill="#E8553D"/>
</svg>`;

const ogSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0e0c0b"/>
  <rect x="524" y="239" width="152" height="152" rx="38" fill="#141210" stroke="#E8553D" stroke-width="2"/>
  <text x="600" y="340" font-family="'Times New Roman', serif" font-style="italic" font-size="100" font-weight="bold" fill="#E8553D" text-anchor="middle">F</text>
  <circle cx="640" cy="340" r="8" fill="#E8553D"/>
  <text x="600" y="440" font-family="sans-serif" font-size="32" fill="#FFFFFF" font-weight="bold" text-anchor="middle" letter-spacing="4">FURNSHIN</text>
</svg>`;

async function generate() {
    const buffer = Buffer.from(svg);
    const sizes = [16, 32, 48, 64, 128, 180, 192, 512];

    if (!fs.existsSync('public')) fs.mkdirSync('public');

    for (const size of sizes) {
        await sharp(buffer).resize(size, size).png().toFile('public/favicon_' + size + 'x' + size + '.png');
    }
    await sharp(buffer).resize(32, 32).png().toFile('public/favicon.ico');

    if (!fs.existsSync('public/og')) fs.mkdirSync('public/og');

    const ogBuffer = Buffer.from(ogSvg);
    const ogFiles = ['home.jpg', 'services.jpg', 'portfolio.jpg', 'contact.jpg', 'blog.jpg'];
    for (const file of ogFiles) {
        await sharp(ogBuffer).jpeg({ quality: 90 }).toFile('public/og/' + file);
    }

    console.log("Images generated successfully!");
}

generate().catch(console.error);
