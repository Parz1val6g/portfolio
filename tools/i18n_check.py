import re
from pathlib import Path

root = Path('c:/Users/joelt/blog_')
html = (root / 'index.html').read_text(encoding='utf-8')
js = (root / 'assets/js/inline.js').read_text(encoding='utf-8')

# extract data-i18n keys from HTML
html_keys = re.findall(r'data-i18n=["\']([a-z0-9\.\-]+)["\']', html, flags=re.I)
html_keys = sorted(set(html_keys))

# extract the I18N object region
start = js.find('const I18N')
locales = {}
if start >= 0:
    obj_start = js.find('{', start)
    # basic brace matching to extract the top-level object
    depth = 0
    i = obj_start
    while i < len(js):
        if js[i] == '{':
            depth += 1
        elif js[i] == '}':
            depth -= 1
            if depth == 0:
                obj_end = i
                break
        i += 1
    obj_text = js[obj_start:obj_end+1] if start >= 0 and 'obj_end' in locals() else ''

    # find per-locale object by locating "pt: { ... }," blocks inside obj_text
    for code in ['pt','en','es']:
        idx = obj_text.find(code + ':')
        if idx == -1:
            locales[code] = set()
            continue
        # find the brace following code:
        brace = obj_text.find('{', idx)
        if brace == -1:
            locales[code] = set()
            continue
        depth = 0
        j = brace
        while j < len(obj_text):
            if obj_text[j] == '{': depth += 1
            elif obj_text[j] == '}':
                depth -= 1
                if depth == 0:
                    endj = j
                    break
            j += 1
        block = obj_text[brace:endj+1] if 'endj' in locals() else ''
        # extract keys within this block
        # capture quoted keys like 'hero.title' and unquoted identifiers like brand
        raw = re.findall(r"(?:['\"]([a-z0-9\.\-]+)['\"]|([a-zA-Z0-9_]+))\s*:\s*['\"]", block, flags=re.I)
        keys = set(a or b for a, b in raw)
        locales[code] = set(keys)
else:
    locales = {'pt': set(), 'en': set(), 'es': set()}

# report
print('Found', len(html_keys), 'data-i18n keys in HTML')
for k in html_keys:
    present = {lc: (k in locales.get(lc, set())) for lc in ['pt','en','es']}
    if not all(present.values()):
        print(f"MISSING: {k} -> pt:{present['pt']} en:{present['en']} es:{present['es']}")

print('\nSummary per locale:')
for lc in ['pt','en','es']:
    missing = [k for k in html_keys if k not in locales.get(lc, set())]
    print(f"{lc}: {len(missing)} missing")
    if missing:
        print('  ', ', '.join(missing))
