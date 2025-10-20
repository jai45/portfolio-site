# Jaideep's Portfolio

A modern, minimalistic, and interactive portfolio website built with React and Vite. Features a stunning dark theme design with smooth animations and a professional layout.

## 🌟 Features

- **Modern Design**: Sleek dark theme with cyan accents
- **Fully Responsive**: Works seamlessly on all devices
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Elements**: Engaging hover effects and transitions
- **Professional Sections**:
  - Hero section with social links
  - About section with highlights
  - Experience timeline
  - Project showcase with cards
  - Skills with progress bars
  - Contact form with direct links

## 🚀 Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon components
- **CSS3** - Styling with custom properties

## 📦 Installation

1. Navigate to the project directory:

```bash
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## 🎨 Customization

### Update Personal Information

1. **Navigation & Hero Section** (`src/components/Hero.jsx`):

   - Update name, title, and description
   - Modify social media links

2. **About Section** (`src/components/About.jsx`):

   - Edit personal description and highlights

3. **Experience** (`src/components/Experience.jsx`):

   - Add or modify work experience entries
   - Update company names, titles, and descriptions

4. **Projects** (`src/components/Projects.jsx`):

   - Add your projects with descriptions
   - Update GitHub and live demo links
   - Modify technologies used

5. **Skills** (`src/components/Skills.jsx`):

   - Update skill categories and proficiency levels
   - Add or remove technologies

6. **Contact** (`src/components/Contact.jsx`):
   - Update email, phone, and social links

### Color Scheme

Edit the CSS variables in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --bg-card: #1a1a1a;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --accent: #00d4ff;
  --accent-hover: #00b8e6;
  --border: #2a2a2a;
}
```

## 📱 Sections

1. **Home/Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal description and key highlights
3. **Experience** - Professional timeline with work history
4. **Projects** - Showcase of notable projects with tech stacks
5. **Skills** - Visual representation of technical skills
6. **Contact** - Contact form and direct contact information

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### GitHub Pages

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Add to package.json:

```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:

```bash
npm run deploy
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

- Email: jaideepch45@gmail.com
- Phone: +1 (410) 709-6464
- LinkedIn: [linkedin.com/in/jaideep-v41](https://linkedin.com/in/jaideep-v41)

---

Built with ❤️ by Jaideep
