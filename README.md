# Yousaf P Portfolio

A modern personal portfolio website showcasing the work, skills, experience, and contact details of Yousaf P. This project is built with clean responsive HTML, Tailwind CSS via CDN, and vanilla JavaScript.

## Overview

The portfolio site is designed for frontend presentation and includes: 

- A hero landing section with a dynamic greeting and personal introduction
- Responsive navigation for desktop and mobile devices
- Experience timeline and animated counters
- Achievement cards and project gallery
- Scrolling skills carousel
- Contact modal with form submission support
- Resume download button with embedded PDF asset.

## Features

- Responsive layout for desktop and mobile screens
- Interactive project modal with dynamic project details
- Contact form integration via Web3Forms
- Animated scroll reveal effects and progress counters
- Mobile hamburger navigation with drawer menu
- Downloadable resume from `assets/YOUSAF_P (1).pdf`

## Built With

- HTML5
- CSS3
- JavaScript
- Tailwind CSS (CDN)
- Google Fonts
- Bootstrap Icons

## Project Structure

- `index.html` - Main portfolio page markup
- `style.css` - Custom styling and animations
- `script.js` - Interactive UI behavior and content database
- `assets/` - Skill icons and resume PDF asset

### Included Assets

- `assets/bootstrap.png`
- `assets/css-3.png`
- `assets/c_programming.png`
- `assets/html-5.png`
- `assets/image.png`
- `assets/java.png`
- `assets/js.png`
- `assets/python.png`
- `assets/react.png`
- `assets/YOUSAF_P (1).pdf`

## Sections

1. Home / Hero
2. Experience
3. Achievements
4. Projects
5. Skills
6. Contact

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/yousaf1054/My_Portfolio.git
   cd portfolio
   ```

2. Open `index.html` in your browser.

3. Or serve locally with a simple HTTP server:

   ```bash
   npx http-server .
   ```

## Customization

- Update navigation and section content in `index.html`
- Modify styling in `style.css`
- Edit project cards and modal details in `script.js`
- Change resume path or filename in `script.js` via `triggerResumeDownload()`

## Notes

- Project cards are driven by the `contentDb.projects` object in `script.js`.
- Contact form submissions are sent using the Web3Forms API key configured inside `script.js`.
- The responsive skills carousel uses custom CSS animations for continuous scrolling.

## Contact

- GitHub: [https://github.com/yousaf1054](https://github.com/yousaf1054)
- LinkedIn: [https://www.linkedin.com/in/yousafp](https://www.linkedin.com/in/yousafp)

---

> Designed and developed as a frontend portfolio showcase for Yousaf P.
