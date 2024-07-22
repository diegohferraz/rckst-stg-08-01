const express = require("express");

const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

const PORT = 3333;

app.get("/", (_, response) => {
  response.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
