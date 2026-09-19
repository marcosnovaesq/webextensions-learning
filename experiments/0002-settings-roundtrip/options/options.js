const form = document.getElementById("settings-form");
const input = document.getElementById("greeting");

// TODO 4 (see Lesson 2, "Wire the options page"):
// On load, read the saved "greeting" from browser.storage.sync (default
// to "Hello!") and put it into `input.value`.

document.addEventListener("DOMContentLoaded", async () => {
  const currentGreeting = await browser.runtime.sendMessage({type: 'get-greeting'})
  input.value = currentGreeting
})

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  // TODO 5: save input.value into browser.storage.sync under the
  // "greeting" key.
  await browser.storage.sync.set({ greeting: input.value})
});
