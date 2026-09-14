---
title: Currency, Gold and Crypto Rate Bot
titleFa: بات نرخ ارز و طلا و سکه و رمزارز

summary: Posts currency, gold, coin and crypto rates into a Telegram channel on a schedule, unattended.
summaryFa: نرخ ارز و طلا و سکه و رمزارز را طبق زمان‌بندی و بدون دخالت کسی در کانال تلگرام منتشر می‌کند.

description: |-
  A Telegram bot that publishes rates into a channel it administers. It runs on a schedule and posts at set times through the day: currencies, gold, coins and cryptocurrencies, each update replacing the last as the reference price.
descriptionFa: |-
  باتی تلگرامی که نرخ‌ها را در کانالی که ادمینش است منتشر می‌کند. طبق زمان‌بندی اجرا می‌شود و در ساعت‌های مشخصی از روز پست می‌گذارد: ارز، طلا، سکه و رمزارز، و هر به‌روزرسانی جای قبلی را به‌عنوان قیمت مرجع می‌گیرد.

problem: |-
  A rate channel is only worth following if it is current, and a person posting prices by hand through the day stops being reliable within a week.
problemFa: |-
  کانال نرخ فقط وقتی ارزش دنبال کردن دارد که به‌روز باشد، و آدمی که قرار است در طول روز دستی قیمت بگذارد، ظرف یک هفته از قابل اتکا بودن می‌افتد.

solution: |-
  The bot is added as an administrator of the channel and posts on its own timetable, so the channel stays current without anyone tending it. The times of day are configurable, which is what lets one bot serve channels with different rhythms.
solutionFa: |-
  بات به‌عنوان مدیر به کانال اضافه می‌شود و طبق برنامهٔ زمانی خودش پست می‌گذارد، پس کانال بدون اینکه کسی به آن برسد به‌روز می‌ماند. ساعت‌های انتشار قابل تنظیم است، و همین است که می‌گذارد یک بات به کانال‌هایی با ریتم‌های متفاوت سرویس بدهد.

features:
  - Automatic posting into a channel the bot administers
  - Configurable posting times through the day
  - Currency, gold, coin and cryptocurrency rates in one update
featuresFa:
  - انتشار خودکار در کانالی که بات مدیرش است
  - ساعت‌های انتشار قابل تنظیم در طول روز
  - نرخ ارز و طلا و سکه و رمزارز در یک به‌روزرسانی

techStack:
  - Python
  - Telegram Bot API
  - Scheduled Jobs

heroImage: /projects/currency-rate-bot/hero.webp

published: true
order: 8
---
