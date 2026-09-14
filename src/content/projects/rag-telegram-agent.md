---
title: RAG Agent on Telegram
titleFa: عامل هوشمند تلگرام با حافظهٔ بازیابی

summary: A Telegram agent that answers from your own company data and can act on your tools, not just talk about them.
summaryFa: عاملی تلگرامی که از دادهٔ خود شرکت شما جواب می‌دهد و می‌تواند روی ابزارهایتان کار انجام دهد، نه فقط دربارهٔ آنها حرف بزند.

description: |-
  A retrieval-augmented agent, built on n8n, that sits in Telegram and answers from a company's own material rather than from general knowledge.

  Two things separate it from a chatbot with a knowledge base. It looks answers up in a vector database, so the reply is tied to a document that actually exists. And it can act: it connects to the tools the business already runs and carries out tasks in them.
descriptionFa: |-
  عاملی با حافظهٔ بازیابی که روی n8n ساخته شده، در تلگرام می‌نشیند، و به‌جای دانش عمومی از منابع خود شرکت جواب می‌دهد.

  دو چیز آن را از یک چت‌بات با پایگاه دانش جدا می‌کند. جواب را در یک پایگاه دادهٔ وکتور پیدا می‌کند، پس پاسخ به سندی گره خورده که واقعاً وجود دارد. و می‌تواند کار انجام دهد: به ابزارهایی که کسب‌وکار همین الان استفاده می‌کند وصل می‌شود و در آنها وظیفه اجرا می‌کند.

problem: |-
  Internal knowledge is spread across documents nobody rereads, and the people who need it ask a colleague instead. A general model cannot answer those questions at all, and a model that guesses at them is worse than silence.
problemFa: |-
  دانش داخلی در اسنادی پخش است که کسی دوباره نمی‌خواندشان، و کسانی که لازمش دارند به‌جای مراجعه به سند از همکارشان می‌پرسند. یک مدل عمومی اصلاً نمی‌تواند به این سؤال‌ها جواب بدهد، و مدلی که حدس بزند از سکوت بدتر است.

solution: |-
  Company documents are loaded and indexed into a vector store. When a question arrives, the agent retrieves the relevant passages first and answers from them, which keeps the reply anchored to real material.

  On top of that it is wired into the business's existing tools: a data layer such as Airtable for records, and CRM or automation systems where it can schedule and run tasks. It is built to be adapted to a specific business rather than deployed as-is, and it answers in seconds, which is what makes it usable as a daily assistant rather than a demo.
solutionFa: |-
  اسناد شرکت بارگذاری و در یک پایگاه وکتور ایندکس می‌شوند. وقتی سؤالی می‌رسد، عامل اول بخش‌های مرتبط را بازیابی می‌کند و از روی همان‌ها جواب می‌دهد، که پاسخ را به منبع واقعی لنگر می‌اندازد.

  علاوه بر این، به ابزارهای موجود کسب‌وکار وصل است: یک لایهٔ داده مثل Airtable برای رکوردها، و سیستم‌های مدیریت ارتباط با مشتری یا اتوماسیون که می‌تواند در آنها وظیفه زمان‌بندی و اجرا کند. طوری ساخته شده که برای یک کسب‌وکار مشخص تنظیم شود نه اینکه همان‌طور که هست مستقر شود، و در عرض چند ثانیه جواب می‌دهد، که همان چیزی است که از آن یک دستیار روزمره می‌سازد نه یک دمو.

architecture: n8n workflow with a Telegram front end. Retrieval over a vector database such as Pinecone, records in Airtable, and connections out to CRM, automation and project management tools.
architectureFa: جریان کاری n8n با تلگرام به‌عنوان رابط کاربری. بازیابی از یک پایگاه دادهٔ وکتور مثل Pinecone، رکوردها در Airtable، و اتصال به ابزارهای مدیریت ارتباط با مشتری و اتوماسیون و مدیریت پروژه.

features:
  - Answers from company data, retrieved from a vector database
  - Loads and processes internal documents into the knowledge base
  - Connects to Airtable for business records
  - Schedules and runs tasks in CRM and automation tools
  - Built to be adapted per business rather than deployed unchanged
  - Integrates with databases, automation systems and project management tools
  - Answers within seconds, fast enough for daily use
featuresFa:
  - پاسخ از دادهٔ شرکت، با بازیابی از پایگاه دادهٔ وکتور
  - بارگذاری و پردازش اسناد داخلی داخل پایگاه دانش
  - اتصال به Airtable برای رکوردهای کسب‌وکار
  - زمان‌بندی و اجرای وظایف در ابزارهای مدیریت ارتباط با مشتری و اتوماسیون
  - ساخته‌شده برای تنظیم شدن به‌ازای هر کسب‌وکار، نه استقرار بدون تغییر
  - یکپارچگی با پایگاه‌های داده و سیستم‌های اتوماسیون و ابزارهای مدیریت پروژه
  - پاسخ در عرض چند ثانیه، به‌اندازهٔ کافی سریع برای استفادهٔ روزمره

techStack:
  - n8n
  - Pinecone
  - Airtable
  - RAG
  - Telegram Bot API

heroImage: /projects/rag-telegram-agent/hero.webp
gallery:
  - url: /projects/rag-telegram-agent/01.webp
    caption: The agent answering in Telegram
    captionFa: پاسخ‌گویی عامل در تلگرام

published: true
order: 6
---
