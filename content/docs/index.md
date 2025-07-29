# Documentation

Welcome to the Nuxt 3 Modern Template documentation.

## Getting Started

This template provides a complete foundation for building modern web applications with Nuxt 3.

### Features

- **Nuxt 3**: Latest version with all modern features
- **Tailwind CSS**: Utility-first CSS framework
- **Multi-language**: Built-in i18n support
- **Dark Mode**: Automatic theme switching
- **SEO Optimized**: Meta tags and structured data
- **TypeScript**: Full TypeScript support

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

### Configuration

The main configuration is located in `app.config.ts`. You can customize:

- Theme colors
- Site information
- Navigation items
- Landing page content

### Layouts

The template includes three layouts:

1. **Landing**: For marketing pages
2. **Sidebar**: For dashboard-style pages
3. **Docs**: For documentation pages

### Components

All components are automatically imported and available globally:

- Landing page components in `/components/landing`
- Common components in `/components/common`
- UI components from Nuxt UI

## Deployment

### Vercel

\`\`\`bash
npm run build
\`\`\`

### Netlify

\`\`\`bash
npm run generate
\`\`\`

### Docker

\`\`\`bash
docker build -t nuxt-app .
docker run -p 3000:3000 nuxt-app
