---
title: ATIS, Automated Tender Intelligence System
titleFa: ایتیس، سامانهٔ هوشمند خودکار مناقصات

summary: Turns a tender notification email into a structured brief, from the alert all the way through the PDFs.
summaryFa: ایمیل اعلان مناقصه را به یک خلاصهٔ ساختارمند تبدیل می‌کند، از خود اعلان تا ته پی‌دی‌اف‌ها.

description: |-
  Built for a client who had to decide, quickly and repeatedly, whether a tender was worth bidding on. The decision was never the slow part. Getting to the facts was.

  This workflow does that part. An email arrives, and what comes back is a brief: what the contract is, what it is worth, how long it runs, what technologies and certifications it demands, and how many people it needs.
descriptionFa: |-
  برای مشتری‌ای ساخته شد که باید سریع و پشت سر هم تصمیم می‌گرفت که آیا یک مناقصه ارزش شرکت کردن دارد یا نه. تصمیم هیچ‌وقت بخش کُند ماجرا نبود. رسیدن به اطلاعات بود.

  این جریان کاری همان بخش را انجام می‌دهد. یک ایمیل می‌رسد، و چیزی که برمی‌گردد یک خلاصه است: قرارداد چیست، چقدر می‌ارزد، چه مدت طول می‌کشد، چه فناوری‌ها و گواهینامه‌هایی می‌خواهد، و چند نفر نیرو لازم دارد.

problem: |-
  A tender alert is a link to a portal, which links to the official procurement site, which links to a set of administrative and technical PDFs. The information that decides whether to bid is buried several documents deep, and it has to be dug out again for every notification that arrives.

  Done by hand, most of the effort is spent on tenders the company was never going to bid on.
problemFa: |-
  اعلان مناقصه یک لینک به یک پورتال است، که به سایت رسمی خرید دولتی لینک می‌دهد، که آن هم به مجموعه‌ای از پی‌دی‌اف‌های اداری و فنی لینک می‌دهد. اطلاعاتی که تصمیم شرکت کردن یا نکردن را می‌سازد، چند سند آن‌طرف‌تر دفن شده، و باید برای هر اعلانی که می‌رسد از نو بیرون کشیده شود.

  وقتی این کار دستی انجام شود، بیشتر وقت صرف مناقصه‌هایی می‌شود که شرکت از اول قرار نبود در آنها شرکت کند.

solution: |-
  The workflow follows the chain the way a person would, but without stopping. It reads incoming mail, pulls out the tender links, opens the portal page, finds the official source link behind it, reaches the procurement site, collects the PDF attachments, downloads them and extracts their text.

  The extracted text then goes to the model with a fixed set of questions, so every tender comes back answering the same fields and two of them can be compared side by side. The structured results are rendered into an HTML and plain text report and mailed out, which means the output lands in the same inbox the input came from.
solutionFa: |-
  جریان کاری همان زنجیره‌ای را دنبال می‌کند که یک آدم دنبال می‌کرد، منتها بدون توقف. ایمیل‌های ورودی را می‌خواند، لینک‌های مناقصه را بیرون می‌کشد، صفحهٔ پورتال را باز می‌کند، لینک منبع رسمی پشتش را پیدا می‌کند، به سایت خرید دولتی می‌رسد، پیوست‌های پی‌دی‌اف را جمع می‌کند، دانلودشان می‌کند و متنشان را استخراج می‌کند.

  متن استخراج‌شده بعد با مجموعه‌ای ثابت از پرسش‌ها به مدل داده می‌شود، پس هر مناقصه با همان فیلدهای یکسان برمی‌گردد و دوتایشان را می‌شود کنار هم گذاشت و مقایسه کرد. نتایج ساختارمند به یک گزارش اچ‌تی‌ام‌ال و متنی تبدیل و ایمیل می‌شوند، یعنی خروجی در همان صندوقی می‌نشیند که ورودی از آن آمده بود.

architecture: n8n workflow. Gmail for input and output, link extraction and scraping through the tender portal to the official procurement site, PDF download and text extraction, GPT-4 for structured analysis, then HTML and text report generation and delivery by mail.
architectureFa: یک جریان کاری در n8n. جی‌میل برای ورودی و خروجی، استخراج لینک و اسکرپینگ از پورتال مناقصه تا سایت رسمی خرید دولتی، دانلود پی‌دی‌اف و استخراج متن، تحلیل ساختارمند با GPT-4، و در نهایت تولید گزارش اچ‌تی‌ام‌ال و متنی و ارسال با ایمیل.

features:
  - Reads tender notifications straight from Gmail
  - Extracts tender links from the message body
  - Follows the portal page through to the official procurement source
  - Collects, downloads and stores the tender PDFs
  - Extracts the text of each document
  - Structured analysis into a fixed set of fields, so tenders stay comparable
  - Captures contract value and duration, required technologies, headcount, required profiles and certifications, and other mandatory requirements
  - Generates an HTML and plain text report
  - Delivers the finished report by email
featuresFa:
  - خواندن اعلان‌های مناقصه مستقیماً از جی‌میل
  - استخراج لینک‌های مناقصه از متن پیام
  - دنبال کردن صفحهٔ پورتال تا رسیدن به منبع رسمی خرید دولتی
  - جمع‌آوری و دانلود و ذخیرهٔ پی‌دی‌اف‌های مناقصه
  - استخراج متن هر سند
  - تحلیل ساختارمند در قالب مجموعه‌ای ثابت از فیلدها، تا مناقصه‌ها قابل مقایسه بمانند
  - ثبت مبلغ و مدت قرارداد، فناوری‌های موردنیاز، تعداد نیرو، پروفایل‌ها و گواهینامه‌های لازم، و سایر الزامات اجباری
  - تولید گزارش اچ‌تی‌ام‌ال و متنی
  - ارسال گزارش نهایی با ایمیل

techStack:
  - n8n
  - OpenAI GPT-4
  - Web Scraping
  - Gmail API
  - PDF Text Extraction

heroImage: /projects/atis-tender-intelligence/hero.webp

published: true
order: 5
---
