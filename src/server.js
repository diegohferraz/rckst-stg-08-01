require("express-async-errors");

const AppError = require("./utils/AppError");
const express = require("express");
const migrationsRun = require("./databases/migrations");
const routes = require("./routes");

migrationsRun();

const app = express();
app.use(express.json());
app.use(routes);

app.use((error, _, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.log(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const PORT = 3333;

app.get("/", (_, response) => {
  response.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
