# Welcome to my Playwright-Framework
👋 Hey there! Welcome to my Playwright Framework, crafted with TypeScript! This framework is all about bringing together Playwright and Docker for testing that's smooth sailing in containerized environments. 

With Cucumber 🥒 onboard, it's all about that BDD-style goodness, making test scenarios a breeze to write and understand, perfect for team collaboration. Plus, it's Jenkins-ready, so you can seamlessly slot it into your CI/CD pipelines for continuous testing bliss. 

🔧 Ready to dive into web automation with confidence and ease? 
Let's do this! 🚀

# Docker Prerequisites 🐳
Before you begin, ensure you have met the following requirements:

You have Docker Desktop installed on your system. 
You have an understanding of how to use Docker containers.

# To run the docker compose file run:

``docker-compose -f docker-compose.yml up``

## Manuall Container creating instruction
If you need to create a Docker Container manually, follow these steps:

Open a terminal or command prompt window.
Execute one of the following commands based on your **operating system:**

### For Windows CMD

Copy code:

``docker run -it --rm --name playwright-container -v "%cd%:/app" mcr.microsoft.com/playwright:v1.42.1-jammy``

### For Linux or PowerShell

Copy code:

``docker run -it --rm --name playwright-container -v $PWD:/app mcr.microsoft.com/playwright:v1.42.1-jammy``

Now you need to install OpenJDK 11 into your Docker container, open a **new CMD window** and run the following command:

Copy code:

``docker exec -it <your_container_id> bash -c "apt-get update && apt-get install -y openjdk-11-jdk"``

Once the Docker container is running, execute the following commands inside the container:

Copy code:

```
cd /app
npm install
```
To execute the tests, run:

Copy code:

``npx playwright test``

If it's a Cucumber project, run:

Copy code:

``npm run test``

## Additional Instructions
To switch to the **root directory** of your container, run:

Copy code:

``docker exec -u root -it <your_container_id> bash``

## Contact

Yehor - egor57899@gmail.com

Project Link: https://github.com/YehorYehorychev/Playwright-Framework
