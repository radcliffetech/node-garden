import express from "express";

import { setupMidiListeners } from "./cage/listeners";
import { buildOrchestra } from "./cage/orchestra";

const app = express();

const PORT_NUMBER = 3001;

const orchestra = buildOrchestra();

const buildResponse = (ok: boolean, message: string) => {
  return {
    ok,
    message,
  };
};

app.get("/api/ping", function (req, res) {
  res.json(buildResponse(true, "pong"));
});
app.get("/api/test-tone", function (req, res) {
  orchestra.testTone.play({ note: 60 });
  res.send(buildResponse(true, "Test tone played."));
});
app.get("/api/wanderer/1/on", function (req, res) {
  orchestra.wanderer.prepare({ note: 60 });
  orchestra.wanderer.play();
  res.send(buildResponse(true, "Wanderer 1 started."));
});
app.get("/api/wanderer/1/off", function (req, res) {
  orchestra.wanderer.stop();
  res.send(buildResponse(true, "Wanderer 1 stopped."));
});
app.get("/api/wanderer/2/on", function (req, res) {
  orchestra.wanderer2.prepare({ note: 48 });
  orchestra.wanderer2.play();
  res.send(buildResponse(true, "Wanderer 2 started."));
});
app.get("/api/wanderer/2/off", function (req, res) {
  orchestra.wanderer2.stop();
  res.send(buildResponse(true, "Wanderer 2 stopped."));
});
app.get("/api/long-player/1/on", function (req, res) {
  orchestra.longPlayer.play({ note: 60 });
  res.send(buildResponse(true, "Long player started."));
});
app.get("/api/long-player/1/off", function (req, res) {
  orchestra.longPlayer.stop();
  res.send(buildResponse(true, "Long player stopped."));
});

setupMidiListeners();

console.log(`Server is awake running on port ${PORT_NUMBER}...`);
app.listen(PORT_NUMBER);
