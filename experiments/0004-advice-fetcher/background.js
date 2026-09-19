// TODO 1 (see Lesson 4, "Wire the background script"):
// Listen for a { type: "get-advice" } message. Fetch
// https://api.adviceslip.com/advice, check response.ok before trusting the
// body, parse the JSON, and return the advice text (shape is
// { slip: { advice: "..." } }). If anything goes wrong, throw — a thrown
// error in a message listener becomes a rejected promise for the sender.
//
// Needs "host_permissions": ["https://api.adviceslip.com/*"] in
// manifest.json (TODO 0) — without it this fetch is blocked by CORS.
//
// There's also a trivial local server at server.js (run: node server.js)
// serving the same { slip: { advice } } shape at localhost:8787, with a
// /advice/broken endpoint that always 500s — swap the fetch URL to it to
// test the error path on demand.

browser.runtime.onMessage.addListener(async (message) => {
  if (message.type === "get-advice") {
    const response = await fetch("http://localhost:8787/advice")
    console.log(response)
    if (!response.ok) {
      throw new Error(`Advice API responded with ${response.status}`);
    }
    const data = await response.json();
    console.log(data)
    return data.slip.advice;
  }
});
