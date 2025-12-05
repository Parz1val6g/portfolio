# Joel's Portfolio — Modern Single-Page Application

A clean, modern, responsive personal portfolio featuring dark/light themes, bilingual support (PT/EN), and dynamic GitHub project integration. Built for a Computer Engineering student specializing in C#, Node.js, Industrial Automation, and Networking.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with touch-optimized navigation
- **Dual Theme**: Dark/light mode with smooth transitions and localStorage persistence
- **Bilingual**: Portuguese and English language support with instant switching
- **Dynamic Projects**: Automatically fetches repositories from GitHub organization
- **Smooth Animations**: Scroll-based reveals, typing animation, skill progress bars
- **Accessible**: WCAG-compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Semantic HTML with proper meta tags and structured data

## 📁 Project Structure

```
blog_/
├── index.html                              # Main single-page application
├── README.md                               # This file
│
├── assets/
│   ├── css/
│   │   ├── styles.css                      # 🎨 ALL styles consolidated (~85KB)
│   │   │                                   # - Design tokens & responsive grid
│   │   │                                   # - Dark/light theme variables
│   │   │                                   # - Component styles
│   │   │                                   # - Mobile optimizations
│   │   │                                   # - Bug fixes & polish
│   │   ├── hero-typing-fix.css             # Hero typing animation fixes
│   │   ├── navigation-fixes.css            # Navigation & scroll fixes
│   │   └── project-filters.css             # Project filter buttons
│   │
│   ├── js/
│   │   ├── inline&comprehensive-fixes.js   # 📜 Main application (~54KB)
│   │   │                                   # - Language system (PT/EN/ES)
│   │   │                                   # - Theme toggle
│   │   │                                   # - Mobile navigation
│   │   │                                   # - Smooth scroll
│   │   │                                   # - GitHub projects API
│   │   │                                   # - Skills animation
│   │   │                                   # - Contact form
│   │   │                                   # - All bug fixes
│   │   └── controls.js                     # Language/theme control handlers
│   │
│   ├── images/
│   │   └── avatar.webp                     # Profile picture
│   │
│   └── files/
│       └── (CV files here)                 # Place your PDF CV here
│
└── tools/
    └── (development utilities)
```

## 🎯 Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Open in Browser

Simply open `index.html` in any modern browser. No build process required!

### 3. Customize Content

Edit `index.html` to update:

- Personal information (name, bio, contact)
- Education and experience
- Skills percentages
- Hero section text

### 4. Configure GitHub Projects

Update the GitHub organization in `assets/js/inline&comprehensive-fixes.js`:

```javascript
// Line ~500
const GITHUB_ORG = "your-github-org"; // Change this!
```

Your projects will automatically load and display with filter buttons based on repository topics.

### 5. Add Your CV

Place your CV PDF in `assets/files/cv.pdf` for the download button to work.

## 🎨 Customization

### Colors & Theme

Edit CSS variables in `assets/css/styles.css`:

```css
:root {
  --bg-main: #0d1117; /* Background */
  --surface: #161b22; /* Cards */
  --accent: #06d6a0; /* Primary accent */
  --text: #e6edf3; /* Main text */
  --muted: #8b949e; /* Muted text */
}

:root.light {
  --bg-main: #ffffff;
  --surface: #f6f8fa;
  --accent: #06d6a0;
  /* ... */
}
```

### Language Support

Add translations in `assets/js/inline&comprehensive-fixes.js`:

```javascript
const I18N = {
  pt: { "hero.title": "Título em Português" /* ... */ },
  en: { "hero.title": "Title in English" /* ... */ },
  es: { "hero.title": "Título en Español" /* ... */ }
};
```

Then add `data-i18n` attributes to HTML elements:

```html
<h1 data-i18n="hero.title">Default Title</h1>
```

### Fonts

Currently using **Inter** and **JetBrains Mono** from Google Fonts. To change:

Edit `index.html` head section:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

Update CSS:

```css
body {
  font-family: "YourFont", sans-serif;
}
```

## 📧 Contact Form Setup

### Local Testing

The form simulates submission when testing locally.

### Production (Formspree)

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form and get your endpoint
3. Add to `index.html`:

```html
<form id="contactForm" data-endpoint="https://formspree.io/f/your-id">
  <!-- form fields -->
</form>
```

The JavaScript will automatically POST to this endpoint and show success/error messages.

## 🌐 Deployment

### GitHub Pages

1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch and root folder
4. Your site will be live at `https://yourusername.github.io/portfolio`

### Netlify

1. Drag and drop the `blog_` folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Site live instantly with auto HTTPS

### Vercel

```bash
npm i -g vercel
vercel
```

## 🔧 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS 13+, Android 5+)

## 📱 Mobile Optimization

- Touch-optimized hamburger menu
- Swipeable project carousel
- Reduced animations on mobile
- Compact spacing for better UX
- iOS smooth scrolling support

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible indicators
- Reduced motion support
- Screen reader friendly

## 🐛 Known Issues & Fixes

All critical bugs have been fixed and consolidated:

- ✅ Navigation scroll works on desktop and mobile
- ✅ Mobile menu auto-closes after navigation
- ✅ Theme toggle works on first click
- ✅ Hamburger hidden on desktop, visible on mobile
- ✅ Hero typing animation displays full text
- ✅ Language toggle shows proper contrast in light mode

## 📄 License

This template is provided as-is. Use and modify freely for personal or commercial projects.

## 🙏 Credits

- **Icons**: Font Awesome (if used)
- **Fonts**: Inter & JetBrains Mono by Google Fonts
- **Design Inspiration**: GitHub, Vercel, modern portfolio trends

---

**Built with ❤️ by Joel Tavares Martins**  
_Industrial Automation & Full-Stack Development_
