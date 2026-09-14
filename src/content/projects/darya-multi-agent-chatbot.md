---
title: Multi-Agent Chatbot for Darya Hotel Construction
titleFa: چت‌بات چندعاملی شرکت هتل‌سازی دریا

summary: An orchestrator and two specialist agents, one grounded in company documents and one that searches the web.
summaryFa: یک ارکستراتور و دو عامل متخصص، یکی متکی بر اسناد شرکت و یکی متکی بر جست‌وجوی وب.

description: |-
  Visitors to a hotel construction company arrive with two unrelated kinds of question. Some want to know what the company does. Others are travellers asking about destinations. One prompt trying to serve both does neither well.

  This backend splits the work: two sub-agents that are each good at one thing, and an orchestrator above them that reads the question, picks the right one, and writes the final answer.
descriptionFa: |-
  بازدیدکنندهٔ سایت یک شرکت هتل‌سازی با دو نوع سؤال بی‌ربط به هم می‌آید. بعضی می‌خواهند بدانند شرکت چه کار می‌کند. بعضی دیگر مسافرانی هستند که دربارهٔ مقصد می‌پرسند. یک پرامپت واحد که بخواهد به هر دو سرویس بدهد، هیچ‌کدام را درست انجام نمی‌دهد.

  این بک‌اند کار را تقسیم می‌کند: دو زیرعامل که هرکدام در یک چیز خوب‌اند، و یک ارکستراتور بالای سرشان که سؤال را می‌خواند، درست را انتخاب می‌کند، و پاسخ نهایی را می‌نویسد.

problem: |-
  The two audiences need opposite things. A question about the company's services has to be answered from the company's own documents and nothing else, because an invented service is worse than no answer. A question about a travel destination has to reach current information from outside, because no internal document covers it.

  Serving both from a single prompt means either the travel answers are thin or the company answers start drifting.
problemFa: |-
  این دو مخاطب دو چیز متضاد لازم دارند. سؤال دربارهٔ خدمات شرکت باید فقط و فقط از اسناد خود شرکت جواب بگیرد، چون خدمتی که وجود ندارد بدتر از بی‌جوابی است. سؤال دربارهٔ مقصد گردشگری باید به اطلاعات به‌روز بیرونی برسد، چون هیچ سند داخلی پوششش نمی‌دهد.

  سرویس دادن به هر دو از یک پرامپت یعنی یا پاسخ‌های گردشگری کم‌مایه می‌شوند یا پاسخ‌های شرکتی شروع به انحراف می‌کنند.

solution: |-
  A services agent answers from a retrieval layer over the company's own knowledge documents. A tourism agent answers through a web search tool. An orchestrator sits above both: it reads the user's message, routes it to whichever sub-agent fits, takes what comes back, and composes the reply the user actually sees.

  The admin panel exists so the conversations are not a black box. It shows who is talking to the bot and what they are asking, collects user feedback for debugging, and keeps an audit log of what the administrators themselves changed.
solutionFa: |-
  عامل خدمات از یک لایهٔ بازیابی روی اسناد دانش خود شرکت جواب می‌دهد. عامل گردشگری از طریق ابزار جست‌وجوی وب جواب می‌دهد. ارکستراتور بالای هر دو می‌نشیند: پیام کاربر را می‌خواند، به زیرعاملی که مناسب است مسیردهی می‌کند، آنچه برمی‌گردد را می‌گیرد، و پاسخی که کاربر واقعاً می‌بیند را می‌نویسد.

  پنل مدیریت برای این هست که مکالمه‌ها جعبهٔ سیاه نمانند. نشان می‌دهد چه کسی با بات حرف می‌زند و چه می‌پرسد، بازخورد کاربران را برای عیب‌یابی جمع می‌کند، و لاگ حسابرسی از تغییرات خود مدیران نگه می‌دارد.

architecture: Orchestrator agent -> two sub-agents. Services agent backed by RAG over indexed knowledge documents, tourism agent backed by a web search tool. Admin panel over the same conversation store.
architectureFa: عامل ارکستراتور و دو زیرعامل زیر آن. عامل خدمات متکی بر بازیابی از اسناد دانش ایندکس‌شده، و عامل گردشگری متکی بر ابزار جست‌وجوی وب. پنل مدیریت روی همان مخزن مکالمه‌ها.

features:
  - Orchestrator that routes each message to the right specialist agent
  - Services agent grounded in the company's own documents through retrieval
  - Tourism agent that reaches current information through web search
  - Final answer composed from the sub-agent's response rather than passed through raw
  - "Knowledge document management: add, edit, delete and index"
  - User list and full conversation history
  - User feedback collection for debugging and correction
  - Administrative audit log
  - Multiple administrators with separate permission levels
featuresFa:
  - ارکستراتوری که هر پیام را به عامل متخصص درست مسیردهی می‌کند
  - عامل خدمات که از طریق بازیابی به اسناد خود شرکت متکی است
  - عامل گردشگری که با جست‌وجوی وب به اطلاعات روز می‌رسد
  - پاسخ نهایی که از جواب زیرعامل جمع‌بندی می‌شود نه اینکه خام رد شود
  - "مدیریت اسناد دانش: افزودن و ویرایش و حذف و ایندکس"
  - لیست کاربران و تاریخچهٔ کامل گفتگوها
  - جمع‌آوری بازخورد کاربران برای عیب‌یابی و اصلاح
  - لاگ حسابرسی عملیات مدیریتی
  - چند مدیر با سطوح دسترسی جداگانه

techStack:
  - Python
  - Multi-Agent Orchestration
  - RAG
  - Web Search Tool

heroImage: /projects/darya-multi-agent-chatbot/hero.webp
gallery:
  - url: /projects/darya-multi-agent-chatbot/01.webp
    caption: Chat interface
    captionFa: رابط گفتگو
  - url: /projects/darya-multi-agent-chatbot/02.webp
    caption: Admin panel
    captionFa: پنل مدیریت
  - url: /projects/darya-multi-agent-chatbot/03.webp
    caption: Knowledge document management
    captionFa: مدیریت اسناد دانش
  - url: /projects/darya-multi-agent-chatbot/04.webp
    caption: Conversation history
    captionFa: تاریخچهٔ گفتگوها

published: true
order: 3
---
