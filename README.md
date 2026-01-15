# Social Media App

A full-stack social media application built with **React** (frontend) and **Sanity Studio** (backend/content management).  
This project demonstrates modern **full-stack development**, environment management, and clean repository practices.

---

## 🚀 Project Structure

```text
social-app/
├─ backend/          # Sanity Studio
│  ├─ package.json
│  ├─ .env.example
│  └─ src/
├─ frontend/         # React + Vite Frontend
│  ├─ package.json
│  ├─ .env.example
│  └─ src/
├─ .gitignore
└─ README.md

🔧 Requirements

Node.js 20.x (recommended via NVM
)

npm 10+

Git

⚡ Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/<username>/social-app.git
cd social-app

2️⃣ Backend Setup (Sanity Studio)

cd backend
nvm use 20
npm install
cp .env.example .env
# Fill in SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN
npm run dev

3️⃣ Frontend Setup (React + Vite)

cd ../frontend
nvm use 20
npm install
cp .env.example .env
# Fill in VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET, VITE_SANITY_API_TOKEN
npm run dev

🔑 Environment Variables
Backend (backend/.env)

SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_TOKEN=

Frontend (frontend/.env)

VITE_SANITY_PROJECT_ID=
VITE_SANITY_DATASET=
VITE_SANITY_API_TOKEN=

⚠️ Never commit .env files.
Only .env.example files should be tracked in Git.

📌 Node Version Management

Node version is locked in each package.json using:
"engines": {
  "node": ">=20 <23"
}

Always switch Node versions with:
nvm use 20

🛠 Scripts
Backend
| Script           | Description                 |
| ---------------- | --------------------------- |
| `npm run dev`    | Start Sanity Studio locally |
| `npm run build`  | Build for production        |
| `npm run deploy` | Deploy Sanity Studio        |

Frontend
| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start React frontend     |
| `npm run build`   | Build frontend           |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |


🔄 Recommended Workflow

1. Switch Node version per folder:
cd backend
nvm use 20
cd ../frontend
nvm use 20

2. Install dependencies:
npm install

3.Copy .env.example → .env and fill values

4.Start development servers:
npm run dev

📝 Contributing

1.Fork the repository

2.Create a feature branch:
git checkout -b feature-name

3.Commit changes cleanly:
git commit -m "Add feature X"

4.Push and open a pull request

🎯 Professional Notes

.gitignore prevents committing node_modules and secrets

.env.example documents required environment variables

Clear separation of backend/ and frontend/

Node versions locked for consistency across environments





