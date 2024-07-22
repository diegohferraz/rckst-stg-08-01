const express = require("express");

const app = express();

const PORT = 3333;

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.get("/user/:name", (request, response) => {
  const { page, limit } = request.query;

  response.send(
    `Hello ${request.params.name}. Page = ${page}, Limit = ${limit}`
  );
});

app.get("/user/:name/:surname", (request, response) => {
  const { name, surname } = request.params;
  response.send(`Hello ${name} ${surname}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
