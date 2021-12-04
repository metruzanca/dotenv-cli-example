console.log([
    `.env                  : ${process.env.ENV}`,
    `.env.local            : ${process.env.LOCAL || ''}`,
    `.env.serverless       : ${process.env.SERVERLESS || ''}`,
    `.env.serverless.local : ${process.env.SERVERLESS_LOCAL || ''}`,
]);