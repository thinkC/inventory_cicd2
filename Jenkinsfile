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
       
        docker images -a
        docker build -t inventoryfrnt .
        docker images -a
        cd ..

        """)
        }
      }
}

}
