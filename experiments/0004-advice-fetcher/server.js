// Trivial local stand-in for the real advice API, for testing Lesson 4's
// error-handling path deterministically instead of temporarily breaking
// the real URL and having to remember to put it back.
//
// Run: node server.js
// Then, to try it against the extension:
//   - add "http://localhost:8787/*" to host_permissions in manifest.json
//   - point background.js's fetch at http://localhost:8787/advice (happy
//     path, same { slip: { advice } } shape as the real API) or
//     http://localhost:8787/advice/broken (always a 500, for the error path)

import http from "node:http";

const ADVICE = [
  "Do not walk in front of me, I may not follow. Do not walk behind me, I may not lead. Walk beside me and be my friend.",
  "If you don't like something, change it. If you can't change it, change your attitude.",
  "Every day may not be good, but there's something good in every day.",
];

const PORT = 8787;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/advice") {
    const advice = ADVICE[Math.floor(Math.random() * ADVICE.length)];
    res.writeHead(200);
    res.end(JSON.stringify({ slip: { advice } }));
    return;
  }

  if (req.url === "/advice/broken") {
    res.writeHead(500);
    res.end(JSON.stringify({ error: "simulated server failure" }));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "not found" }));
});

server.listen(PORT, () => {
  console.log(`Trivial advice server running at http://localhost:${PORT}`);
});
