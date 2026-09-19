# Mission: WebExtensions (Browser Extension Development)

## Why
Build general fluency in how browser extensions work (Firefox + Chrome, Manifest V3) so I can confidently design, build, and debug extensions on my own. This track is anchored by a real in-progress project, **shuff** (`me&dev/shuff/shuff-browser/`), a Firefox extension currently scaffolded with just a `manifest.json` and an empty popup — but the goal here is broad platform fluency, not shipping shuff specifically. shuff is the recurring worked example.

## Success looks like
- Can explain the role of every major `manifest.json` field and WebExtension component (background scripts, content scripts, popup, sidebar, options page, extension pages, web accessible resources, icons) without looking it up
- Can choose the right component for a given feature request (e.g. "should this be a content script or a background script?")
- Can debug a misbehaving extension using the browser's own tooling (`about:debugging` in Firefox, `chrome://extensions` in Chrome)
- Comfortable reading MDN's WebExtensions docs as the primary reference when building something new
- Can look at shuff's `manifest.json` at any point and correctly name what's there and what's missing

## Constraints
- (none stated yet — update as they emerge)

## Out of scope
- Publishing to the Chrome Web Store / AMO and the review process (revisit once something is ready to ship)
- Cross-browser polyfill intricacies (`webextension-polyfill`) until a real cross-browser need arises
