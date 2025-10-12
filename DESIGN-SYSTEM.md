# 🎨 Design System Reference

Quick reference for the visual design system used in this blog.

## 🎨 Color Palette

### Brand Colors
```css
--color-primary: #2563eb         /* Primary blue */
--color-primary-dark: #1e40af    /* Darker blue */
--color-primary-light: #3b82f6   /* Lighter blue */
```

### Category Colors
```css
--color-accent-emerald: #10b981  /* Tech */
--color-accent-amber: #f59e0b    /* Finance */
--color-accent-rose: #f43f5e     /* Travel */
--color-accent-purple: #7c3aed   /* Mind */
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--gradient-warm: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
--gradient-cool: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
--gradient-sunset: linear-gradient(135deg, #fa709a 0%, #fee140 100%)
```

## 📏 Spacing Scale

```css
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-5: 1.25rem   /* 20px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-10: 2.5rem   /* 40px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
--space-24: 6rem     /* 96px */
```

## 🌑 Shadows

```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08)
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12)
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.15)
--shadow-2xl: 0 24px 64px rgba(0, 0, 0, 0.2)
```

## 🔲 Border Radius

```css
--radius-sm: 0.5rem   /* 8px - Small elements */
--radius-md: 1rem     /* 16px - Cards */
--radius-lg: 1.5rem   /* 24px - Large cards */
999px                 /* Pills/badges */
```

## 🎭 Animation Curves

```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)        /* Standard */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)  /* Bounce */
--ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6)    /* Elastic */
```

## 🎬 Animation Library

### Built-in Animations

**Float**
```css
.float-animation
/* Gentle up/down movement */
```

**Pulse**
```css
.pulse-animation
/* Breathing opacity effect */
```

**Shimmer**
```css
.shimmer
/* Gradient sweep effect */
```

**Drift**
```css
/* Background pattern movement (auto-applied to heroes) */
```

## 🎨 Component Classes

### Glass Cards
```html
<div class="glass-card">
  <!-- Frosted glass effect with backdrop blur -->
</div>
```

### Gradient Text
```html
<h1 class="gradient-text">Title</h1>
<h1 class="gradient-text-warm">Warm Title</h1>
<h1 class="gradient-text-cool">Cool Title</h1>
```

### Enhanced Buttons
```html
<a href="#" class="btn btn-enhanced">Primary Action</a>
<a href="#" class="btn btn-ghost-enhanced">Secondary Action</a>
```

### Category Cards
```html
<div class="spotlight-card spotlight-card--tech">Tech Content</div>
<div class="spotlight-card spotlight-card--finance">Finance Content</div>
<div class="spotlight-card spotlight-card--travel">Travel Content</div>
<div class="spotlight-card spotlight-card--mind">Mind Content</div>
```

### Animated Links
```html
<a href="#" class="animated-link">Animated underline on hover</a>
```

### Chips/Tags
```html
<span class="chip">Default</span>
<span class="chip chip-accent">Accent</span>
<span class="tag-chip">#hashtag</span>
```

## 📱 Breakpoints

```css
/* Mobile First */
Base: 320px+

/* Tablet */
@media (min-width: 768px)

/* Desktop */
@media (min-width: 1024px)

/* Large Desktop */
@media (min-width: 1200px)
```

## 🎯 Usage Examples

### Hero Section
```html
<section class="hero-enhanced">
  <div class="hero-content container">
    <span class="hero-badge pulse-animation">Badge</span>
    <h1 class="hero-title gradient-text">Title</h1>
    <p class="hero-subtitle">Subtitle</p>
  </div>
</section>
```

### Card Grid
```html
<div class="posts-grid">
  <article class="post-card-enhanced glass-card">
    <div class="post-image">
      <img src="..." alt="...">
    </div>
    <div class="post-content">
      <h3 class="post-title">Title</h3>
      <p class="post-excerpt">Excerpt...</p>
    </div>
  </article>
</div>
```

### Category Badge
```html
<span class="post-category post-category--tech">Tech</span>
<span class="post-category post-category--finance">Finance</span>
```

## 🎨 Color Usage Guidelines

### Tech Category
- Background: `rgba(16, 185, 129, 0.1)`
- Border: `rgba(16, 185, 129, 0.3)`
- Text: `#047857`

### Finance Category
- Background: `rgba(245, 158, 11, 0.1)`
- Border: `rgba(245, 158, 11, 0.3)`
- Text: `#92400e`

### Travel Category
- Background: `rgba(239, 68, 68, 0.1)`
- Border: `rgba(239, 68, 68, 0.3)`
- Text: `#b91c1c`

### Mind Category
- Background: `rgba(139, 92, 246, 0.1)`
- Border: `rgba(139, 92, 246, 0.3)`
- Text: `#5b21b6`

## ✨ Effects Cheat Sheet

### Hover Effects
```css
/* Card hover */
transform: translateY(-8px) scale(1.01)
box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2)

/* Button hover */
transform: translateY(-2px) scale(1.05)

/* Image hover */
transform: scale(1.08)
filter: brightness(1.1) saturate(1.1)
```

### Glass Morphism
```css
background: rgba(255, 255, 255, 0.7)
backdrop-filter: blur(10px)
border: 1px solid rgba(255, 255, 255, 0.18)
```

### Gradient Overlay
```css
background: linear-gradient(
  135deg,
  rgba(99, 102, 241, 0.05) 0%,
  rgba(168, 85, 247, 0.05) 100%
)
```

## 🎓 Best Practices

### DO ✅
- Use spacing scale for consistency
- Apply hover effects to interactive elements
- Use category colors for visual hierarchy
- Keep animations subtle and smooth
- Test on mobile devices

### DON'T ❌
- Mix multiple animation types on one element
- Use colors outside the palette
- Overuse blur effects (performance)
- Forget accessibility (focus states, contrast)
- Ignore responsive breakpoints

## 🔧 Customization Tips

### Changing Primary Color
```css
:root {
  --color-primary: #your-color;
  --color-primary-dark: /* darker version */
  --color-primary-light: /* lighter version */
}
```

### Adjusting Animation Speed
```css
transition: all 0.3s var(--ease-smooth);
/* Change 0.3s to your preferred duration */
```

### Modifying Shadow Intensity
```css
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
/* Adjust the alpha (0.1) to change intensity */
```

## 📚 Quick Links

- Full documentation: `VISUAL-ENHANCEMENTS.md`
- Implementation: `assets/css/visual-enhancements.css`
- Homepage example: `_layouts/home.html`
- Architecture guide: `CLAUDE.md`

---

**Tip**: All design tokens use CSS custom properties, making theme-wide changes easy!
