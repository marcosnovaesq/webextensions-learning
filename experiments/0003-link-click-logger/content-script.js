// TODO 1 (see Lesson 3, "Wire the content script"):
// Listen for clicks anywhere on the page. When the clicked element (or one
// of its ancestors) is an <a> tag, send { type: "link-clicked", url } to
// the background script with browser.runtime.sendMessage().
//
// Hint: e.target might be a child of the <a> (an icon or span inside the
// link), not the <a> itself — Element.closest("a") finds the real link.
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;
  browser.runtime.sendMessage({ type: "link-clicked", url: link.href });
});
