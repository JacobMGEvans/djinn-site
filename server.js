const express = require(`express`);
require(`dotenv`).config();

const port = process.env.PORT || 4321;
express()
  .use(express.static(`${__dirname}/dist`))
  .get(`*`, (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
  .listen(port, () => console.log(`__SERVER_RUNNING__`, port));
