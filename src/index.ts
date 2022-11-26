import express from "express";

import { getMidiOutput, Instrument } from "./midi";

const app = express();

const output = getMidiOutput();
const instrument = new Instrument("Yalbophone", output);

app.get("/", function (req, res) {
  res.send("Test Tone!");
  instrument.play({ note: 60 });
});

console.log("Server is running on port 3001");
app.listen(3001);
