# Remember Me

Memorial services media company website (紀念服務媒體公司).

## Tech Stack

- Vue 3 (Composition API with `<script setup>`)
- Vite 5
- Tailwind CSS 3
- Lucide Vue Next (icons)

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── App.vue              # Root component
├── main.js              # Entry point
├── style.css            # Global styles + Tailwind
└── components/
    ├── Navbar.vue       # Sticky navigation
    ├── HeroSection.vue  # Hero banner
    ├── ServiceCards.vue # Services section
    ├── ServiceCard.vue  # Individual service card
    ├── PortfolioGrid.vue # Portfolio gallery
    └── ContactForm.vue  # Contact form
```

## Design System

- **Primary**: Deep blue-gray (#4A6274)
- **Secondary**: Warm sand (#F4F1EA)
- **Font**: Noto Sans TC (Chinese)
- **Style**: Card-based layout with soft shadows and rounded corners
