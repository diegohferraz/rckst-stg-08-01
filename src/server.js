const express = require("express");

const app = express();

const PORT = 3333;

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
