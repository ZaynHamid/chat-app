import express from 'express';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Server } from 'socket.io';

const app = express();


app.get('/', (req, res) => {
  res.json({msg: "Hello"})  
});


app.listen(3000, () => {
  console.log(`Server running on port localhost:3000`);
});
