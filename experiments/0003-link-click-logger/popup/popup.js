// TODO 3 (see Lesson 3, "Wire the popup"):
// On load, read "linksClicked" and "lastUrl" directly from storage.sync —
// no need to message the background script for this one. The popup is
// just as privileged as the background script; it can read storage itself.
document.addEventListener("DOMContentLoaded", async () => {
  const { linksClicked = 0, lastUrl = "—" } =
    await browser.storage.sync.get(["linksClicked", "lastUrl"]);
  document.getElementById("count").textContent = linksClicked;
  document.getElementById("last-url").textContent = lastUrl;
});
