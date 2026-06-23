---
name: Expo web app e2e testing limitation
description: Why the Playwright testing harness (runTest) cannot reach Expo web artifacts, and how to verify them instead.
---

# Expo web artifacts and the runTest harness

The `runTest` Playwright harness routes through the shared mTLS proxy and uses
path-based artifact routing. Expo apps bypass that proxy and serve on their own
`*.expo.<...>.replit.dev` dev domain. When `runTest` is pointed at either the
proxy root or the explicit Expo dev domain, it ends up serving a DIFFERENT
artifact (e.g. the sibling web app's landing page) rather than the Expo app — so
e2e tests of Expo web artifacts fail spuriously with "wrong page loaded".

**Why:** the test browser lacks the routing/cert path the `screenshot` tool uses
for Expo dev domains, so it falls back to the wrong artifact.

**How to apply:** Don't rely on `runTest` to validate Expo artifacts. Verify them
with: (1) clean Metro bundle in workflow logs, (2) `pnpm exec tsc --noEmit`,
(3) the `screenshot` tool with `type=app_preview` (it CAN reach the Expo dev
domain). The onboarding/first screen is what renders by default; gated screens
behind AsyncStorage onboarding can't be reached by screenshot alone.
