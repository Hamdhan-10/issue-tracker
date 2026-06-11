# Mini Project Issue Tracker

A full-stack Issue Tracker SPA built with Laravel (API backend) and React (frontend).

---

## Prerequisites

Make sure you have the following installed:
- PHP 8.2+
- Composer
- Node.js & npm
- MySQL

---

## Backend Setup (Laravel)

### 1. Go into the backend folder
```bash
cd backend
```

### 2. Install PHP dependencies
```bash
composer install
```

### 3. Copy the environment file
```bash
cp .env.example .env
```

### 4. Generate the application key
```bash
php artisan key:generate
```

### 5. Configure your database
Open `.env` and update these lines with your MySQL details:

### 6. Run the migrations
```bash
php artisan migrate
```

### 7. Start the Laravel server
```bash
php artisan serve
```
Laravel will run on `http://127.0.0.1:8000`

---

## Frontend Setup (React)

### 1. Go into the frontend folder
```bash
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the React app
```bash
npm run dev
```
React will run on `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/issues | Fetch all issues |
| POST | /api/issues | Create a new issue |
| PATCH | /api/issues/{id}/status | Update issue status |

---

## Project Structure
TechnicalAssessment/
├── backend/          # Laravel API
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/IssueController.php
│   │   │   └── Requests/
│   │   │       ├── StoreIssueRequest.php
│   │   │       └── UpdateIssueRequest.php
│   │   ├── Models/Issue.php
│   │   └── Services/IssueService.php
│   └── routes/api.php
└── frontend/         # React SPA
└── src/
├── api/issueApi.js
├── components/
│   ├── IssueCard.jsx
│   ├── IssueForm.jsx
│   └── IssueList.jsx
└── pages/IssueDashboard.jsx