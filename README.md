# Fullstack DevOps App

A production-ready full-stack project with a Node.js/Express API, MongoDB, and a modern React UI. The project includes Docker support, a Jenkins CI/CD pipeline, and an MVC backend structure.

## Project Structure
```
.
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   ├── Dockerfile
│   └── package.json
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   └── styles
│   ├── .env.example
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

## Local Development

### Backend
1. Copy the environment file and adjust values:
   ```bash
   cp backend/.env.example backend/.env
   ```
2. Install dependencies and run the API:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

### Frontend
1. Copy the environment file if needed:
   ```bash
   cp frontend/.env.example frontend/.env
   ```
2. Install dependencies and run the app:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Docker Commands

### Build and run everything
```bash
docker-compose up --build
```

### Backend environment variables
Update `backend/.env` with a secure `JWT_SECRET` before running in production.

### Stop services
```bash
docker-compose down
```

## Jenkins Setup
1. Create a new Jenkins pipeline job.
2. Point the job to this repository.
3. Ensure Jenkins has Docker and Docker Compose installed on the agent.
4. Run the pipeline; it will:
   - install dependencies
   - run tests
   - build Docker images
   - start services via Docker Compose
   - execute a deploy placeholder stage

## API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/users/me` (protected)

## Notes
- The backend uses JWT authentication.
- The frontend stores the JWT token in local storage.
- MongoDB data persists in a Docker volume.
