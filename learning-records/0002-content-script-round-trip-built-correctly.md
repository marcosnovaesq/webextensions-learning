---
name: content-script-round-trip-built-correctly
description: User built the full content-script -> background -> storage -> popup round trip correctly on first pass, and resolved the messaging-vs-direct-storage nuance flagged in the previous lesson
metadata:
  type: learning-record
---

# Content script round trip built correctly on first pass

Correctly implemented all four TODOs in `experiments/0003-link-click-logger/`: the `content_scripts` manifest entry (`matches: ["*://*/*"]`, `document_idle`), the content script's click listener using `Element.closest("a")` to handle clicks on nested elements, the background script's message listener incrementing `linksClicked` in `storage.sync`, and the popup reading storage directly. Minor stylistic deviation from the reveal (an added `console.log` in the background listener) — inconsequential.

Content scripts, the direct-access API allowlist (`storage` yes, `tabs`/etc. no), and the isolated-world model can be treated as solid going forward. See [[0003-content-scripts]].

## Nuance from Lesson 2 now resolved

[[0001-settings-roundtrip-built-correctly]] flagged a "background owns the data" mental model, evidenced by routing a storage *read* through messaging even though direct storage access was available. In this lesson, the popup correctly reads `storage.sync` directly rather than messaging the background script — matching the lesson's explicit call-out that popup, background, and options pages are equally privileged. No further reinforcement needed on this point.
