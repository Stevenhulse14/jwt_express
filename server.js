const express = require("express");
const morgan = require("morgan");

const PORT = 8080;

const app = express();

// Middleware

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// Testing Router

app.get("/", (req, res) => {
  res.send("Greeting outsider! ");
});

// Routing

app.use("/api", require("./api"));

// Error Handler

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log("Listening on Port 8080");
});
