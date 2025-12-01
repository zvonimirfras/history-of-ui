const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.historyofui.com';
const EVENTS_DIR = path.join(__dirname, '../components/events');

function generateSitemap() {
    const files = fs.readdirSync(EVENTS_DIR);
    const eventIds = files
        .filter(file => file.endsWith('.tsx') && file !== 'index.tsx' && file !== 'types.tsx' && file !== 'types.ts')
        .map(file => file.replace('.tsx', ''));

    const currentDate = new Date().toISOString().split('T')[0];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${SITE_URL}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
${eventIds.map(id => `    <url>
        <loc>${SITE_URL}/event/${id}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
    console.log(`Sitemap generated successfully with ${eventIds.length + 1} URLs!`);
}

generateSitemap();
