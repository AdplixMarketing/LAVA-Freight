const sharp = require('sharp');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'trucks');
const LOGO_PATH = path.join(__dirname, '..', 'public', 'logo_transparent.png');

// Each image has custom placement to put the logo ON the truck body
// x, y = top-left corner of logo as fraction of image dimensions
// w = logo width as fraction of image width
// opacity = 0-1 (higher = more visible, like painted on)
// coverBranding = rectangles to paint over competitor text before placing logo

const images = [
  // ============================================================
  // LOGO ON TRUCK BODY - placed on visible truck/trailer surface
  // ============================================================
  {
    name: 'about-history',
    url: 'https://plus.unsplash.com/premium_photo-1664695368767-c42483a0bda1?w=2070&h=1380&fit=crop&q=80',
    // Red cab with white trailer side - logo on the white trailer panel
    logo: { x: 0.60, y: 0.26, w: 0.17, opacity: 0.92 },
  },
  {
    name: 'home-why-choose',
    url: 'https://plus.unsplash.com/premium_photo-1661962316679-cd9b3b70bcaa?w=2070&h=1380&fit=crop&q=80',
    // Rear view of truck on bridge - logo on the blue rear door panel
    logo: { x: 0.49, y: 0.46, w: 0.09, opacity: 0.92 },
  },
  {
    name: 'contact-hero',
    url: 'https://plus.unsplash.com/premium_photo-1770141558666-b91192f6e116?w=2070&h=1380&fit=crop&q=80',
    // White Freightliner cab side view - logo on the cab door
    logo: { x: 0.18, y: 0.20, w: 0.15, opacity: 0.88 },
  },
  {
    name: 'services-hero',
    url: 'https://plus.unsplash.com/premium_photo-1770146771171-c2ce9e6a45db?w=2070&h=1380&fit=crop&q=80',
    // White cab parked at truck stop - logo on the cab sleeper panel
    logo: { x: 0.33, y: 0.22, w: 0.13, opacity: 0.88 },
  },
  {
    name: 'fleet-semi',
    url: 'https://images.unsplash.com/photo-1766785368863-f2188a8c8b32?w=2070&h=1380&fit=crop&q=80',
    // Rear view of trailer on highway (moody) - logo on rear doors
    logo: { x: 0.32, y: 0.22, w: 0.14, opacity: 0.82 },
  },
  {
    name: 'fleet-box',
    url: 'https://images.unsplash.com/photo-1759671934974-a4928e049dec?w=2070&h=1380&fit=crop&q=80',
    // DAF truck front - large logo covering competitor text naturally
    logo: { x: 0.18, y: 0.42, w: 0.42, opacity: 0.95 },
  },
  {
    name: 'fleet-flatbed',
    url: 'https://images.unsplash.com/photo-1758549760425-a2d20c9dfa0d?w=2070&h=1380&fit=crop&q=80',
    // Purple Peterbilt show truck - logo on the cab door area
    logo: { x: 0.34, y: 0.30, w: 0.11, opacity: 0.88 },
  },
  {
    name: 'fleet-safety',
    url: 'https://plus.unsplash.com/premium_photo-1770146771112-50f69a94c522?w=2070&h=1380&fit=crop&q=80',
    // Row of trucks front view - logo on center white truck's bumper/hood
    logo: { x: 0.40, y: 0.36, w: 0.13, opacity: 0.88 },
  },
  {
    name: 'fleet-reefer',
    url: 'https://images.unsplash.com/photo-1762060853805-ac5a37f5de6c?w=2070&h=1380&fit=crop&q=80',
    // Isuzu cargo truck front - logo on front cab area
    logo: { x: 0.34, y: 0.40, w: 0.15, opacity: 0.88 },
  },
  {
    name: 'services-expedited',
    url: 'https://images.unsplash.com/photo-1761133381018-aed5063d22fe?w=2070&h=1380&fit=crop&q=80',
    // Aerial - white truck on road - logo on trailer side
    logo: { x: 0.42, y: 0.49, w: 0.07, opacity: 0.90 },
  },
  {
    name: 'services-dedicated',
    url: 'https://images.unsplash.com/photo-1766608422198-5be9ac0aac9e?w=2070&h=1380&fit=crop&q=80',
    // Truck with orange/white trailer through trees - logo on visible trailer side
    logo: { x: 0.28, y: 0.22, w: 0.12, opacity: 0.88 },
  },
  {
    name: 'home-hero',
    url: 'https://images.unsplash.com/photo-1734903251828-b8d4c0423e56?w=2070&h=1380&fit=crop&q=80',
    // Flatbed truck on road - logo near cab area (truck is medium-sized in frame)
    logo: { x: 0.24, y: 0.36, w: 0.09, opacity: 0.85 },
  },
  {
    name: 'home-drive-with-us',
    url: 'https://images.unsplash.com/photo-1644519221874-8f2a91fe3e17?w=2070&h=1380&fit=crop&q=80',
    // Blue trucks - large logo on front truck, covering "FREEDOM" naturally
    logo: { x: 0.10, y: 0.74, w: 0.28, opacity: 0.95 },
  },
  {
    name: 'careers-hero',
    url: 'https://plus.unsplash.com/premium_photo-1725408010621-ff52b055ebe2?w=2070&h=1380&fit=crop&q=80',
    // Distant white truck on mountain road - truck too small/obscured by trees
    logo: 'corner',
  },

  // ============================================================
  // CORNER WATERMARK - no clear truck body surface visible
  // ============================================================
  {
    name: 'services-ftl',
    url: 'https://images.unsplash.com/photo-1769697756411-63c1bb2d7031?w=2070&h=1380&fit=crop&q=80',
    // Aerial snowy highway - truck too small for body placement
    logo: 'corner',
  },
  {
    name: 'services-ltl',
    url: 'https://images.unsplash.com/photo-1597266833335-ccd08f703654?w=2070&h=1380&fit=crop&q=80',
    // Aerial freight yard with many trailers
    logo: 'corner',
  },
  {
    name: 'services-warehousing',
    url: 'https://plus.unsplash.com/premium_photo-1661883080934-5ecf715e9302?w=2070&h=1380&fit=crop&q=80',
    // Aerial warehouse view
    logo: 'corner',
  },
  {
    name: 'services-specialized',
    url: 'https://plus.unsplash.com/premium_photo-1661301079679-c6e1bce96c58?w=2070&h=1380&fit=crop&q=80',
    // Warehouse interior with forklift - no truck
    logo: 'corner',
  },
  {
    name: 'fleet-hero',
    url: 'https://plus.unsplash.com/premium_photo-1664299149109-1734c00270db?w=2070&h=1380&fit=crop&q=80',
    // Aerial truck yard - trucks too small
    logo: 'corner',
  },
  {
    name: 'fleet-maintenance',
    url: 'https://plus.unsplash.com/premium_photo-1664299803588-6081bc79cd67?w=2070&h=1380&fit=crop&q=80',
    // Close-up wheel maintenance - no truck body
    logo: 'corner',
  },
  {
    name: 'about-hero',
    url: 'https://images.unsplash.com/photo-1664276995144-589aa63c0355?w=2070&h=1380&fit=crop&q=80',
    // Overhead highway view - truck barely visible at edge
    logo: 'corner',
  },
  {
    name: 'careers-requirements',
    url: 'https://images.unsplash.com/photo-1747930838451-1f9c3a8ea057?w=2070&h=1380&fit=crop&q=80',
    // Emergency/busy scene - no good truck surface
    logo: 'corner',
  },
];

function download(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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

async function createLogoBuffer(logoWidth, opacity) {
  // Resize logo and set opacity
  const resized = sharp(LOGO_PATH).resize(logoWidth);
  const meta = await resized.metadata();

  const logoBuffer = await resized
    .ensureAlpha()
    .composite([{
      input: Buffer.from([255, 255, 255, Math.round(255 * opacity)]),
      raw: { width: 1, height: 1, channels: 4 },
      tile: true,
      blend: 'dest-in',
    }])
    .png()
    .toBuffer();

  return logoBuffer;
}

async function processImage(imageBuffer, outputPath, config) {
  const meta = await sharp(imageBuffer).metadata();
  const composites = [];

  // Step 1: Cover competitor branding if needed
  if (config.coverBranding) {
    for (const cover of config.coverBranding) {
      const rectW = Math.round(meta.width * cover.w);
      const rectH = Math.round(meta.height * cover.h);
      const rectX = Math.round(meta.width * cover.x);
      const rectY = Math.round(meta.height * cover.y);

      const rect = await sharp({
        create: {
          width: rectW,
          height: rectH,
          channels: 4,
          background: { r: cover.r, g: cover.g, b: cover.b, alpha: 255 },
        },
      }).png().toBuffer();

      composites.push({
        input: rect,
        left: rectX,
        top: rectY,
      });
    }
  }

  // Step 2: Place logo
  if (config.logo === 'corner') {
    // Corner watermark - bottom right, semi-transparent
    const logoWidth = Math.round(meta.width * 0.14);
    const logoBuffer = await createLogoBuffer(logoWidth, 0.75);
    const logoMeta = await sharp(logoBuffer).metadata();
    const padding = Math.round(meta.width * 0.02);

    composites.push({
      input: logoBuffer,
      left: meta.width - logoMeta.width - padding,
      top: meta.height - logoMeta.height - padding,
    });
  } else {
    // On-truck placement - positioned on the truck body
    const logoWidth = Math.round(meta.width * config.logo.w);
    const logoBuffer = await createLogoBuffer(logoWidth, config.logo.opacity);
    const logoX = Math.round(meta.width * config.logo.x);
    const logoY = Math.round(meta.height * config.logo.y);

    composites.push({
      input: logoBuffer,
      left: logoX,
      top: logoY,
    });
  }

  // Step 3: Composite everything and save
  await sharp(imageBuffer)
    .composite(composites)
    .jpeg({ quality: 85 })
    .toFile(outputPath);
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log(`Processing ${images.length} images with truck body logo placement...\n`);

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const outputPath = path.join(OUTPUT_DIR, `${img.name}.jpg`);
    const placementType = img.logo === 'corner' ? 'corner' : 'on-truck';

    try {
      process.stdout.write(`[${i + 1}/${images.length}] ${img.name} (${placementType})... downloading... `);
      const buffer = await download(img.url);
      process.stdout.write(`branding... `);
      await processImage(buffer, outputPath, img);
      console.log(`done (${Math.round(fs.statSync(outputPath).size / 1024)}KB)`);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
    }
  }

  console.log('\nAll done! Logo placed on truck bodies where visible.');
  console.log('Images saved to public/trucks/');
}

main();
