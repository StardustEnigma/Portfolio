# 🚀 Stunning 3D Portfolio Website

A modern, interactive portfolio website featuring cutting-edge 3D graphics, smooth animations, and a sleek design powered by React, Three.js, and Tailwind CSS.

## ✨ Features

### 3D Components
- **Rotating Cube**: An animated 3D cube with distortion effects that rotates continuously
- **Morphing Blob**: A wobbling icosahedron that morphs and distorts in real-time
- **Particle Field**: Animated floating particles creating depth and visual interest
- **Interactive Camera**: OrbitControls allowing smooth 3D scene interaction

### Interactive Elements
- **Smooth Scroll Animations**: Sections animate in as you scroll
- **Framer Motion Effects**: Staggered animations on all UI elements
- **Hover States**: Interactive buttons and cards with smooth transitions
- **Responsive Design**: Fully responsive layout using Tailwind CSS

### Page Sections
1. **Hero Section**: Immersive 3D background with animated text and CTAs
2. **About Section**: Personal introduction with beautiful gradients
3. **Skills Section**: 6 skill categories with hover effects
4. **Featured Projects**: Project showcase with tags and descriptions
5. **CTA Section**: Call-to-action for collaboration
6. **Footer**: Quick links and social media connections

## 🛠️ Technology Stack

- **React 19.2**: UI framework
- **Three.js**: 3D graphics library
- **React Three Fiber**: React renderer for Three.js
- **Drei**: Helpful utilities for React Three Fiber
- **Framer Motion**: Animation library
- **Tailwind CSS 4**: Utility-first CSS framework
- **Vite**: Lightning-fast build tool

## 📂 Project Structure

```
src/
├── components/
│   ├── HeroCanvas.jsx          # Main 3D canvas container
│   ├── RotatingCube.jsx        # 3D rotating cube component
│   ├── ParticleField.jsx       # Particle system component
│   ├── MorphingBlob.jsx        # Wobbling blob component
│   ├── InteractiveText.jsx     # 3D text component
│   └── AnimatedSection.jsx     # Scroll animation wrapper
├── pages/
│   └── Home.jsx                # Main home page
├── App.jsx                     # Main app component
├── main.jsx                    # React entry point
└── index.css                   # Global styles
```

## 🎨 Key Components Explained

### HeroCanvas
The main 3D canvas that combines three animated 3D objects with particle effects:
- Uses `@react-three/fiber` Canvas component
- Includes OrbitControls for interactive rotation
- Multiple point lights for dramatic lighting
- Performance optimized with automatic culling

### AnimatedSection
A wrapper component that triggers animations when elements come into view:
- Uses Framer Motion's `useInView` hook
- Configurable delay for staggered animations
- Smooth fade-in and slide-up effect

### Skill Cards & Project Cards
Interactive cards with:
- Hover lift effects
- Border color transitions
- Smooth box shadow animations
- Responsive grid layout

## 🚀 Getting Started

### Installation
```bash
cd portfolio
npm install
```

### Development
```bash
npm run dev
```

The app will start at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎯 Customization Guide

### Colors
All colors use Tailwind's color system. Key colors:
- Primary: `indigo-600` and `purple-600`
- Accents: `pink-400`, `a78bfa`
- Background: `slate-950`, `slate-900`

Edit colors in components or create a custom Tailwind theme.

### 3D Objects
- **RotatingCube**: Modify rotation speed in `useFrame` callback
- **MorphingBlob**: Adjust `factor` and `speed` in `MeshWobbleMaterial`
- **ParticleField**: Change particle count, size, and opacity

### Text Content
Edit text in `src/pages/Home.jsx`:
- Hero title and tagline
- About section content
- Skills categories and items
- Project descriptions
- Footer text

### Adding More Projects
Extend the projects array in the Featured Projects section with new objects following the same structure.

## 📱 Responsive Breakpoints

- **Mobile**: Default mobile-first design
- **Tablet (md)**: 768px and up
- **Desktop (lg)**: 1024px and up

## ⚡ Performance Tips

1. **3D Optimization**: The canvas uses frustum culling by default
2. **Lazy Loading**: Consider implementing image lazy loading for project images
3. **Code Splitting**: For large projects, use dynamic imports
4. **Bundle Size**: Currently ~350kb gzipped (includes Three.js)

## 🎓 Learning Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🐛 Troubleshooting

### 3D Canvas not showing
- Check browser WebGL support
- Verify canvas div has proper dimensions
- Check browser console for errors

### Animations stuttering
- Reduce particle count in `ParticleField.jsx`
- Disable `autoRotate` in `OrbitControls`
- Check browser performance tab

### Build size too large
- Consider extracting Three.js models
- Use dynamic imports for heavy components
- Profile bundle with `npm run build -- --report`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and enhance this portfolio!

---

**Made with ❤️ and lots of code** ✨

