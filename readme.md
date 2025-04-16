# 💼 Order App

A full-stack application to manage and place product orders.

- Backend: Express + PostgreSQL
- Frontend: React + Vite
- Dockerized with Docker Compose
- Includes DB seed scripts

---

## 📁 Project Structure

```
.
├── apps
│   ├── backend       # Express API
│   └── frontend      # React app
├── docker-compose.yml
├── .env              # Backend environment variables
└── README.md
```

---

## ⚙️ Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/) – only if running locally without Docker

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yulyaolshanska/order-app.git
cd order-app
```

### 2. Set Up Environment Variables

Create a `.env` file inside `apps/backend/` with the following content:

```env
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASS=1prostoparol1
DB_NAME=order_db
```

---

## 🐳 Running with Docker

### Start Services

```bash
docker compose up --build
```

Services will run at:

- Backend: http://localhost:3000
- Frontend: http://localhost:5173

---

## 🌱 Seed Data

On the first run, a seed script will populate the database with a sample user and product catalog.

### 🧑 Default User

A default user is created for testing orders:

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "User",
  "email": "user@example.com",
  "balance": 1000
}
```

### Default Products

A default products is created for testing orders:

```json
[
  {
    "id": "8c32ff73-bad8-4e5e-88d2-4e27a1cb62f2",
    "name": "Keyboard",
    "price": 100,
    "stock": 20
  },
  {
    "id": "8c32ff73-bad8-4e5e-99d2-4907a1cb62f2",
    "name": "Mouse",
    "price": 50,
    "stock": 40
  },
  {
    "id": "1c32ff73-bad8-4e5e-88d2-4e27a1cb62f2",
    "name": "Monitor",
    "price": 300,
    "stock": 10
  }
]
```

### Backend

```bash
cd apps/backend
npm install
npm run start
```

### Frontend

```bash
cd apps/frontend
npm install
npm run dev
```

---

---

## 🧼 Stopping & Cleaning Up

To stop services:

```bash
docker-compose down
```

To stop and remove volumes:

```bash
docker-compose down -v
```

---

## 🧩 Technologies Used

- Backend: Node.js, Express, TypeScript
- Frontend: React (Vite), TypeScript
- Database: PostgreSQL
- ORM: TypeORM
- Docker: Docker, Docker Compose
- Rate Limiting: express-rate-limit
- Logging: Winston

## 📁 API Documentation

### POST /orders

Create a new order.

**Body:**

```json
{
  "userId": "UUID",
  "productId": "UUID",
  "quantity": 2
}
```
