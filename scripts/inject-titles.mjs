// Runs after `npm run build` (as the "postbuild" script).
// Bakes a distinct <title> and og:title into each prerendered page so Google
// sees a unique title per URL. Edit the TITLES map to taste.
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';

const TITLES = {
  'index.html':        'SAR — Academia Deportiva Internacional · Pádel, Tenis y Fútbol en España',
  'padel.html':        'Pádel — Academia y Escuela Residencial · SAR',
  'tenis.html':        'Tenis — El Sistema Español de Formación · SAR',
  'futbol.html':       'Fútbol — En Alianza con Prime Play · SAR',
  'campamentos.html':  'Campamentos — Verano y Semana Santa · SAR',
  'metodo.html':       'El Método — Deportivo, Académico y de Carácter · SAR',
  'campus.html':       'El Campus — Instalaciones y Residencia · SAR',
  'contacto.html':     'Contacto — SAR',
  'privacy.html':      'Aviso de Privacidad — SAR',
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let count = 0;
for (const [rel, title] of Object.entries(TITLES)) {
  const path = join(DIST, rel);
  if (!existsSync(path)) { console.warn(`[inject-titles] skip: ${path} not found`); continue; }
  let html = await readFile(path, 'utf8');
  const safe = esc(title);
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safe}</title>`);
  html = html.replace(/(<meta\s+property="og:title"\s+content=")[\s\S]*?("\s*\/?>)/i, `$1${safe}$2`);
  await writeFile(path, html);
  count++;
}
console.log(`[inject-titles] titles injected into ${count} pages`);
