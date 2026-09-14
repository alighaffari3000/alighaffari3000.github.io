---
# Template for a new case study. Copy this file and rename it — the filename
# becomes the URL:
#
#   src/content/projects/order-bot.md  ->  /projects/order-bot  and  /fa/projects/order-bot
#
# `published: false` at the bottom is what keeps this one out of the site: it is
# checked against the schema like any other entry, but no page is built for it
# and it never appears in the grid. Set it to true on a real project.
#
# Every field except `title` is optional; a section with no text simply does not
# render. Full field list: src/content.config.ts

title: Project Name
titleFa: نام پروژه

summary: One line shown under the title.
summaryFa: یک خط که زیر عنوان می‌آید.

description: What this project is, in a paragraph.
descriptionFa: این پروژه چیست، در یک پاراگراف.

problem: The problem it solves.
problemFa: مشکلی که حل می‌کند.

solution: How it solves it.
solutionFa: چطور آن را حل می‌کند.

architecture: Nginx -> FastAPI -> Postgres
architectureFa: Nginx ← FastAPI ← Postgres

challenges: The hard part.
challengesFa: بخش سخت کار.

results: What it achieved.
resultsFa: چه نتیجه‌ای داد.

features:
  - First feature
  - Second feature
featuresFa:
  - قابلیت اول
  - قابلیت دوم

# Product names stay Latin in both languages, so there is no techStackFa.
techStack:
  - Python
  - FastAPI
  - PostgreSQL

# Images live in public/ and are referenced from the site root.
# public/projects/order-bot/hero.webp  ->  /projects/order-bot/hero.webp
heroImage: /projects/order-bot/hero.webp
gallery:
  - url: /projects/order-bot/01.webp
    caption: Admin dashboard
    captionFa: داشبورد مدیریت

githubUrl: https://github.com/alighaffari3000/order-bot
demoUrl: https://example.com

# delivered (the default) or in-progress. Drives the badge on the project card.
status: delivered

published: false
order: 1
date: 2026-09-13
---
