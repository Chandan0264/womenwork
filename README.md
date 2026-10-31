# WomenWork

WomenWork is a frontend-focused remote job platform and skill-up portal for homemakers and job seekers looking for flexible work opportunities. The project includes a modern landing page, job listings, course discovery, authentication screens, and user dashboard/profile areas built with React, TypeScript, Vite, Redux Toolkit, and Material UI.

## Overview

This repository contains the WomenWork frontend application and project setup files. The app is designed to provide:

- a polished landing page and product narrative
- job discovery for remote and flexible work opportunities
- course and upskilling content sections
- authentication flows for sign-in and sign-up
- dashboard and profile screens for users

## Current repository status

The project currently includes the frontend application and configuration files. If you want to connect a backend API, set `VITE_API_URL` to your API base URL. The repository does not include a committed backend application directory at this time, so the frontend can be run independently while a separate API service is connected.

## Tech stack

- React 18
- TypeScript
- Vite
- React Router
- Redux Toolkit
- Material UI
- Axios
- CSS / Tailwind-compatible styling

## Features

- Responsive landing page
- Job board and job detail experience
- Course listing section
- User authentication screens
- Dashboard view
- Profile page
- Environment-based API configuration

## Project structure

```bash
womenwork/
├── .env.example
├── .gitignore
├── README.md
├── docker-compose.yml
├── package.json
├── frontend/
│   ├── .env.example
│   ├── .env.local
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── src/
└── SETUP.md
```

## Prerequisites

- Node.js 18+
- npm 9+
- Git
- A browser for local testing

## Quick start

1. Clone the repository:

```bash
git clone https://github.com/Chandan0264/womenwork.git
cd womenwork
```

2. Install dependencies:

```bash
npm install
cd frontend && npm install && cd ..
```

3. Copy the example environment file:

```bash
cp .env.example .env
cp frontend/.env.example frontend/.env.local
```

4. Start the application:

```bash
cd frontend
npm run dev
```

The app will run in development mode using Vite, typically at:

```text
http://localhost:5173
```

## Environment configuration

The frontend reads its API URL from `VITE_API_URL`.

Example:

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=WomenWork
```

Use the safe template files in this repository instead of committing personal or production settings.

## Database and backend notes

This repository includes a `docker-compose.yml` which defines PostgreSQL and a backend service for container-based local development. The configuration uses environment variables instead of hardcoded secrets. If you use Docker Compose, set the values in your shell or `.env` file before starting the stack.

Example:

```bash
export POSTGRES_PASSWORD=change_me
export JWT_SECRET=replace_with_a_secure_secret
```

Then start:

```bash
docker-compose up --build
```

## Useful commands

```bash
cd frontend
npm install
npm run dev
npm run build
npm run preview
```

## Security

- No real secrets are committed in this repository.
- Local environment files are ignored by Git and should remain on your machine only.
- If a real database or JWT secret was previously committed in a different environment, rotate it immediately and revoke exposure.

## License

This project is provided as a learning and portfolio project. Please check the repository status and usage terms before deployment or commercial use.

## Notes

This README reflects the current repository contents and avoids claiming features or infrastructure that are not present in the codebase.
