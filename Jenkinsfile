pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        sh 'cd backend && npm ci'
        sh 'cd frontend && npm ci'
      }
    }
    stage('Run tests') {
      steps {
        sh 'cd backend && npm test'
        sh 'cd frontend && npm test'
      }
    }
    stage('Build docker images') {
      steps {
        sh 'docker build -t fullstack-devops-backend ./backend'
        sh 'docker build -t fullstack-devops-frontend ./frontend'
      }
    }
    stage('Docker Compose Up') {
      steps {
        sh 'docker-compose up -d --build'
      }
    }
    stage('Deploy to server') {
      steps {
        echo 'Deploy step placeholder - add your deployment scripts here.'
      }
    }
  }
}
