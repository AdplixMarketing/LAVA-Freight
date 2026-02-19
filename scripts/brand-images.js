const sharp = require('sharp');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'trucks');
const LOGO_PATH = path.join(__dirname, '..', 'public', 'logo.png');

// 22 unique images - no repeats, all different truck/freight photos
const images = [
  // Home page
  { name: 'home-hero', url: 'https://images.unsplash.com/photo-1734903251828-b8d4c0423e56?w=2070&h=1380&fit=crop&q=80' },
  { name: 'home-why-choose', url: 'https://plus.unsplash.com/premium_photo-1661962316679-cd9b3b70bcaa?w=2070&h=1380&fit=crop&q=80' },
  { name: 'home-drive-with-us', url: 'https://images.unsplash.com/photo-1644519221874-8f2a91fe3e17?w=2070&h=1380&fit=crop&q=80' },

  // About page
  { name: 'about-hero', url: 'https://images.unsplash.com/photo-1664276995144-589aa63c0355?w=2070&h=1380&fit=crop&q=80' },
  { name: 'about-history', url: 'https://plus.unsplash.com/premium_photo-1664695368767-c42483a0bda1?w=2070&h=1380&fit=crop&q=80' },

  // Services page
  { name: 'services-hero', url: 'https://plus.unsplash.com/premium_photo-1770146771171-c2ce9e6a45db?w=2070&h=1380&fit=crop&q=80' },
  { name: 'services-ftl', url: 'https://images.unsplash.com/photo-1769697756411-63c1bb2d7031?w=2070&h=1380&fit=crop&q=80' },
  { name: 'services-ltl', url: 'https://images.unsplash.com/photo-1597266833335-ccd08f703654?w=2070&h=1380&fit=crop&q=80' },
  { name: 'services-expedited', url: 'https://images.unsplash.com/photo-1761133381018-aed5063d22fe?w=2070&h=1380&fit=crop&q=80' },
  { name: 'services-dedicated', url: 'https://images.unsplash.com/photo-1766608422198-5be9ac0aac9e?w=2070&h=1380&fit=crop&q=80' },
  { name: 'services-warehousing', url: 'https://plus.unsplash.com/premium_photo-1661883080934-5ecf715e9302?w=2070&h=1380&fit=crop&q=80' },
  { name: 'services-specialized', url: 'https://plus.unsplash.com/premium_photo-1661301079679-c6e1bce96c58?w=2070&h=1380&fit=crop&q=80' },

  // Fleet page
  { name: 'fleet-hero', url: 'https://plus.unsplash.com/premium_photo-1664299149109-1734c00270db?w=2070&h=1380&fit=crop&q=80' },
  { name: 'fleet-semi', url: 'https://images.unsplash.com/photo-1766785368863-f2188a8c8b32?w=2070&h=1380&fit=crop&q=80' },
  { name: 'fleet-box', url: 'https://images.unsplash.com/photo-1759671934974-a4928e049dec?w=2070&h=1380&fit=crop&q=80' },
  { name: 'fleet-reefer', url: 'https://images.unsplash.com/photo-1762060853805-ac5a37f5de6c?w=2070&h=1380&fit=crop&q=80' },
  { name: 'fleet-flatbed', url: 'https://images.unsplash.com/photo-1758549760425-a2d20c9dfa0d?w=2070&h=1380&fit=crop&q=80' },
  { name: 'fleet-safety', url: 'https://plus.unsplash.com/premium_photo-1770146771112-50f69a94c522?w=2070&h=1380&fit=crop&q=80' },
  { name: 'fleet-maintenance', url: 'https://plus.unsplash.com/premium_photo-1664299803588-6081bc79cd67?w=2070&h=1380&fit=crop&q=80' },

  // Contact page
  { name: 'contact-hero', url: 'https://plus.unsplash.com/premium_photo-1770141558666-b91192f6e116?w=2070&h=1380&fit=crop&q=80' },

  // Careers page
  { name: 'careers-hero', url: 'https://plus.unsplash.com/premium_photo-1725408010621-ff52b055ebe2?w=2070&h=1380&fit=crop&q=80' },
  { name: 'careers-requirements', url: 'https://images.unsplash.com/photo-1747930838451-1f9c3a8ea057?w=2070&h=1380&fit=crop&q=80' },
];

function download(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function processImage(imageBuffer, outputPath) {
  const mainImage = sharp(imageBuffer);
  const meta = await mainImage.metadata();

  // Scale logo to ~12% of image width
  const logoWidth = Math.round(meta.width * 0.12);

  // Create semi-transparent logo
  const logoBuffer = await sharp(LOGO_PATH)
    .resize(logoWidth)
    .ensureAlpha()
    .composite([{
      input: Buffer.from([255, 255, 255, Math.round(255 * 0.75)]),
      raw: { width: 1, height: 1, channels: 4 },
      tile: true,
      blend: 'dest-in',
    }])
    .png()
    .toBuffer();

  // Composite logo in bottom-right corner with padding
  const padding = Math.round(meta.width * 0.02);
  const logoMeta = await sharp(logoBuffer).metadata();

  await mainImage
    .composite([{
      input: logoBuffer,
      left: meta.width - logoMeta.width - padding,
      top: meta.height - logoMeta.height - padding,
    }])
    .jpeg({ quality: 85 })
    .toFile(outputPath);
}

async function main() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`Processing ${images.length} images...\n`);

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const outputPath = path.join(OUTPUT_DIR, `${img.name}.jpg`);

    try {
      process.stdout.write(`[${i + 1}/${images.length}] ${img.name}... downloading... `);
      const buffer = await download(img.url);
      process.stdout.write(`branding... `);
      await processImage(buffer, outputPath);
      console.log(`done (${Math.round(fs.statSync(outputPath).size / 1024)}KB)`);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
    }
  }

  console.log('\nAll done! Images saved to public/trucks/');
}

main();
