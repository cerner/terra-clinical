# use terra-node as base image
FROM mjhenkes/terra-base:1

# run the server
CMD ["npm", "run", "start"]
