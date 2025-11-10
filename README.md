# Ahmad Mustafa - Portfolio Website

A professional, modern, and interactive 3D portfolio website built with Gatsby and React. Showcasing 3+ years of experience as a Full Stack Developer specializing in WordPress, Laravel, and modern web technologies.

## Features

- **3D Interactive Elements**: Animated 3D sphere with particles using React Three Fiber
- **Smooth Animations**: Framer Motion animations throughout the site
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean and professional design with custom color scheme
- **SEO Optimized**: Built-in SEO optimization with Gatsby
- **Fast Performance**: Optimized for speed and performance

## Color Scheme

- **Primary Gold**: RGB(172, 149, 118) - #ac9576
- **Primary Dark**: RGB(34, 41, 51) - #222933

## Sections

1. **Hero** - Eye-catching introduction with 3D animation
2. **About** - Professional background and expertise highlights
3. **Skills** - Visual representation of technical skills and proficiency levels
4. **Experience** - Timeline of work experience (Backend Engineer at Disty, Full-stack at Softylus)
5. **Contact** - Contact information and professional links

## Technologies Used

- **Gatsby** - React-based static site generator
- **React** - UI library
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm start
# or
npm run develop
```

The site will be available at `http://localhost:8000`

### Build

Build for production:
```bash
npm run build
```

### Serve

Serve the production build:
```bash
npm run serve
```

## Customization

### Personal Information

Update your personal information in the following files:

- `src/components/Hero.js` - Name, title, and introduction
- `src/components/About.js` - About section content
- `src/components/Skills.js` - Your skills and proficiency levels
- `src/components/Experience.js` - Work experience details
- `src/components/Contact.js` - Contact information and social links
- `src/components/Navbar.js` - Logo and navigation menu items

### Colors

Update colors in `src/styles/global.css`:

```css
:root {
  --primary-gold: rgb(172, 149, 118);
  --primary-dark: rgb(34, 41, 51);
}
```

### Meta Tags & SEO

Update SEO information in:
- `gatsby-config.js` - Site metadata
- `src/pages/index.js` - Head component with meta tags

### Favicon

Replace `src/images/icon.png` with your own icon (512x512px recommended)

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Experience.js
│   │   ├── Hero.js
│   │   ├── Layout.js
│   │   ├── Navbar.js
│   │   ├── Scene3D.js
│   │   └── Skills.js
│   ├── pages/
│   │   └── index.js
│   ├── styles/
│   │   ├── about.css
│   │   ├── contact.css
│   │   ├── experience.css
│   │   ├── global.css
│   │   ├── hero.css
│   │   ├── layout.css
│   │   ├── navbar.css
│   │   └── skills.css
│   └── images/
├── gatsby-browser.js
├── gatsby-config.js
├── package.json
└── README.md
```

## Deployment

### Gatsby Cloud

1. Push your code to GitHub
2. Connect your repository to Gatsby Cloud
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `gatsby build`
4. Publish directory: `public`

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio

## Contact

**Ahmad Mustafa**
- Email: mustafaahmad653@gmail.com
- Phone: +962 775768343
- Location: Amman, Jordan
- LinkedIn: [Ahmad Mustafa](https://jo.linkedin.com/in/ahmad-mustafa-623a36204)

---

Built with passion and cutting-edge technology for freelance success
