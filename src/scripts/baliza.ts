// Cargador de la baliza de Cloudflare Web Analytics (estadísticas de visitas sin cookies). La regla de «solo en
// producción y con testimonio» vive en debeCargarBaliza; la baliza no va escrita en el HTML de ninguna página.
import { debeCargarBaliza } from '../lib/eventos';

const SRC = 'https://static.cloudflareinsights.com/beacon.min.js';

/** Añade la baliza si toca. Devuelve si la ha añadido; nunca lanza y no la añade dos veces. */
export function cargaBaliza(doc: Document, hostname: string, testimonio: string): boolean {
  try {
    if (!debeCargarBaliza(hostname, testimonio)) return false;
    if (doc.querySelector(`script[src="${SRC}"]`)) return false;
    const s = doc.createElement('script');
    // Como el fragmento que da el panel de Cloudflare (21/11/2026): type="module", sin defer.
    s.type = 'module';
    s.src = SRC;
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: testimonio }));
    (doc.head ?? doc.body).appendChild(s);
    return true;
  } catch {
    return false;
  }
}
