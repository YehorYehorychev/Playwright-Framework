# Use the Playwright image as the base image
FROM mcr.microsoft.com/playwright:v1.42.1-jammy

# Set the working directory inside the container
WORKDIR /app

# Copy your application code into the container
COPY . /app

# Install Java and other dependencies
RUN apt-get update && \
    apt-get install -y openjdk-11-jre-headless && \
    npm install

# Set environment variables or additional configuration if needed
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

# Command to run your Playwright tests
CMD ["npm", "test"]