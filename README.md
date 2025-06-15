# 🚀 Nuxt 3 / Vuetify / GraphQL / Pinia Starter

This project is a modern frontend boilerplate built using **Nuxt 3**, **Vuetify**, **GraphQL**, and **Pinia**. It provides a solid foundation for building powerful, maintainable, and scalable Vue-based applications.

---

## 🌐 Tech Stack

- **[Nuxt 3](https://nuxt.com/docs/getting-started/introduction)** – Powerful Vue 3 framework
- **[Vuetify 3](https://next.vuetifyjs.com/)** – Elegant Material Design UI components
- **[GraphQL](https://graphql.org/)** – Query-based API structure for efficient data fetching
- **[Pinia](https://pinia.vuejs.org/)** – Lightweight and intuitive state management

---

## ✅ Features

- 🔍 **Search Functionality**: Easily search launches by mission or rocket name  
- 🎨 Vuetify integration with Tailwind utility classes  
- 📦 GraphQL API integration with Apollo Client  
- 🗂 State management using Pinia  
- 🧼 Linting: Pre-configured with **ESLint**, **Stylelint**, **Prettier**, and **Commitizen**

---

## 📦 Setup

Make sure to install the dependencies:

```bash
npm install -g pnpm

```

## Development Server
Run the local development server
```bash
pnpm dev
```
## Challenges Faced
```
1. Project Structure and Configuration
Problem: Initially, the nuxt.config.ts file was placed outside the app/ folder, which caused path resolution issues (e.g., SCSS not being found).

Solution: Adjusted the rootDir in the config and ensured all path references (like @/assets) respected the new structure.

2. Tailwind & Vuetify Integration
Problem: Mixing TailwindCSS and Vuetify caused confusion — styling sometimes clashed, and component behavior varied.

Solution: Decided to primarily use Vuetify for components and Tailwind for layout/utility classes, with clear boundaries.

3. Apollo Client Configuration
Problem: Issues with connecting to the SpaceX GraphQL API and properly setting up Apollo in Nuxt 3.

Solution: Configured the @nuxtjs/apollo module correctly with the API endpoint and ensured types and structure were used consistently.

4. Pinia Store Activation
Problem: Encountered the getActivePinia() error due to using the store outside of a Nuxt component lifecycle.

Solution: Ensured Pinia was properly initialized with app.use(pinia) and only used inside components or proper composables.

5. Search & UI Issues
Problem: Styling search fields to be centered and rounded didn’t work initially due to flex alignment misconfiguration.

Solution: Corrected with appropriate Tailwind utility classes (justify-center, rounded-full, etc.).

6. Deployment to Vercel
Problem: Confusion between using vite-plugin-vuetify and @vuetify/nuxt, and Vercel failing to detect the correct build output.

Solution: Used @vuetify/nuxt, updated build directory to .output/public, and followed best practices for Nuxt 3 deployment.

```
## Future Improvements
```
1. Pagination or Infinite Scrolling
Add pagination to avoid rendering hundreds of launches at once, improving performance and UX.

2. Better Error Handling
Use more graceful fallback UI for failed API calls (e.g., retry mechanism, offline indicator).

3. Responsive Enhancements
Improve responsiveness on mobile (e.g., collapsible filters, better spacing adjustments).
```