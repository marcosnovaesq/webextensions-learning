// TODO 2 (see Lesson 4, "Wire the popup"):
// On button click, message the background script ({ type: "get-advice" })
// and show the result in #advice. Wrap it in try/catch so a rejected
// promise (the throw in background.js) shows an error message instead of
// leaving the popup stuck on "Loading…".

document.getElementById("get-advice").addEventListener("click", async () => {
  const out = document.getElementById("advice");
  out.textContent = "Loading…";
  try {
    out.textContent = await browser.runtime.sendMessage({ type: "get-advice" });
  } catch (error) {
    out.textContent = `Couldn't fetch advice: ${error.message}`;
  }
});
