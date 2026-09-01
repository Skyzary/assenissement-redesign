# Burnens Assainissement - Next.js Redesign

This is the modernized, Next.js (React 19) version of the Burnens Assainissement website, migrating from a legacy static structure to a modern App Router implementation.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: SCSS (CSS Modules + BEM methodology)
- **Animation**: Framer Motion
- **Language**: TypeScript

## Architectural Guidelines (Atomic Design)

This project strictly adheres to the Atomic Design methodology.
UI components are located in `components/` and are organized as follows:

1. **`atoms/`**: The smallest building blocks (e.g., `Button`, `Input`, `Label`, `Icon`). They cannot be broken down further.
2. **`molecules/`**: Combinations of atoms to form relatively simple UI components (e.g., `ServiceCard`, `FormGroup`, `SearchBar`).
3. **`organisms/`**: Complex UI components composed of groups of molecules and/or atoms (e.g., `Header`, `Footer`, `ContactForm`, `HeroSection`).

### SCSS & Styling Rules
- Centralized variables exist in `styles/_variables.scss`.
- All styling must be scoped using SCSS Modules (`[ComponentName].module.scss`).
- BEM (Block Element Modifier) naming conventions are encouraged inside SCSS modules.
- **Strict rules:** No inline styles in React components. No `!important` tags. Use proper CSS specificity.
- The `data-theme="dark"` attribute on the `<html>` tag toggles CSS variables for dark mode support.

## Implementing the Contact Form (React 19 Server Actions)

The contact form uses React 19's native `<form action={submitAction}>` integration with Next.js Server Actions.

### Steps to connect to a backend/mailer:
1. Open the `actions/contactAction.ts` file (create this file if not present).
2. Define a `use server` function that handles the form data.
3. In this function, extract fields from the `FormData` object (e.g., `formData.get('name')`).
4. Validate the inputs server-side.
5. Connect to an SMTP mailer (like Nodemailer, Resend, or SendGrid).
6. Return a success/error state to the client.
7. Use the `useActionState` (or `useFormState` in React 18) hook inside your `ContactForm` organism to handle loading, success, and error UI states natively.

## Running the Application
\`\`\`bash
npm run dev
\`\`\`
Visit `http://localhost:3000`.
