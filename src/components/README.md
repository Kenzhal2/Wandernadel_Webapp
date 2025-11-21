# Component Library Structure

This directory contains all React components organized by purpose and reusability.

## Directory Structure

```
components/
├── common/          # Reusable components used across the app
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── ErrorBoundary.tsx
│   ├── LazyImage.tsx
│   ├── LoadingSpinner.tsx
│   ├── OptimizedImage.tsx
│   └── index.ts     # Central export point
│
├── features/        # Feature-specific components
│   ├── map/        # Map-related components
│   ├── passport/   # Passport-related components
│   ├── achievements/ # Achievement-related components
│   ├── stamps/     # Stamp collection components
│   └── index.ts    # Central export point
│
└── test/           # Test components (development only)
    └── ErrorTestComponent.tsx
```

## Common Components

Reusable components that can be used anywhere in the application:

- **Button** - Styled button with variants (primary, secondary, outline)
- **Card** - Container component with consistent styling
- **ErrorBoundary** - Catches errors and displays fallback UI
- **LazyImage** - Lazy-loads images using Intersection Observer
- **LoadingSpinner** - Loading indicator with customizable size
- **OptimizedImage** - Responsive image with lazy loading and srcset

## Feature Components

Feature-specific components organized by domain:

- **map/** - Map view, markers, location details
- **passport/** - Passport view, stamp cards, progress tracking
- **achievements/** - Achievement display, badges, milestones
- **stamps/** - Stamp collection UI, validation, animations

## Usage

### Importing Common Components

```tsx
import { Button, Card, LoadingSpinner } from '@/components/common';
```

### Importing Feature Components

```tsx
import { MapView, StampMarker } from '@/components/features';
```

### Direct Import (if needed)

```tsx
import Button from '@/components/common/Button';
```

## Component Guidelines

1. **Common Components**: Should be generic, reusable, and well-documented
2. **Feature Components**: Can be specific to a feature but should still follow best practices
3. **Props**: Use TypeScript interfaces for all props
4. **Styling**: Use CSS variables from the design system
5. **Accessibility**: Ensure all components are accessible (ARIA labels, keyboard navigation)
6. **Testing**: Include unit tests for complex components

## Adding New Components

1. Determine if it's a **common** or **feature** component
2. Create the component file with proper TypeScript types
3. Export from the appropriate `index.ts` file
4. Add documentation and examples
5. Update this README if needed
