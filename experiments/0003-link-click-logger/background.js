// TODO 2 (see Lesson 3, "Wire the background script"):
// Listen for { type: "link-clicked", url } messages from the content
// script. Each time one arrives, read "linksClicked" from storage.sync
// (default 0), increment it, and save it back along with the url under
// "lastUrl".
browser.runtime.onMessage.addListener(async (message) => {
  if (message.type === "link-clicked") {
    console.log("link clicked")
    const { linksClicked = 0 } = await browser.storage.sync.get("linksClicked");
    await browser.storage.sync.set({
      linksClicked: linksClicked + 1,
      lastUrl: message.url,
    });
  }
});
