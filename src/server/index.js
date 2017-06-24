'use strict';

const app = require('./app');
const port = app.get('port');

process.on('nuxt:build:done', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const server = app.listen(port);
  const address = `${app.get('host')}:${port}`;
  
  server.on('listening', () =>
    console.log(`Feathers application started on ${address}`)
  );
});
