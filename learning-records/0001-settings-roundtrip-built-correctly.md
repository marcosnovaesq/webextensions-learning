---
name: settings-roundtrip-built-correctly
description: User built the full options->storage->background->popup round trip correctly on first pass, with a messaging-vs-direct-storage nuance worth revisiting
metadata:
  type: learning-record
---

# Settings round-trip built correctly on first pass

Correctly implemented the full options → storage → background script → popup round trip in `experiments/0002-settings-roundtrip/` — `runtime.sendMessage`/`onMessage`, `storage.sync.get`/`set`, `runtime.openOptionsPage()`, and (importantly) registered the background listener top-level and synchronously rather than nesting it in a callback. All five `TODO`s filled correctly, matching or improving on the lesson's reveals (used `async`/`await` in the background listener instead of `.then()` chaining — equivalent, just a different idiom). See [[0002-background-permissions-popup-options]].

Messaging, storage, and MV3 event-page lifecycle rules can be treated as solid going forward — no need to re-teach the mechanics, only to build on them.

## A nuance worth revisiting

In the options page, the read (`TODO 4`) went through `runtime.sendMessage({type: "get-greeting"})` to the background script rather than calling `browser.storage.sync.get()` directly, even though the write (`TODO 5`) used `storage.sync.set()` directly. Both work — the round trip is correct — but the read choice suggests a mental model of "the background script owns the data, everyone else asks it," rather than "background, popup, and options pages are all equally privileged extension contexts; messaging exists to reach contexts that *aren't* (namely content scripts)." Worth surfacing explicitly next time messaging or content scripts come up, so the pattern doesn't calcify into habitual unnecessary indirection.
