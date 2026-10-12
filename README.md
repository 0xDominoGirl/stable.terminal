# Stable Terminal

A chain-focused token research and trading interface built by [0xDominoGirl](https://github.com/0xDominoGirl).

## The project

The private application brings token discovery, charts, trade activity, holder views, watchlists and wallet/portfolio interfaces into a terminal-style workspace.

The frontend is built with React and Vite. Its source includes Lightweight Charts and PixiJS for charting/rendering, and viem for chain interactions. This repository describes the implementation snapshot last pushed to the private repo on 25 August 2026; it does not certify the current deployment or trading readiness.

## One small implementation detail

Prices with many leading zeroes are hard to scan in a dense table. [`lib/price-parts.js`](lib/price-parts.js) contains the terminal's small-price display helper. For example, `0.00003` becomes `{ zeros: 4, digits: "3" }`, which the UI can render as `0.0₄3`.

The helper is extracted unchanged from the private frontend module. The new tests here cover representative small values and the existing invalid-input behavior. It is a display helper for small positive numbers, not financial arithmetic or an arbitrary-precision decimal library; callers choose when to use it. The application uses other formatting for ordinary-sized prices.

```sh
# Node.js 24 or later, no dependencies required
npm test
```

## Scope

This repository contains only this overview, the small formatting helper and its tests. The complete frontend, indexer/API integrations, transaction-building logic, wallet/signing flows, provider configuration, operational notes and private data remain outside this repository.
