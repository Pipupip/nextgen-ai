# NextGen AI — Corporate AI Agency Website

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify" alt="Netlify">
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="License">
</p>

A corporate multi-page website for an AI automation agency. Showcases services, portfolio cases, blog articles, and includes a service cost calculator.

> ⚠️ **Demo project.** A static site designed for portfolio presentation.

## Pages

- **Home** — hero section, services overview, workflow, statistics, testimonials, FAQ
- **Services** — detailed service descriptions with pricing and cost calculator
- **Portfolio** — case studies with category filtering
- **Blog** — articles about automation and AI

## Features

- Dark corporate theme with blue-purple gradients
- Interactive service cost calculator
- Testimonial carousel
- FAQ accordion
- Telegram integration for lead capture
- SEO-optimized markup
- Fully responsive design (mobile → desktop)

## Tech Stack

- **HTML5** / **CSS3** / **JavaScript** (vanilla)
- **Netlify** (hosting)

## Installation

```bash
git clone https://github.com/pipupip/nextgen-ai
cd nextgen-ai
```

No build tools required — just open the files in a browser.

## Running Locally

Simply open `index.html` in any modern browser.

For a local server (recommended for full functionality):

```bash
# Python 3
python -m http.server 8000
# Then open http://localhost:8000
```

## Project Structure

```
nextgen-ai/
├── index.html          # Home page
├── services.html       # Services page
├── portfolio.html      # Portfolio page
├── blog.html           # Blog page
├── css/                # Stylesheets
├── js/                 # JavaScript files
├── images/             # Image assets
└── favicon.ico         # Site icon
```

## Deployment

Deploy on Netlify:

1. Push the repository to GitHub
2. Connect the repo to Netlify
3. Netlify will auto-detect the static site settings
4. Deploy — no build command needed (publish directory: `/`)

---

<p align="center">Built with ❤️ by <a href="https://github.com/pipupip">pipupip</a></p>
