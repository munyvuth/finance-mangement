FROM public.ecr.aws/lambda/nodejs:22.2025.07.28.10

# Copy package-lock.json and package.json
COPY package*.json ${LAMBDA_TASK_ROOT}
RUN npm install

# Copy function code 
COPY createUser.mjs ${LAMBDA_TASK_ROOT}

# Command to run the Lambda function
CMD ["createUser.handler"]
