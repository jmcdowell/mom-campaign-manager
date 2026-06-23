# Campaign Manager

A minimal Next.js starter app with a SQLite example.

## What is included

- `Next.js` app router structure
- SQLite database helper in `lib/db.ts`
- API route at `app/api/notes/route.ts`
- A simple note form component with local storage in SQLite

## Run locally

1. Install dependencies

```bash
npm install
```

> On Linux, the `better-sqlite3` package requires a native build toolchain such as `make`, `gcc`, and Python.
> If `npm install` fails, install your platform's build essentials and retry.

2. Start development server

```bash
npm run dev
```

3. Open `http://localhost:3000`

## SQLite data

- The database file is created at `data/app.db`
- Notes are stored in the `notes` table
- You can inspect the file with any SQLite tool
