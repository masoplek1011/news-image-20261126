[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/masoplek1011/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/masoplek1011/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

# World News in One Image — Thursday 26 November 2026

A single 1024×1024 newspaper front page summing up the world's news for
Thursday 26 November 2026, built as a "Subway Atlas" hybrid: a masthead
banner, three hero story panels, a world-map band with numbered pins, a
horizontal UTC timeline ribbon, a 4×4 grid of secondary stories, and an
honest DATE CHECK footer.

## The three heroes

1. **Trump's new Section 301 tariffs** — +20% on China (up to 40% if talks
   fail), 15% on the EU (up to 20%), plus Japan, India, Indonesia and
   others, on the eve of Thanksgiving (Wed 25 Nov).
2. **Cairo tanker explosion** — a fuel tanker overturned and exploded on
   the Ring Road late Wednesday night, killing 30–31 people (Wed 25 Nov).
3. **Shenzhou-24 launches** — Muhammad Zeeshan Ali, 40, becomes the first
   Pakistani in orbit and the first foreign visitor to China's Tiangong
   space station (Wed 25 Nov).

Thirteen more stories fill the grid — from the Netanyahu Case 4000
recommendation to the Cartagena hostage rescue, the Sudan drone strikes,
and the World Chess Championship draw — each with its true event date.

## Honest dates

Most stories here were first reported on 26 Nov in Asia after happening
late on 25 Nov elsewhere. Nothing is claimed to have happened on 26 Nov
unless its card says so; the footer states the verification plainly.

## How it is built

- `poster.html` — the 1024×1024 front-page layout (no external assets).
- `render.mjs` — renders `poster.html` to `entry.png` with Playwright Chromium.
- `main.ts` — Node 22 stdlib only; deterministic; writes `entry.png` to
  `MAKEFUN_OUTPUT_DIR` (default `/output`).

## Verify

```sh
node render.mjs
mkdir -p out1 out2
MAKEFUN_OUTPUT_DIR=out1 node main.ts
MAKEFUN_OUTPUT_DIR=out2 node main.ts
sha256sum out1/entry.png out2/entry.png   # identical hashes
```
