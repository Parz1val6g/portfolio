# Joel's Life — Personal Blog & Portfolio (Static)

This is a clean, modern, responsive personal blog and portfolio template built for a Computer Engineering student. It includes sections for CV/resume, skills, projects, blog posts, and a contact form (client-side validation).

What you get

- `index.html` — main single-page layout (Portuguese).
- `assets/css/styles.css` — main styles with light/dark theme variables.
- `assets/js/main.js` — interactions: menu, dark mode, skills animation, search, contact form.
- `assets/images/` — placeholder images you can replace.

Quick start

1. Open `index.html` in a browser.
2. Replace placeholder images in `assets/images/` with your own photos.
3. Edit text (name, bio, education, experience, projects) directly in `index.html`.

Real contact submissions (optional)

- The contact form currently simulates sending when opened locally. To enable real submissions with a service like Formspree:
  1.  Sign up at https://formspree.io/ (or another form provider) and get your form endpoint.
  2.  Open `index.html` and add the endpoint to the contact form's `data-endpoint` attribute, for example:

```html
<form id="contactForm" data-endpoint="https://formspree.io/f/your-id" ...></form>
```

    3. The page will then POST the form fields to that endpoint and show success/error messages.

Features to implement server-side (optional)

- Contact form backend: POST `/contact` to send messages via email or store them. The client currently simulates sending.
- RSS export: generate an RSS XML file from posts if you add a backend or build step.

Customization notes

- Change colors in `assets/css/styles.css` root variables.
- Fonts: currently uses `Inter` via Google Fonts; swap in other fonts by editing the `<head>` in `index.html`.
- Projects & posts: replace placeholders in `#projects` and `#blog` sections; consider moving post content to separate markdown files if you want a generator.

ZIP-ready
You can compress the folder to a ZIP and upload to any static host (GitHub Pages, Netlify, Vercel, or a simple Apache/Nginx server).

License
This template is provided as-is. Use and modify freely.
