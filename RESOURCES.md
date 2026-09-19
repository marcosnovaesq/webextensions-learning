# WebExtensions Resources

## Knowledge

- [MDN: Anatomy of a WebExtension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
  The map of every component an extension can have and how they connect through `manifest.json`. Use for: orienting to a new extension codebase, deciding which component a feature belongs in.
- [MDN: What are extensions?](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)
  Conceptual intro, one step before Anatomy in MDN's "Getting started" path. Use for: absolute first-principles framing.
- [MDN: Your first extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
  Walks through building and loading a minimal extension end to end. Use for: the next hands-on step after Anatomy.
- [MDN: Your second extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
  Introduces content scripts and messaging via a slightly bigger example. Use for: the content-script / background-script messaging lesson.
- [MDN: manifest.json reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
  Field-by-field reference for every manifest key. Use for: looking up a specific key (e.g. `background`, `content_scripts`, `permissions`, `web_accessible_resources`).
- [MDN: Background scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)
  MV3 vs MV2 background shapes, persistent vs. non-persistent lifecycle, the "register listeners top-level" and "use storage not globals" rules. Use for: anything background-script lifecycle related.
- [MDN: permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
  API permissions vs. host permissions vs. `activeTab`; how MV3 split host access into `host_permissions`. Use for: deciding what to declare, or debugging a "permission denied" API call.
- [MDN: Popups](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
  `action.default_popup`, popup lifecycle (opens on click, closes on blur, can't be opened programmatically), CSP constraints. Use for: anything popup UI/behavior related.
- [MDN: Options pages](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
  `options_ui` key, `runtime.openOptionsPage()`, typical storage-backed settings pattern. Use for: building or debugging a settings page.
- [MDN: Content scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
  `content_scripts` manifest key, isolated-world DOM/JS split, which APIs are directly available (storage, slices of runtime/i18n) vs. which need messaging, messaging patterns (`sendMessage`/`connect`), `postMessage` to page scripts, restricted domains. Use for: anything that touches a live web page's DOM.
- [MDN: Example extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples)
  Small, real, working extensions demonstrating individual APIs. Use for: finding a worked example close to whatever shuff needs next.
- [Chrome for Developers: Extensions docs](https://developer.chrome.com/docs/extensions/)
  Chrome drives most Manifest V3 changes; useful cross-reference when Firefox and Chrome behavior diverge. Use for: MV3-specific questions (service workers vs. background pages, `action` API).
- [MDN: host_permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)
  The MV3 key for URL-based access; explicitly documents that it grants background/extension-page `fetch`/`XHR` unrestricted cross-origin access, but that this does not extend to content scripts. Use for: anything calling an external API.
- [MDN: Content scripts — XHR and fetch](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#xhr_and_fetch)
  Documents that in MV3 (Firefox 101+ / Chrome 73+), content-script fetches are subject to the same CORS policy as the host page — the privileged, CORS-bypassing behavior only applies to background/extension pages. Use for: deciding where a network call belongs.
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
  General (not extension-specific) guide; covers the fetch() gotcha that the promise only rejects on network failure, never on an HTTP error status — `response.ok` must be checked manually. Use for: writing correct fetch error handling anywhere, extension or not.
- [MDN: Match patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
  Syntax for `host_permissions`/`content_scripts.matches`. Documents that Firefox does not support port numbers in match patterns ([bug 1362809](https://bugzil.la/1362809)) even though Chrome does — a pattern like `http://localhost:8787/*` silently fails to match in Firefox; drop the port (`http://localhost/*`) instead. Use for: any manifest permission targeting a non-standard port (local dev servers), or cross-browser match pattern differences.
- [MDN: identity API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity)
  `getRedirectURL()` / `launchWebAuthFlow()` for OAuth2 against a third-party service. Use for: the point an extension needs to authenticate as a specific user with an external API, not just call a public one.

## Wisdom (Communities)

- [Mozilla Add-ons Discourse forum](https://discourse.mozilla.org/c/add-ons/35)
  Official Mozilla forum for add-on development questions and support; ~1 business day response time. Use for: getting unstuck on a specific Firefox-extension bug or API question.

## Gaps

- No resource yet on `web-ext` CLI usage, even though shuff's `web-ext-config.cjs` implies it's already in use — worth a lesson + reference doc once we get there.
- No resource yet on connection-based messaging (`runtime.connect`/`Port`) or `window.postMessage` to page scripts — Lesson 3 covered one-off `sendMessage` only, by design (kept the lesson scoped to one build).
- OAuth via `identity`/`launchWebAuthFlow()` is only introduced conceptually in Lesson 4, not built hands-on — revisit as its own lesson if a real integration ever needs user-specific auth rather than a public, unauthenticated API.
