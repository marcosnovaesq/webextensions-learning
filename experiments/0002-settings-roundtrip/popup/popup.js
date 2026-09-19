// TODO 2 (see Lesson 2, "Wire the popup"):
// On load, send { type: "get-greeting" } to the background script with
// browser.runtime.sendMessage(), await the response, and put it into
// the #greeting element's text.
browser.runtime.sendMessage( { type: 'get-greeting'}).then((answer) => {
  document.getElementById("greeting").textContent = answer
})

document.getElementById("open-options").addEventListener("click", () => {
  // TODO 3: open the options page programmatically. There's a one-line
  // API for this — you don't need to know its URL.
  browser.runtime.openOptionsPage()
});
