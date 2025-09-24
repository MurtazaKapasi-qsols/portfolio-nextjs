# Portfolio App

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Contentful CMS. This project showcases professional work with smooth animations, dynamic content management, and a beautiful user interface.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Content Management**: Integrated with Contentful CMS for dynamic content
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Performance Optimized**: Server-side rendering and image optimization
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO Ready**: Meta tags and structured data for search engines
- **Code Review Ready**: Optimized for team collaboration and code reviews

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Backend & CMS
- **Contentful** - Headless CMS for content management
- **Node.js** - Runtime environment

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Turbopack** - Fast bundling (Next.js 15)

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── cms/              # CMS-specific components
│   │   │   ├── PortfolioGrid.tsx
│   │   │   └── TestimonialsSlide.tsx
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx
│   │   │   └── separator.tsx
│   │   ├── hero-section.tsx
│   │   ├── portfolio-section.tsx
│   │   ├── testimonials-section.tsx
│   │   └── ...               # Other section components
│   ├── hooks/                # Custom React hooks
│   │   ├── usePortfolio.ts
│   │   ├── useTestimonials.ts
│   │   └── useScrollAnimation.ts
│   └── lib/                  # Utility functions
│       ├── contentful.ts     # Contentful client
│       ├── contentful-types.ts
│       ├── smooth-scroll.ts
│       └── utils.ts
├── public/                   # Static assets
└── ...                       # Configuration files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Contentful account (for CMS)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-app.git
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id
   NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token
   NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT=master
   ```

4. **Contentful Setup**
   
   In your Contentful space, create the following content types:
   
   **Portfolio Projects** (`portfolioProjects`):
   - `title` (Short text)
   - `projectThumbnail` (Media)
   - `sortingOrder` (Number)
   - `slug` (Short text, optional)
   - `description` (Long text, optional)
   - `category` (Short text, optional)
   - `featuredImage` (Media, optional)
   - `gallery` (Media, multiple, optional)
   - `technologies` (Short text, multiple, optional)
   - `liveUrl` (Short text, optional)
   - `githubUrl` (Short text, optional)
   - `projectDate` (Date, optional)
   - `status` (Short text, optional)
   - `featured` (Boolean, optional)
   - `displayOrder` (Number, optional)

   **Testimonials** (`testimonials`):
   - `name` (Short text)
   - `designation` (Short text)
   - `company` (Short text)
   - `content` (Long text)
   - `image` (Media)

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Content Management
- Add portfolio projects through Contentful CMS
- Manage testimonials and client feedback
- Update company information and services

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind configuration in `tailwind.config.js`
- Customize component styles in individual component files

### Components
- Add new sections in `src/components/`
- Create reusable UI components in `src/components/ui/`
- Implement custom hooks in `src/hooks/`

## 🔧 Key Features Implementation

### Contentful Integration
```typescript
// Example: Fetching portfolio projects
const { projects, loading, error } = usePortfolio({
  limit: 6,
  featured: true
});
```

### Smooth Animations
```typescript
// Example: Framer Motion animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content here
</motion.div>
```

### Responsive Design
```css
/* Tailwind responsive classes */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid */}
</div>
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy with CI/CD
- **Docker**: Use provided Dockerfile

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Contentful](https://www.contentful.com/) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Component primitives

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Portfolio**: [Your Portfolio Website](https://yourportfolio.com)

---

⭐ Star this repository if you found it helpful!