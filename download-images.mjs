/**
 * Script de téléchargement des images Figma
 * Télécharge toutes les images du design dans public/images/
 * Usage : node download-images.mjs
 */
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import https from 'https';
import http from 'http';

// Créer le dossier images s'il n'existe pas
const dir = './public/images';
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

// Liste de toutes les images à télécharger : [nom_fichier, url_figma]
const images = [
  // Logo
  ['logo-smsprotech.png', 'https://www.figma.com/api/mcp/asset/becf3254-1cd7-40da-ae49-abb36dd39af9'],

  // Hero
  ['hero-bg.jpg', 'https://www.figma.com/api/mcp/asset/3e980bec-32f1-45d2-b71d-cb3d876d0511'],

  // About
  ['about-photo.jpg', 'https://www.figma.com/api/mcp/asset/decd044d-2397-40c0-ad7d-c68b031816f5'],

  // Engagements
  ['engagements-bg.jpg', 'https://www.figma.com/api/mcp/asset/9cf49b9f-0ae5-4a86-84e4-fa63cd9ef10a'],
  ['icon-reactivite.png', 'https://www.figma.com/api/mcp/asset/4de8ebd7-838f-499c-b1ae-fd6dc7adf143'],
  ['icon-securite.png', 'https://www.figma.com/api/mcp/asset/9229dff2-f544-4e1c-9130-4feb549851ab'],
  ['icon-travail.png', 'https://www.figma.com/api/mcp/asset/f842158d-e834-4d6a-8101-0e37eccbf2ed'],
  ['icon-tracabilite.png', 'https://www.figma.com/api/mcp/asset/bdd7dc4e-eb31-470c-8274-a2383006b00a'],
  ['icon-interlocuteur.png', 'https://www.figma.com/api/mcp/asset/3125d9c4-8429-4e44-9a2f-f9c0afe7a42c'],

  // Services (photos des cartes)
  ['service-01.jpg', 'https://www.figma.com/api/mcp/asset/a5bfffdb-3e7b-4b60-86a8-14cfb21228f7'],
  ['service-02.jpg', 'https://www.figma.com/api/mcp/asset/3e681de1-7ba5-49b3-a33c-78639ecff8d9'],
  ['service-03.jpg', 'https://www.figma.com/api/mcp/asset/85c30fe0-bdd7-40b2-b19f-089bcd8b680f'],
  ['service-04.jpg', 'https://www.figma.com/api/mcp/asset/cdbeae76-a76b-4f9a-ba2a-c8bbae8912ae'],
  ['service-05.jpg', 'https://www.figma.com/api/mcp/asset/8704e2f3-382d-44d2-b229-d4777a180099'],
  ['service-06.jpg', 'https://www.figma.com/api/mcp/asset/d1489716-da41-448d-8e37-6a0dd7e80da4'],

  // Intervention
  ['intervention-bg.jpg', 'https://www.figma.com/api/mcp/asset/d9e31720-35c6-4d63-adf7-e0c6ec0fadb0'],

  // Valeurs (photos de fond)
  ['valeur-01.jpg', 'https://www.figma.com/api/mcp/asset/f8fb25bf-c471-46c3-8708-7beaaf958110'],
  ['valeur-02.jpg', 'https://www.figma.com/api/mcp/asset/cb664102-d5ab-420e-85d7-6a69f11bdd33'],
  ['valeur-03.jpg', 'https://www.figma.com/api/mcp/asset/65365b2a-abd9-4eb1-8888-e385b16d1caf'],
  ['valeur-04.jpg', 'https://www.figma.com/api/mcp/asset/97aa1c16-077e-4433-83fc-8c70bc368a9d'],

  // Valeurs (icônes)
  ['icon-valeur-01.png', 'https://www.figma.com/api/mcp/asset/8220810f-9d98-43d0-b896-1d91315ffc7c'],
  ['icon-valeur-02.png', 'https://www.figma.com/api/mcp/asset/dd7be2c0-9733-4ab9-9db5-a60dc3df20ee'],
  ['icon-valeur-03.png', 'https://www.figma.com/api/mcp/asset/90dd213e-98f3-4426-87e8-968c0c7dfb05'],
  ['icon-valeur-04.png', 'https://www.figma.com/api/mcp/asset/5fc1244b-5110-427f-be91-19d5668f0f0d'],

  // Secteurs (photos de fond)
  ['secteur-agro.jpg', 'https://www.figma.com/api/mcp/asset/d3bbce34-b4d4-41f1-9bda-c310e4f8f014'],
  ['secteur-pharma.jpg', 'https://www.figma.com/api/mcp/asset/95f2f1ef-cefa-488e-b9d6-13a28771675b'],
  ['secteur-manuf.jpg', 'https://www.figma.com/api/mcp/asset/d7936a7e-4cc1-47c6-9094-56b87e5a8237'],
  ['secteur-logistique.jpg', 'https://www.figma.com/api/mcp/asset/9d7390aa-94ed-4914-ad56-ad83976ec943'],
  ['secteur-auto.jpg', 'https://www.figma.com/api/mcp/asset/ef99fbb1-d975-4ca2-a317-11773404bcbc'],
  ['secteur-energie.jpg', 'https://www.figma.com/api/mcp/asset/c5f2e9ed-aaa3-454d-b8b5-6276e7fb9e0b'],

  // Secteurs (icônes)
  ['icon-secteur-agro.png', 'https://www.figma.com/api/mcp/asset/eba9050c-04a9-4664-9d0b-f0bf80da979c'],
  ['icon-secteur-pharma.png', 'https://www.figma.com/api/mcp/asset/7648f3cf-ad36-4770-9498-097d4c7adca0'],
  ['icon-secteur-manuf.png', 'https://www.figma.com/api/mcp/asset/d8e4fc7a-5f73-4139-8ff1-56ee3df988f7'],
  ['icon-secteur-auto.png', 'https://www.figma.com/api/mcp/asset/4dac4fe9-305c-4937-b368-7c1d9ba49caf'],
  ['icon-secteur-energie.png', 'https://www.figma.com/api/mcp/asset/a09ecbd0-2945-48fb-b712-ca1cd1bd58d9'],

  // Testimonials
  ['avatar-amine.jpg', 'https://www.figma.com/api/mcp/asset/c090c048-da7d-4e31-a2d5-384b57352aaa'],
  ['quote-marks.png', 'https://www.figma.com/api/mcp/asset/f231c059-8bcd-4993-b5ef-df374337073a'],
  ['slider-dots.png', 'https://www.figma.com/api/mcp/asset/1092d375-1f3a-485f-87df-eaadb666df6f'],

  // Footer
  ['footer-bg.jpg', 'https://www.figma.com/api/mcp/asset/400158db-2844-480f-b0c2-2c6552f0af9e'],
];

/**
 * Télécharge un fichier depuis une URL (suit les redirections)
 * @param {string} url - URL source
 * @param {string} filepath - Chemin de destination
 * @returns {Promise<void>}
 */
function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      // Suivre les redirections (301, 302, 307, 308)
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} pour ${filepath}`));
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        writeFileSync(filepath, Buffer.concat(chunks));
        resolve();
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

// Télécharger toutes les images en parallèle (max 5 simultanées)
async function main() {
  console.log(`Téléchargement de ${images.length} images dans ${dir}/...\n`);
  let done = 0;
  const total = images.length;

  // Traitement par lots de 5
  for (let i = 0; i < images.length; i += 5) {
    const batch = images.slice(i, i + 5);
    await Promise.all(batch.map(async ([name, url]) => {
      try {
        await download(url, `${dir}/${name}`);
        done++;
        console.log(`  [${done}/${total}] ${name}`);
      } catch (err) {
        done++;
        console.error(`  [${done}/${total}] ERREUR ${name}: ${err.message}`);
      }
    }));
  }

  console.log(`\nTerminé ! ${done}/${total} images téléchargées dans ${dir}/`);
}

main();
