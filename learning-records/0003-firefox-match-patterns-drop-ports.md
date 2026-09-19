---
name: firefox-match-patterns-drop-ports
description: Discovered (via a real CORS bug in Lesson 4) that Firefox match patterns don't support port numbers, unlike Chrome
metadata:
  type: learning-record
---

# Firefox match patterns silently ignore port numbers

While building `experiments/0004-advice-fetcher`, a `host_permissions` entry of `"http://localhost:8787/*"` did not bypass CORS as expected — Firefox threw "CORS header 'Access-Control-Allow-Origin' missing" even with the entry present and the extension reloaded. Root cause: Firefox's match pattern syntax [doesn't support port numbers](https://bugzil.la/1362809) at all — Chrome does, Firefox doesn't. The pattern must omit the port (`"http://localhost/*"`), which then matches requests to any port on that host.

This is a genuine cross-browser gotcha, not a mistake in the extension code itself (the `fetch`/`background.js` logic was already correct). Worth remembering for any future manifest work involving non-standard ports (dev servers, local APIs) — [[0004-talking-to-external-servers]].

## Implications

- When debugging "host_permissions isn't bypassing CORS" in Firefox, check for a port in the pattern before suspecting anything else.
- Chrome extensions using port-specific match patterns will need adjustment for Firefox compatibility (relevant if shuff or any future extension ever targets both browsers).
