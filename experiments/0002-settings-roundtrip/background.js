// TODO 1 (see Lesson 2, "Wire the background script"):
// Register a browser.runtime.onMessage listener, top-level and synchronous
// (event pages must register listeners this way to keep receiving events
// after they've unloaded and reloaded).
//
// When it receives a message shaped like { type: "get-greeting" }, it
// should read the "greeting" key from browser.storage.sync (default to
// "Hello!" if nothing's been saved yet) and return that value — returning
// a Promise from the listener is how you send an async response.

browser.runtime.onMessage.addListener(async (message) => {
  if(message.type == "get-greeting"){
    const { greeting } = await browser.storage.sync.get({ greeting: "Hello!" })
    return greeting
  }
})
