pipeline {
   agent any

   stages {
      stage('Verify Branch') {
         steps {
            echo "$GIT_BRANCH"
         }
      }
       stage('Docker Build') {
        steps {
        pwsh(script: 'docker images -a')
        pwsh(script: """
        cd inventory_cicd2/
        docker images -a
        docker build -t inventoryfrnt .
        docker images -a
        cd ..

        """)
        }
      }
}

}
