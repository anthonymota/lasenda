import fs from 'node:fs/promises';

import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

//CORS

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', async (req, res) => {
  const fileContent = await fs.readFile('./data/clients.json');

  const clientsData = JSON.parse(fileContent);

  res.status(200).json({ clients: clientsData });
});

app.listen(3000);
