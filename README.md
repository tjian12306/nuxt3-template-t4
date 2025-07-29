# Nuxt 3 Modern Template

A comprehensive, modern, and modular Nuxt 3 website template with multi-language support, theme system, and landing page components.

## ✨ Features

- **🚀 Nuxt 3** - Latest version with all modern features
- **🎨 Tailwind CSS** - Utility-first CSS framework with dark mode
- **🌍 Multi-language** - Built-in i18n support with route prefixes
- **🎭 Theme System** - Light/dark mode with 4 color schemes
- **📱 Responsive** - Mobile-first responsive design
- **⚡ Performance** - Optimized images and SEO
- **🔧 TypeScript** - Full TypeScript support
- **📦 Auto-import** - Components and composables auto-imported

## 🏗️ Tech Stack

- **Core**: Nuxt 3
- **UI**: @nuxt/ui (Tailwind CSS based)
- **Content**: @nuxt/content
- **Images**: @nuxt/image
- **i18n**: @nuxtjs/i18n
- **Icons**: nuxt-icon
- **State**: Pinia
- **Styling**: Tailwind CSS
- **TypeScript**: Full TypeScript support

## 📁 Project Structure

\`\`\`
├── components/
│   ├── landing/       # Landing page components
│   ├── common/        # Reusable components
│   └── ...
├── composables/       # Vue composables
├── content/           # Markdown content
├── layouts/           # Page layouts
├── locales/           # Translation files
├── pages/             # Application pages
├── stores/            # Pinia stores
└── ...
\`\`\`

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd nuxt3-modern-template
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Site Configuration

Edit `app.config.ts` to customize:

\`\`\`typescript
export default defineAppConfig({
  site: {
    name: 'Your Site Name',
    description: 'Your site description',
    url: 'https://your-domain.com'
  },
  theme: {
    colors: ['primary', 'emerald', 'blue', 'purple'],
    default: 'primary'
  }
})
\`\`\`

### Adding New Languages

1. Add locale to `nuxt.config.ts`:
   \`\`\`typescript
   i18n: {
     locales: [
       { code: 'en', name: 'English', file: 'en.json' },
       { code: 'fr', name: 'Français', file: 'fr.json' }
     ]
   }
   \`\`\`

2. Create translation file in `locales/fr.json`

### Custom Theme Colors

1. Add colors to `tailwind.config.ts`
2. Update theme configuration in `app.config.ts`
3. Add color values to `useTheme` composable

## 📄 Available Layouts

### Landing Layout
Perfect for marketing pages with hero sections, features, and CTAs.

\`\`\`vue
<script setup>
definePageMeta({
  layout: 'landing'
})
</script>
\`\`\`

### Sidebar Layout
Ideal for dashboard-style applications with navigation sidebar.

\`\`\`vue
<script setup>
definePageMeta({
  layout: 'sidebar'
})
</script>
\`\`\`

### Docs Layout
Optimized for documentation with content navigation.

\`\`\`vue
<script setup>
definePageMeta({
  layout: 'docs'
})
</script>
\`\`\`

## 🧩 Components

### Landing Components

- `LandingHero` - Hero section with CTA
- `LandingFeatures` - Feature showcase
- `LandingTestimonials` - Customer testimonials
- `LandingFAQs` - Frequently asked questions
- `LandingPricing` - Pricing tables
- `LandingCTA` - Call-to-action sections

### Common Components

- `ThemeSwitcher` - Theme toggle
- `LanguageSwitcher` - Language selector
- `AppHeader` - Main navigation
- `AppFooter` - Site footer

## 🚀 Deployment

### Vercel

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy to Vercel**
   \`\`\`bash
   npx vercel
   \`\`\`

### Netlify

1. **Generate static files**
   \`\`\`bash
   npm run generate
   \`\`\`

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your Git repository

### Docker

1. **Build Docker image**
   \`\`\`bash
   docker build -t nuxt-app .
   \`\`\`

2. **Run container**
   \`\`\`bash
   docker run -p 3000:3000 nuxt-app
   \`\`\`

3. **Using Docker Compose**
   \`\`\`bash
   docker-compose up -d
   \`\`\`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static files
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript checks

## 🔧 Configuration Files

- `nuxt.config.ts` - Nuxt configuration
- `app.config.ts` - App-specific configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 📚 Documentation

Visit `/docs` in your application for detailed documentation and examples.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Nuxt.js](https://nuxt.com/) - The Intuitive Vue Framework
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Nuxt UI](https://ui.nuxt.com/) - Fully styled and customizable components
