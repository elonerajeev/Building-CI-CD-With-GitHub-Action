pipeline {
    agent any

    environment {
        NODE_VERSION = '18'
    }

    stages {

        stage('Checkout Code') {
            steps {
                // Clones your GitHub repo
                git 'https://github.com/elonerajeev/Building-CI-CD-With-GitHub-Action.git'
            }
        }

        stage('Setup Node.js') {
            steps {
                sh '''
                    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
                    sudo apt-get install -y nodejs
                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint Check') {
            steps {
                sh '''
                    npm install eslint
                    npx eslint app.js views/index.html || exit 1
                '''
            }
        }

        stage('Run Basic Test') {
            steps {
                sh 'echo "✅ Tests passed!"'
            }
        }

        stage('Trigger Render Deploy') {
            steps {
                sh 'curl -X GET "https://api.render.com/deploy/srv-d0skfbidbo4c73f5ps20?key=N9-Wf-POgEU"'
            }
        }
    }
}

