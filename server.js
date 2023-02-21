const express = require("express");
const path = require("path");
const routes = require('./routes/routes');

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const assetsRouter = require("./server/assets-router");
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/src", assetsRouter);
app.use('/api', routes)

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
})

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});

module.exports = app;
