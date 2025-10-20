# Quick Setup Guide

## 🚀 Getting Started

Your portfolio is ready to use! Follow these simple steps:

### 1. Start Development Server

The development server is already running! You can access your portfolio at:
**http://localhost:5173**

If you need to restart it:

```bash
cd /Users/jai/Documents/Portfolio/portfolio
npm run dev
```

### 2. View Your Portfolio

Open your browser and navigate to: **http://localhost:5173**

You should see:

- ✅ Hero section with your name "Jaideep"
- ✅ Navigation menu at the top
- ✅ About section
- ✅ Experience timeline
- ✅ Projects showcase
- ✅ Skills with progress bars
- ✅ Contact form

### 3. Customize Your Content

#### Update Your Information:

1. **Personal Info** - Edit `src/components/Hero.jsx`
2. **About Me** - Edit `src/components/About.jsx`
3. **Work Experience** - Edit `src/components/Experience.jsx`
4. **Projects** - Edit `src/components/Projects.jsx`
5. **Skills** - Edit `src/components/Skills.jsx`
6. **Contact** - Edit `src/components/Contact.jsx`

### 4. Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 5. Deploy (Optional)

#### Option A: Vercel (Easiest)

1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click!

#### Option B: Netlify

1. Run `npm run build`
2. Drag and drop the `dist` folder to [netlify.com](https://netlify.com)

#### Option C: GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"homepage": "https://your-username.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then deploy:

```bash
npm run deploy
```

## 🎨 Features Included

- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark Theme** - Modern and professional
- ✅ **Smooth Animations** - Powered by Framer Motion
- ✅ **Interactive Elements** - Hover effects and transitions
- ✅ **SEO Friendly** - Optimized structure
- ✅ **Fast Performance** - Built with Vite

## 📱 Navigation

The portfolio includes these sections:

- **Home** - Hero section with introduction
- **About** - Personal description
- **Experience** - Work history timeline
- **Projects** - Project showcase
- **Skills** - Technical skills
- **Contact** - Contact form and links

## 🔧 Common Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package-name
```

## 💡 Tips

1. **Hot Reload**: Changes are automatically reflected in the browser
2. **Mobile Testing**: Use browser dev tools to test responsive design
3. **Colors**: Customize in `src/index.css` by changing CSS variables
4. **Icons**: Uses React Icons - browse at [react-icons.github.io](https://react-icons.github.io)

## ❓ Need Help?

- Check `README.md` for detailed documentation
- Review component files in `src/components/`
- All styling is in separate `.css` files next to components

## 📞 Contact Details

Your current contact info:

- Email: jaideepch45@gmail.com
- Phone: +1 (410) 709-6464
- LinkedIn: linkedin.com/in/jaideep-v41

---

**Your portfolio is live and ready! 🎉**

Open http://localhost:5173 to see it in action!
