import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello Donkers!");
});

console.log("Server is running on port 3000");
app.listen(3000);
