
# CRUD Project with NestJS and Next.js

This project consists of two main folders: `backend` and `frontend`. The backend is built with **NestJS**, and the frontend with **Next.js**. Below are the steps to set up the development environment and the necessary dependencies.

## Prerequisites

- Node.js (recommended version: 16.x or higher)
- npm (Node package manager)
- SQLite (for development database)

---

## Backend - NestJS

### 1. Installing Dependencies

1. **Prisma** (ORM to interact with the database):
   ```bash
   cd backend
   npm install prisma
   ```

2. **Initialize Prisma** and set up the database:
   ```bash
   npx prisma init --datasource-provider sqlite
   ```

   This will generate a `prisma/schema.prisma` file with SQLite as the database provider.

3. **Run the first migration to create the database**:
   ```bash
   npx prisma migrate dev --name init
   ```

4. **Create a service to manage Prisma in NestJS**:
   ```bash
   nest g service prisma --no-spec
   ```

   This will generate a `PrismaService` under `src/prisma`. Ensure you configure Prisma in this service to interact with the database.

## Frontend - Next.js

### 1. Installing Dependencies

1. **Install the libraries**:
   ```bash
   npm install
   ```
---

## Running the Project

### 1. Backend

1. Ensure you are in the `backend` directory:
   ```bash
   cd backend
   ```

2. Run the NestJS server:
   ```bash
   npm run start:dev
   ```

   This will start the server in development mode.

### 2. Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```

2. Run the Next.js server:
   ```bash
   npm run dev
   ```

   This will start the Next.js application in development mode.

---

## Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Hook Form Documentation](https://react-hook-form.com/)
---