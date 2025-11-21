# Sächsische Schweiz Wandernadel Web App

Digital hiking badge collection for the Saxon Switzerland region. Collect virtual stamps at hiking locations, track your progress through a visual passport interface, and earn achievements—all while offline.

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/wandernadel-webapp.git
cd wandernadel-webapp

# Install dependencies
npm install

# Copy environment template
cp .env.example .env
# Edit .env and add your Mapbox token and other values

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
wandernadel-webapp/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── services/           # Business logic and API calls
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   ├── styles/             # CSS and styling
│   └── utils/              # Utility functions
├── public/                 # Static assets
├── api/                    # Backend API code
├── docs/                   # Documentation
├── tests/                  # Test files
└── design/                 # Design mockups and prototypes
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix lint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

### Coding Standards

This project enforces strict code quality standards:

- **ESLint**: Catches errors, enforces TypeScript best practices
- **Prettier**: Ensures consistent code formatting
- **TypeScript Strict Mode**: All type safety features enabled
- **Pre-commit Hooks**: Automatic linting and formatting before commits

### Git Workflow

1. Create feature branch: `git checkout -b feature/your-feature-name`
2. Make changes and commit frequently using **Conventional Commits**:
   - `feat:` New features
   - `fix:` Bug fixes
   - `docs:` Documentation changes
   - `test:` Adding/updating tests
   - `chore:` Maintenance tasks
3. Push and create Pull Request

See `docs/git-workflow.md` for detailed workflow documentation.

### Conventional Commits Examples

```bash
git commit -m "feat: add stamp collection animation"
git commit -m "fix: resolve GPS accuracy issue in mountains"
git commit -m "docs: update README with deployment instructions"
git commit -m "test: add unit tests for geofence validation"
```

## 🎨 Design System

The app follows the **Wanderpass aesthetic**:

- **Colors**: Deep forest green (#2D5016), warm parchment (#F4E8D0), ochre accents
- **Typography**: Serif titles, sans-serif body text
- **Textures**: Leather backgrounds, parchment overlays
- **Style**: Rustic, tactile, nature-inspired

## 🧪 Testing

```bash
# Run unit tests
npx jest

# Run E2E tests (when implemented)
npx playwright test

# Run specific test file
npx jest path/to/test.test.ts
```

## 📱 PWA Features

This app is a Progressive Web App (PWA) with:

- **Offline-first**: Works without internet connection
- **Installable**: Add to home screen on mobile devices
- **Service Worker**: Caches assets for offline use
- **IndexedDB**: Local data storage for stamps and progress

## 🗺️ Tech Stack

- **Frontend**: Vite + React + TypeScript
- **Styling**: Vanilla CSS with CSS variables
- **State Management**: React hooks + Context API
- **Maps**: Leaflet or Mapbox GL
- **Storage**: IndexedDB for offline data
- **Testing**: Jest (unit) + Playwright (E2E)

## 🔒 Environment Variables

Required environment variables (see `.env.example`):

- `VITE_MAPBOX_TOKEN` - Mapbox API token for maps
- `VITE_API_URL` - Backend API URL
- `DATABASE_URL` - PostgreSQL connection string (backend)
- `JWT_SECRET` - Authentication secret (backend)

## 📚 Additional Documentation

- `docs/git-workflow.md` - Detailed Git workflow
- `docs/api-documentation.md` - API endpoints reference
- `docs/deployment.md` - Deployment guide
- `mastertask/prd-wandernadel-webapp.md` - Product requirements
- `mastertask/mastertasklist.md` - Implementation task list

## 👥 Contributing

1. Follow the coding standards (ESLint + Prettier will enforce)
2. Write tests for new features
3. Use Conventional Commits
4. Update documentation as needed

## 📄 License

MIT License - See LICENSE file for details

---

**Built with ❤️ for hikers exploring Saxon Switzerland** 🏔️
