# use terra-node as base image
FROM cerner/terra-node

# Create the build directory for testing
RUN "npm run compile:prod"

# run the server
CMD ["npm", "run", "start"]
