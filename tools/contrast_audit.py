import re
import sys
from math import pow

CSS_PATHS = [r"assets/css/styles.css", r"assets/css/inline.css"]

VAR_RE = re.compile(r"--([a-zA-Z0-9_\-]+)\s*:\s*([^;]+);")
ROOT_RE = re.compile(r":root\s*\{(.*?)\}", re.S)
ROOT_LIGHT_RE = re.compile(r":root\.light\s*\{(.*?)\}", re.S)


def parse_vars_from_css(text):
    general = {}
    root = {}
    root_light = {}
    # general variables (fallback)
    for vm in VAR_RE.finditer(text):
        name = vm.group(1).strip()
        val = vm.group(2).strip()
        general[name] = val
    # :root
    m = ROOT_RE.search(text)
    if m:
        body = m.group(1)
        for vm in VAR_RE.finditer(body):
            name = vm.group(1).strip(); val = vm.group(2).strip(); root[name] = val
    # :root.light
    m2 = ROOT_LIGHT_RE.search(text)
    if m2:
        body = m2.group(1)
        for vm in VAR_RE.finditer(body):
            name = vm.group(1).strip(); val = vm.group(2).strip(); root_light[name] = val
    return general, root, root_light


def hex_to_rgb(s):
    s = s.strip()
    if s.startswith('#'):
        s = s[1:]
        if len(s) == 3:
            r = int(s[0]*2,16)
            g = int(s[1]*2,16)
            b = int(s[2]*2,16)
        elif len(s) == 6:
            r = int(s[0:2],16)
            g = int(s[2:4],16)
            b = int(s[4:6],16)
        else:
            return None
        return (r,g,b,1.0)
    return None


def rgba_to_rgb(s):
    s = s.strip()
    m = re.match(r"rgba?\(([^)]+)\)", s)
    if not m:
        return None
    parts = [p.strip() for p in m.group(1).split(',')]
    if len(parts) < 3:
        return None
    r = int(float(parts[0]))
    g = int(float(parts[1]))
    b = int(float(parts[2]))
    a = 1.0
    if len(parts) == 4:
        try:
            a = float(parts[3])
        except:
            a = 1.0
    return (r,g,b,a)


def parse_color(val):
    # handle hex and rgb/rgba and simple named values
    val = val.split()  # drop things like 'linear-gradient(...)'
    val = val[0].strip()
    if val.startswith('#'):
        return hex_to_rgb(val)
    if val.startswith('rgb'):
        return rgba_to_rgb(val)
    # try to strip trailing semicolons or commas
    val = val.strip().rstrip(';').rstrip(',')
    # not a color
    return None


def srgb_channel(c):
    c = c/255.0
    if c <= 0.03928:
        return c/12.92
    return pow((c+0.055)/1.055, 2.4)


def relative_luminance(rgb):
    if rgb is None:
        return None
    r,g,b,_ = rgb
    R = srgb_channel(r)
    G = srgb_channel(g)
    B = srgb_channel(b)
    return 0.2126*R + 0.7152*G + 0.0722*B


def contrast_ratio(rgb1, rgb2):
    L1 = relative_luminance(rgb1)
    L2 = relative_luminance(rgb2)
    if L1 is None or L2 is None:
        return None
    lighter = max(L1,L2)
    darker = min(L1,L2)
    return (lighter + 0.05) / (darker + 0.05)


def load_vars():
    general = {}
    root = {}
    root_light = {}
    for p in CSS_PATHS:
        try:
            with open(p, 'r', encoding='utf-8') as f:
                text = f.read()
        except FileNotFoundError:
            continue
        g, r, rl = parse_vars_from_css(text)
        # later files override earlier
        general.update(g)
        root.update(r)
        root_light.update(rl)
    return general, root, root_light


def pick(merged, keys):
    for k in keys:
        if k in merged:
            return merged[k]
    return None


def main():
    general, root, root_light = load_vars()
    # helper to choose in theme scope
    def choose(theme_vars, keys):
        for k in keys:
            if k in theme_vars:
                return theme_vars[k]
        for k in keys:
            if k in general:
                return general[k]
        return None

    # prepare dark and light selections
    dark = lambda keys: choose(root, keys)
    light = lambda keys: choose(root_light, keys)

    # dark-mode page background vs text
    bg_dark = dark(['bg','bg-0','bg-1','bg-2']) or general.get('bg')
    text_dark = dark(['text','--text']) or general.get('text')
    surface_dark = dark(['surface','panel','card']) or general.get('surface')
    muted_dark = dark(['text-muted','muted']) or general.get('muted')
    accent_dark = dark(['accent','accent1','primary']) or general.get('accent')

    bg_light = light(['bg','bg-0','bg-1','bg-2']) or general.get('bg')
    text_light = light(['text','--text']) or general.get('text')
    surface_light = light(['surface','panel','card']) or general.get('surface')
    muted_light = light(['text-muted','muted']) or general.get('muted')
    accent_light = light(['accent','accent1','primary']) or general.get('accent')

    primary_contrast_dark = dark(['primary-contrast','primaryContrast','primary_contrast']) or general.get('primary-contrast')
    primary_contrast_light = light(['primary-contrast','primaryContrast','primary_contrast']) or general.get('primary-contrast')

    checks = [
        ('Dark — page bg / text (normal)', bg_dark, text_dark, 4.5),
        ('Dark — surface / text (normal)', surface_dark, text_dark, 4.5),
        ('Dark — surface / muted (UI)', surface_dark, muted_dark, 3.0),
        ('Dark — accent / primary-contrast (button fg)', accent_dark, primary_contrast_dark or text_dark, 3.0),
        ('Light — page bg / text (normal)', bg_light, text_light, 4.5),
        ('Light — surface / text (normal)', surface_light, text_light, 4.5),
        ('Light — surface / muted (UI)', surface_light, muted_light, 3.0),
        ('Light — accent / primary-contrast (button fg)', accent_light, primary_contrast_light or text_light, 3.0),
    ]

    print('\nContrast audit report (candidate CSS variables)')
    print('---------------------------------------------')
    for desc, a, b, target in checks:
        ca = parse_color(a) if a else None
        cb = parse_color(b) if b else None
        ratio = contrast_ratio(ca, cb) if ca and cb else None
        print(f"\n- {desc}")
        print(f"  var A: {a}")
        print(f"  var B: {b}")
        if ratio is None:
            print('  -> Could not compute ratio (missing or complex values)')
        else:
            print(f"  contrast ratio: {ratio:.2f}:1 (target >= {target}:1)")
            if ratio >= target:
                print('  ✅ Pass')
            else:
                print('  ❌ Fail — consider adjusting tokens')

    print('\nFull variables found (sample):')
    keys = sorted(set(list(general.keys()) + list(root.keys()) + list(root_light.keys())))
    for k in keys:
        v = root.get(k) or root_light.get(k) or general.get(k)
        if k in ('text','bg','bg-0','bg-1','surface','muted','text-muted','accent','accent1','primary'):
            print(f"  --{k}: {v}")

if __name__ == '__main__':
    main()
