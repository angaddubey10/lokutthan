# Lok Utthan Foundation Website

A modern, responsive website for Lok Utthan Foundation - an NGO focused on health education, legal aid, and social justice.

## Features

- 🏥 **Health Education Programs** - Information about health camps and awareness initiatives
- ⚖️ **Legal Aid Services** - Details about free legal support for marginalized communities
- 📚 **Education & Skill Development** - Vocational training and literacy programs
- 👩‍👧 **Women Empowerment** - Self-help groups and entrepreneurship support
- 📱 **Fully Responsive** - Mobile-friendly design for all devices
- 🎨 **Modern UI** - Clean, accessible interface with smooth animations

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with animations
- **GitHub Pages** - Hosting

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lokutthan.git
cd lokutthan
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the main branch.

### Setup Steps:

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Under **Build and deployment**, select **Source: GitHub Actions**
4. Push your code to the main branch
5. The GitHub Action will automatically build and deploy your site

Your site will be available at: `https://yourusername.github.io/lokutthan/`

## Project Structure

```
lokutthan/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx/css       # Navigation bar
│   │   ├── Hero.tsx/css         # Hero section
│   │   ├── About.tsx/css        # About section
│   │   ├── Programs.tsx/css     # Programs showcase
│   │   ├── Impact.tsx/css       # Impact metrics
│   │   ├── Contact.tsx/css      # Contact form
│   │   └── Footer.tsx/css       # Footer
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
├── .github/workflows/          # GitHub Actions
└── package.json                # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and prepare for deployment

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@lokutthan.org
- Website: [Coming Soon]

---

Built with ❤️ for Lok Utthan Foundation
