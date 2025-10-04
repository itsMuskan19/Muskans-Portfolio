# Muskan Tomar - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing Flutter development expertise and professional projects.

![Portfolio Preview](./public/assets/portfolio-preview.png)

## 🚀 Features

- **Responsive Design**: Mobile-first approach with comprehensive breakpoints
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Cross-Platform Showcase**: Highlighting Flutter and cross-platform development skills
- **Performance Optimized**: Built with Vite for fast loading and development

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Kablammo)
- **Deployment Ready**: Optimized for production builds

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn**
- **Git**

You can check your versions by running:
```bash
node --version
npm --version
git --version
```

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/priyu9-star/portfolio-project-new.git
cd portfolio-project-new
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Start Development Server

Using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

### 4. Open in Browser

The development server will start on `http://localhost:5173`

Open your browser and navigate to the URL to see the portfolio in action!

## 📁 Project Structure

```
portfolio-project-new/
├── public/
│   ├── assets/
│   │   ├── img1.png              # Hero profile image
│   │   ├── img2.png              # About section image
│   │   ├── Vector.png            # Background vector shape
│   │   ├── logos/                # Technology logos
│   │   │   ├── Flutter.svg
│   │   │   ├── react.svg
│   │   │   ├── Node.js.svg
│   │   │   ├── WordPress.svg
│   │   │   ├── shopify.png
│   │   │   ├── C++ (CPlusPlus).svg
│   │   │   ├── NET core.svg
│   │   │   └── Unity.svg
│   │   └── project-screenshots/  # Portfolio project images
│   │       ├── apptivo-1.jpg
│   │       ├── freecrm-1.jpg
│   │       ├── pipedrive-1.jpg
│   │       └── timbuk-1.jpg
│   └── vite.svg
├── src/
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles and Tailwind imports
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Updating Personal Information

1. **Images**: Replace images in `public/assets/` with your own:
   - `img1.png` - Hero section profile image
   - `img2.png` - About section image
   - Add your project screenshots in `public/assets/`

2. **Content**: Edit `src/App.jsx` to update:
   - Personal information and bio
   - Skills and experience
   - Project details and descriptions
   - Contact information

3. **Styling**: Modify colors and design in:
   - `src/index.css` for global styles
   - `tailwind.config.js` for custom Tailwind configuration
   - Component classes in `src/App.jsx`

### Adding New Sections

The portfolio is built with modular components. To add new sections:

1. Create a new component in `src/App.jsx`
2. Import and add it to the main App component
3. Update navigation links in the Header component

## 🚀 Building for Production

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

The build files will be generated in the `dist/` folder.

## 📱 Responsive Breakpoints

The portfolio uses mobile-first responsive design with these breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: 1024px - 1280px
- **Extra Large**: > 1280px

## 🎯 Performance Features

- **Optimized Images**: Properly sized and compressed images
- **Lazy Loading**: Images load as needed
- **Smooth Animations**: CSS transitions and transforms
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Accessibility**: ARIA labels and keyboard navigation

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

## 🌐 Deployment

### Netlify Deployment

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure redirects for SPA routing

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and deploy

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://priyu9-star.github.io/portfolio-project-new",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Tailwind CSS for utility-first styling
- Lucide React for beautiful icons
- Google Fonts for typography

## 📞 Contact

**Muskan Tomar** - Flutter Developer

- 📧 Email: info@muskan.com
- 📱 Phone: +91 99999 99999
- 💼 LinkedIn: [Your LinkedIn Profile]
- 🐦 Twitter: [Your Twitter Handle]

---

⭐ If you found this project helpful, please give it a star on GitHub!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
