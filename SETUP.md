# 🚀 WomenWork - Complete Setup Guide

This guide will walk you through setting up the entire WomenWork project from scratch on your local system.

## 📋 Prerequisites

### Required Software
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **PostgreSQL** (v14 or higher) - [Download](https://www.postgresql.org/download/)
- **Git** - [Download](https://git-scm.com/)
- **Visual Studio Code** (or any code editor) - [Download](https://code.visualstudio.com/)

### System Requirements
- 4GB RAM minimum
- 500MB free disk space
- Windows, macOS, or Linux

---

## 📥 Step 1: Download & Install Prerequisites

### 1.1 Install Node.js
```bash
# Verify Node.js installation
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher
```

### 1.2 Install PostgreSQL
- **Windows**: Use the installer, remember the password you set
- **macOS**: Use Homebrew or installer
- **Linux**: Use your package manager

```bash
# Verify PostgreSQL installation
psql --version
```

### 1.3 Install Git
```bash
# Verify Git installation
git --version
```

---

## 🔧 Step 2: Environment Setup

### 2.1 Create a Working Directory
```bash
# Windows
mkdir C:\Projects
cd C:\Projects

# macOS/Linux
mkdir ~/Projects
cd ~/Projects
```

### 2.2 Clone the Repository
```bash
git clone https://github.com/Chandan0264/womenwork.git
cd womenwork
```

---

## 🗄️ Step 3: Database Setup

### 3.1 Create PostgreSQL Database
```bash
# Open PostgreSQL command line
psql -U postgres

# Inside psql terminal, run:
CREATE DATABASE womenwork_db;
CREATE DATABASE womenwork_test;

# Verify creation
\l

# Exit psql
\q
```

### 3.2 Create Environment File for Backend
```bash
cd backend
# Create .env file
```

**For Windows (PowerShell):**
```powershell
New-Item .env
```

**For macOS/Linux:**
```bash
touch .env
```

Add the following content to `backend/.env`:
```env
# Database
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/womenwork_db"
TEST_DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/womenwork_test"

# JWT
JWT_SECRET="your_super_secret_jwt_key_min_32_characters_long"
JWT_EXPIRE="7d"

# Server
NODE_ENV="development"
PORT=5000

# Frontend URL
FRONTEND_URL="http://localhost:5173"

# Email (optional - for production)
EMAIL_USER="your_email@gmail.com"
EMAIL_PASSWORD="your_app_password"

# Encryption
REFRESH_TOKEN_SECRET="your_refresh_token_secret_min_32_chars"
```

---

## 🎨 Step 4: Frontend Setup

### 4.1 Navigate to Frontend Directory
```bash
cd frontend
```

### 4.2 Install Dependencies
```bash
npm install
```

### 4.3 Create Environment File
```bash
# Create .env.local file
```

**For Windows (PowerShell):**
```powershell
New-Item .env.local
```

**For macOS/Linux:**
```bash
touch .env.local
```

Add to `frontend/.env.local`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=WomenWork
```

### 4.4 Verify Frontend Installation
```bash
npm run dev
```
Should show: `Local: http://localhost:5173`

---

## ⚙️ Step 5: Backend Setup

### 5.1 Navigate to Backend Directory (in new terminal)
```bash
cd backend
```

### 5.2 Install Dependencies
```bash
npm install
```

### 5.3 Setup Prisma Database
```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed database (optional)
npm run seed
```

### 5.4 Start Backend Server
```bash
npm run dev
```
Should show: `Server running on http://localhost:5000`

---

## 🎯 Step 6: Complete Project Structure

After setup, your project structure should look like:

```
womenwork/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── App.tsx
│   ├── .env.local
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── server.ts
│   ├── prisma/
│   │   └── schema.prisma
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
│
├── docker-compose.yml
├── README.md
└── SETUP.md
```

---

## 🚀 Step 7: Running the Project

### Method 1: Terminal Method (Recommended for Development)

**Terminal 1 - PostgreSQL (if not running as service):**
```bash
# Only if PostgreSQL is not running as a background service
pg_ctl -D "C:\Program Files\PostgreSQL\15\data" start  # Windows
# macOS: brew services start postgresql
# Linux: sudo systemctl start postgresql
```

**Terminal 2 - Backend:**
```bash
cd C:\Projects\womenwork\backend  # or your path
npm run dev
# Output: Server running on http://localhost:5000
```

**Terminal 3 - Frontend:**
```bash
cd C:\Projects\womenwork\frontend  # or your path
npm run dev
# Output: Local: http://localhost:5173
```

### Method 2: Docker Method (Production-like)

```bash
cd womenwork
docker-compose up -d
# Access: http://localhost:5173
```

---

## ✅ Step 8: Verify Everything Works

### Check All Services
```bash
# 1. Check Frontend
curl http://localhost:5173

# 2. Check Backend
curl http://localhost:5000/api/health

# 3. Check Database Connection
psql -U postgres -d womenwork_db -c "SELECT version();"
```

### Test Authentication
1. Open `http://localhost:5173`
2. Click **Sign Up**
3. Register with test credentials
4. You should receive a confirmation and be redirected to dashboard

---

## 🧪 Step 9: Testing

### Frontend Tests
```bash
cd frontend
npm run test          # Run tests
npm run test:ui      # Run tests with UI
npm run coverage     # Coverage report
```

### Backend Tests
```bash
cd backend
npm run test         # Run all tests
npm run test:watch  # Watch mode
npm run coverage    # Coverage report
```

---

## 🔍 Step 10: Troubleshooting

### Issue: Port 5000 already in use
```bash
# Find and kill process using port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :5000
kill -9 <PID>
```

### Issue: PostgreSQL connection refused
```bash
# Make sure PostgreSQL is running
# Windows: Services > PostgreSQL
# macOS: brew services list
# Linux: sudo systemctl status postgresql

# Test connection:
psql -U postgres -h localhost
```

### Issue: npm install fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and lock file
rm -r node_modules
rm package-lock.json  # or yarn.lock

# Reinstall
npm install
```

### Issue: Prisma migration errors
```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Or manually:
npx prisma migrate deploy
```

---

## 📚 Useful Commands Reference

### Frontend
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run test         # Run tests
```

### Backend
```bash
npm run dev          # Start dev server
npm run build        # Build TypeScript
npm start            # Run compiled code
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run test         # Run tests
npx prisma studio   # Open Prisma Studio GUI
npx prisma migrate  # Manage migrations
```

---

## 🌐 Access Points After Setup

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:5173 | User Interface |
| Backend API | http://localhost:5000 | API Endpoints |
| API Docs | http://localhost:5000/api-docs | Swagger Documentation |
| Prisma Studio | Run `npx prisma studio` | Database GUI |
| PostgreSQL | localhost:5432 | Database Server |

---

## 📦 Required Tools Summary

| Tool | Version | Purpose | Download |
|------|---------|---------|----------|
| Node.js | 18+ | Runtime | nodejs.org |
| npm | 9+ | Package Manager | Comes with Node.js |
| PostgreSQL | 14+ | Database | postgresql.org |
| Git | Latest | Version Control | git-scm.com |
| VSCode | Latest | Code Editor | code.visualstudio.com |

---

## 🎓 Next Steps

1. ✅ Complete this setup guide
2. 🔐 Review security best practices in `/docs/SECURITY.md`
3. 📖 Read `/docs/API.md` for API documentation
4. 🎨 Check `/docs/DESIGN_SYSTEM.md` for UI guidelines
5. 🚀 Deploy to production (See `/docs/DEPLOYMENT.md`)

---

## 📞 Need Help?

- Check GitHub Issues: https://github.com/Chandan0264/womenwork/issues
- Review Troubleshooting section above
- Check project documentation in `/docs`

---

**Happy coding! 🎉**
