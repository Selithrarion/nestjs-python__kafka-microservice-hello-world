## Step by step installation
1. #1 Terminal. docker-compose up  
2. #2 Terminal. cd ./nest-app
3. yarn install  
4. yarn start:dev  
5. #3 Terminal, write "cd ./python-app"  
6. pip install confluent_kafka
7. python main.py

http://localhost:3000 - nestjs server  
http://localhost:9021 - kafka's control center  
localhost:9094 / 127.0.0.1:9094 / host.docker.internal:9094 - docker kafka's ip  
