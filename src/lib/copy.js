// Reads COPY.md at build time. Every word shown on the site comes from that
// file, so editing COPY.md is how the copy changes.
import fs from 'node:fs';
import path from 'node:path';

const raw = fs
  .readFileSync(path.resolve(process.cwd(), 'COPY.md'), 'utf8')
  .replace(/\r\n/g, '\n');

const sections = [];
{
  let cur = null;
  let block = null;
  for (const line of raw.split('\n')) {
    const h = line.match(/^## (.+)$/);
    if (h) {
      cur = { name: h[1].trim(), blocks: [] };
      sections.push(cur);
      block = null;
      continue;
    }
    if (!cur) continue;
    if (/^---\s*$/.test(line)) {
      block = null;
      continue;
    }
    const m = line.match(/^\*\*(.+?)\*\*\s*(.*)$/);
    let made = null;
    if (m) {
      const bold = m[1];
      const rest = m[2];
      if (bold.startsWith('H2: ')) {
        made = { type: 'h2', label: bold.slice(4).replace(/\.$/, ''), inline: rest, lines: [] };
      } else if (bold.endsWith(':')) {
        made = { type: 'field', label: bold.slice(0, -1), inline: rest, lines: [] };
      } else if (/^\(.*\):$/.test(rest)) {
        made = { type: 'field', label: bold, inline: '', lines: [] };
      }
    }
    if (made) {
      cur.blocks.push(made);
      block = made;
      continue;
    }
    if (block) block.lines.push(line);
  }
  for (const s of sections) {
    for (const b of s.blocks) {
      b.body = b.lines.join('\n').trim();
      b.text = [b.inline, b.body].filter(Boolean).join('\n\n');
    }
  }
}

export function sec(name) {
  const s = sections.find(
    (x) => x.name === name || x.name.replace(/^\d+\.\s*/, '') === name,
  );
  if (!s) throw new Error(`COPY.md section not found: ${name}`);
  return {
    name: s.name,
    blocks: s.blocks,
    h2s: s.blocks.filter((b) => b.type === 'h2'),
    has(label) {
      return s.blocks.some((b) => b.type === 'field' && b.label === label);
    },
    f(label) {
      const b = s.blocks.find((x) => x.type === 'field' && x.label === label);
      if (!b) throw new Error(`COPY.md field "${label}" not found in "${s.name}"`);
      return b.text;
    },
    h2(label) {
      const b = s.blocks.find((x) => x.type === 'h2' && x.label === label);
      if (!b) throw new Error(`COPY.md H2 "${label}" not found in "${s.name}"`);
      return b;
    },
  };
}

// Bracketed labels in the copy that are links or buttons. Any other bracketed
// text is a placeholder and is shown as written.
export const LINKS = {
  Home: '/',
  Models: '/models/',
  Brands: '/brands/',
  'The 1990s': '/the-1990s/',
  Gallery: '/gallery/',
  Articles: '/articles/',
  'Get alerts': '/get-alerts/',
  About: '/about/',
  Privacy: '/privacy/',
  'Browse the models': '/models/',
  'See all models': '/models/',
  'Read the full article: The 280 PS agreement': '/articles/280-ps-agreement/',
  'Read more: A history of drifting': '/articles/history-of-drifting/',
};

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inline(text) {
  let s = esc(text);
  s = s.replace(/\[([^\]]+)\]/g, (m, label) =>
    LINKS[label] ? `<a href="${LINKS[label]}">${label}</a>` : `<span class="ph">${m}</span>`,
  );
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/[\w.+-]+@[\w-]+\.[\w.]+\w/g, (m) => `<a href="mailto:${m}">${m}</a>`);
  return s;
}

export const paragraphs = (body) =>
  body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

const ONLY_BRACKETS = /^(\[[^\]]+\]\s*)+$/;
export const bracketLabels = (p) => [...p.matchAll(/\[([^\]]+)\]/g)].map((m) => m[1]);
export const isActions = (p) => ONLY_BRACKETS.test(p) && bracketLabels(p).every((l) => LINKS[l]);

export function actions(p, { primary = true } = {}) {
  return `<p class="actions">${bracketLabels(p)
    .map(
      (l, i) =>
        `<a class="btn ${i === 0 && primary ? 'btn--primary' : 'btn--ghost'}" href="${LINKS[l]}">${l}</a>`,
    )
    .join('')}</p>`;
}

export function blocks(body, opts = {}) {
  return paragraphs(body)
    .map((p) => {
      const lines = p.split('\n');
      if (lines.every((l) => l.startsWith('|'))) return '';
      if (lines.every((l) => /^- /.test(l))) {
        return `<ul>${lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join('')}</ul>`;
      }
      if (isActions(p)) return actions(p, opts);
      return `<p>${lines.map(inline).join('<br>')}</p>`;
    })
    .join('\n');
}

// "> quoted" blocks, returned as plain paragraphs.
export const quote = (body) =>
  paragraphs(
    body
      .split('\n')
      .filter((l) => l.startsWith('>'))
      .map((l) => l.replace(/^> ?/, ''))
      .join('\n'),
  );

// "- **Lead.** Text" list items.
export const leadItems = (body) =>
  body
    .split('\n')
    .map((l) => l.match(/^- \*\*(.+?)\*\*\s*(.*)$/))
    .filter(Boolean)
    .map((m) => ({ lead: m[1].replace(/\.$/, ''), text: m[2] }));

// "Intro line: text" style lines inside a block.
export function prefixed(body, prefix) {
  const line = body.split('\n').find((l) => l.startsWith(prefix));
  return line ? line.slice(prefix.length).trim() : '';
}

export const firstSentence = (t) => (t.match(/^.*?[.!?](?=\s+[A-Z]|$)/s) || [t])[0];
