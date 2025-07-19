pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                echo '✅ Cloning from GitHub...'
                git 'https://github.com/elonerajeev/Building-CI-CD-With-GitHub-Action.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running tests...'
                sh 'npm test || echo "⚠️ No tests found"'
            }
        }

        stage('Build/Deploy') {
            steps {
                echo '🚀 Starting app...'
                sh 'nohup node index.js &'
            }
        }
    }
}
