# nextjs-seed
A foundational starter project for building NextJS applications with [Strapi](https://strapi.io) backend using Static Site Generation (SSG).

## About

**nextjs-seed** is a minimal yet extensible NextJS base project, maintained alongside production projects to ensure it reflects real-world engineering improvements. It is ideal for bootstrapping new NextJS apps with a strong foundation and opinionated structure.

This project serves as a reusable starting point for new NextJS SSG applications.

---

## Features

- Clean baseline setup with minimal bloat
- Configured with a Strapi CMS backend
- ESLint and Prettier

---

## Getting Started

### Clone the Repository

```bash
git clone git@github.com:cdiptangshu/nextjs-seed.git
cd nextjs-seed
```

### Install Dependencies
```
npm install
```

### Setup Environment

To configure the local environment, follow these steps:

1. **Copy the `.env.example` file**:

   ```bash
   cp .env.example .env
   ```

2. **Update the `.env` file**:
   Open the `.env` file and modify the environment variables as necessary for your local setup.


### Run the Development Server
```
npm run dev
```

---

## Build & Deploy in Production

Make sure the environment variables are set up correctly in the **production environment**.

These commands are used to run in production mode.

### Build

```bash
npm run build
```

Builds the `out` directory for production. This needs to be served from the production application server.

---

## Linting

This project uses **ESLint** and **Prettier** to enforce consistent code style and formatting.

### Run Linter

```bash
npm run lint
```

Checks your code for syntax and style issues based on the configured rules.

### Fix Lint Errors Automatically

```bash
npm run lint:fix
```

Automatically fixes fixable linting and formatting issues.

---

### Configuration Files

* `.eslintrc.js` — ESLint rules and plugins
* `.prettierrc` — Prettier formatting rules
* `.eslintignore` — Paths to ignore from linting

---

## Maintenance

To contribute to the seed project.
```
# In your project
git checkout -b improve-something
# Make and commit changes
git commit -am "Improve something"

# Push to strapi-seed
git push seed improve-something:improve-something
```
Create a pull request (PR) to merge the branch `improve-something` to `main`


## License

<a href="https://github.com/cdiptangshu/nextjs-seed">nextjs-seed</a> © 2025 by <a href="https://diptangshu.com">Diptangshu Chakrabarty</a> is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" style="max-width: 1em;max-height:1em;margin-left: .2em;">
