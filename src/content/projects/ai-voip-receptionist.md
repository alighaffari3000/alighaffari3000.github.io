---
title: AI Voice Receptionist on a VoIP Line
titleFa: منشی تلفنی هوشمند روی خط ووآی‌پی

summary: A Persian-speaking voice agent that answers real phone calls in real time, with a full operations panel behind it.
summaryFa: عاملی صوتی که زنده و به فارسی به تماس‌های واقعی تلفن جواب می‌دهد، با یک پنل عملیاتی کامل پشت آن.

description: |-
  A voice agent that connects a real phone line to a live language model. Calls arrive over VoIP through Asterisk, stream to Gemini Live, and come back as natural spoken Persian, turn after turn, while the caller is still on the line.

  The whole path is built and running on real infrastructure: answering, holding a conversation, handing off to a human, recording, billing, and everything an operator needs to watch it work. It has been tested on real calls, not on a simulator.
descriptionFa: |-
  عاملی صوتی که یک خط تلفن واقعی را به یک مدل زبانی زنده وصل می‌کند. تماس از طریق ووآی‌پی و Asterisk می‌رسد، به Gemini Live استریم می‌شود، و نوبت به نوبت به فارسی طبیعی برمی‌گردد، آن هم وقتی تماس‌گیرنده هنوز پشت خط است.

  کل این مسیر روی زیرساخت واقعی ساخته شده و کار می‌کند: پاسخ‌گویی، ادامهٔ مکالمه، تحویل تماس به اپراتور انسانی، ضبط، محاسبهٔ هزینه، و هر چیزی که یک اپراتور برای پایش سیستم لازم دارد. روی تماس‌های واقعی آزموده شده، نه روی شبیه‌ساز.

problem: |-
  A phone line is the least forgiving place to put a language model. The caller cannot see a typing indicator, so any pause reads as a dead line. They interrupt mid-sentence. They call outside business hours. They call back a week later and expect to be remembered. And the model behind it can simply stop responding, on a network that blocks it by default.

  A receptionist that handles only the happy path is not a receptionist. Every one of those cases had to have an answer that a caller would accept.
problemFa: |-
  خط تلفن نابخشوده‌ترین جایی است که می‌شود یک مدل زبانی را گذاشت. تماس‌گیرنده نشانگر «در حال تایپ» نمی‌بیند، پس هر مکثی برایش یعنی قطعی خط. وسط جمله حرف را قطع می‌کند. خارج از ساعت کاری زنگ می‌زند. یک هفته بعد دوباره تماس می‌گیرد و انتظار دارد به‌خاطر آورده شود. و مدلی که پشت این سیستم است ممکن است اصلاً جواب ندهد، روی شبکه‌ای که به‌صورت پیش‌فرض مسدودش کرده.

  منشی‌ای که فقط مسیر خوش‌بینانه را مدیریت کند، منشی نیست. برای تک‌تک این حالت‌ها باید پاسخی وجود می‌داشت که تماس‌گیرنده بپذیرد.

solution: |-
  The agent opens the conversation itself rather than waiting on silence, and handles barge-in: when the caller talks over it, it stops and listens. Long-term memory is keyed to the phone number, so a returning caller is picked up where they left off. A retrieval layer indexes the business's own documents and feeds the relevant part into the prompt, so answers come from the company rather than from the model's general knowledge.

  Working hours are configurable down to weekday ranges, holiday exceptions and after-hours behaviour, and the handoff to a human accounts for the operator being busy or not picking up. When the model itself goes down, the caller hears a Persian message and is offered a transfer rather than silence. Every call is summarised and structured after it ends, and priced against actual token usage.
solutionFa: |-
  عامل خودش مکالمه را شروع می‌کند به‌جای اینکه منتظر سکوت بماند، و قطع صحبت را مدیریت می‌کند: وقتی تماس‌گیرنده رویش حرف می‌زند، ساکت می‌شود و گوش می‌دهد. حافظهٔ بلندمدت به شمارهٔ تلفن گره خورده، پس تماس‌گیرندهٔ تکراری از همان‌جایی که رها کرده ادامه می‌دهد. یک لایهٔ بازیابی، اسناد خود کسب‌وکار را ایندکس می‌کند و بخش مرتبط را به پرامپت تزریق می‌کند، پس پاسخ‌ها از شرکت می‌آیند نه از دانش عمومی مدل.

  ساعات کاری تا سطح بازه‌های روزهای هفته، استثناهای تعطیلات و رفتار خارج از ساعت کاری قابل تنظیم است، و انتقال به اپراتور انسانی حالت اشغال بودن یا جواب ندادن او را هم در نظر می‌گیرد. وقتی خود مدل از دسترس خارج می‌شود، تماس‌گیرنده یک پیام فارسی می‌شنود و پیشنهاد انتقال می‌گیرد، نه سکوت. هر تماس بعد از پایان خلاصه و ساختارمند می‌شود، و بر اساس مصرف واقعی توکن قیمت می‌خورد.

architecture: Asterisk (VoIP/SIP) -> audio bridge -> Gemini Live -> RAG over indexed documents. Admin panel on FastAPI and Next.js. Runs as a set of systemd services with daily timers for cleanup and backup, git-based deploys, and secrets kept out of the repository.
architectureFa: Asterisk روی ووآی‌پی و سیپ، سپس پل صوتی، سپس Gemini Live، به‌همراه بازیابی از اسناد ایندکس‌شده. پنل مدیریت روی FastAPI و Next.js. اجرا به‌صورت مجموعه‌ای از سرویس‌های systemd با تایمرهای روزانه برای پاک‌سازی و پشتیبان‌گیری، دیپلوی مبتنی بر گیت، و جداسازی کامل اطلاعات حساس از مخزن کد.

challenges: |-
  Three things made this harder than a text chatbot.

  Phone audio is bad on purpose: it is narrowband and compressed. To find out how much that costs in accuracy, the project generates its own test audio, simulates telephone-grade degradation on it, and scores the result on things that actually matter, such as whether a phone number, a full name and a reason for calling came through correctly.

  The model provider is blocked on the network the system runs on, so proxy support is not an add-on, it is part of the call path, with connection tests and latency measurement built into the operational tooling.

  And an unattended phone line needs to say when it is unwell. A Telegram alerting path covers service outages, SIP trunk deregistration, disk pressure and error spikes, alongside business events such as an urgent call that nobody answered. A watchdog keeps the trunk registered.
challengesFa: |-
  سه چیز این کار را از یک چت‌بات متنی سخت‌تر کرد.

  صدای تلفن عمداً بد است: باند باریک و فشرده. برای اینکه معلوم شود این موضوع چقدر از دقت کم می‌کند، پروژه خودش دیتاست صوتی آزمایشی تولید می‌کند، افت کیفیت در حد تلفن را رویش شبیه‌سازی می‌کند، و نتیجه را روی چیزهایی می‌سنجد که واقعاً مهم‌اند، مثل اینکه شمارهٔ تلفن و نام کامل و دلیل تماس درست منتقل شده‌اند یا نه.

  ارائه‌دهندهٔ مدل روی شبکه‌ای که سیستم رویش اجرا می‌شود مسدود است، پس پشتیبانی از پروکسی یک افزودنی نیست بلکه بخشی از مسیر تماس است، با تست اتصال و سنجش تأخیر که داخل ابزار عملیاتی تعبیه شده.

  و یک خط تلفن بدون متصدی باید بتواند بگوید حالش خوب نیست. یک مسیر هشدار روی تلگرام قطعی سرویس، لغو ثبت ترانک سیپ، کمبود فضای دیسک و افزایش خطا را پوشش می‌دهد، در کنار رویدادهای کسب‌وکاری مثل تماس فوری‌ای که کسی جوابش را نداده. یک واچ‌داگ هم ثبت ترانک را زنده نگه می‌دارد.

results: Built and running on real infrastructure end to end, from receiving the call to answering it to managing it, and validated on real phone calls rather than a simulator.
resultsFa: سرتاسر مسیر، از دریافت تماس تا پاسخ‌گویی و مدیریت، روی زیرساخت واقعی ساخته شده و کار می‌کند، و اعتبارسنجی آن روی تماس‌های تلفنی واقعی انجام شده نه روی شبیه‌ساز.

features:
  - Live multi-turn Persian conversation, opened by the agent
  - Barge-in handling when the caller interrupts
  - Handoff to a human operator, with working hours, holiday exceptions and busy or no-answer handling
  - Long-term per-caller memory keyed to the phone number
  - Retrieval over the company's own indexed documents
  - Structured summary and extraction after every call
  - Graceful degradation when the model provider is down, in spoken Persian
  - Proxy support for networks that block the provider
  - Browser and microphone test tool with revocable temporary links
  - Stereo call recording, separate channels for caller and agent, with configurable retention
  - Per-call cost from actual token usage
  - "Admin panel: dashboard, call list and detail, live monitoring of calls in progress"
  - Prompt editor, model selection and eight AI voices
  - Knowledge base management and document indexing
  - Working hours editor with date exceptions
  - Live settings changes that do not drop calls in progress
  - Database backup and restore, system resource monitoring, SIP registration status, log viewer, global search
featuresFa:
  - گفتگوی زندهٔ چندنوبتی به فارسی، با شروع خودکار توسط عامل
  - مدیریت قطع صحبت وقتی تماس‌گیرنده وسط حرف عامل می‌پرد
  - انتقال به اپراتور انسانی، با ساعات کاری و استثناهای تعطیلات و مدیریت حالت اشغال یا بی‌پاسخ
  - حافظهٔ بلندمدت برای هر تماس‌گیرنده بر اساس شمارهٔ تلفن
  - بازیابی از اسناد ایندکس‌شدهٔ خود شرکت
  - خلاصه و استخراج ساختارمند پس از هر تماس
  - افت مهارشدهٔ سرویس با پیام صوتی فارسی وقتی ارائه‌دهندهٔ مدل از دسترس خارج می‌شود
  - پشتیبانی از پروکسی برای شبکه‌هایی که ارائه‌دهنده را مسدود کرده‌اند
  - ابزار تست با مرورگر و میکروفون، با لینک‌های موقت و قابل ابطال
  - ضبط استریوی تماس با کانال جدا برای تماس‌گیرنده و عامل، با نگه‌داری قابل تنظیم
  - هزینهٔ هر تماس بر اساس مصرف واقعی توکن
  - "پنل مدیریت: داشبورد، لیست و جزئیات تماس‌ها، پایش زندهٔ تماس‌های در جریان"
  - ویرایشگر پرامپت، انتخاب مدل و هشت صدای مختلف
  - مدیریت پایگاه دانش و ایندکس اسناد
  - ویرایشگر ساعات کاری با استثناهای تاریخی
  - اعمال زندهٔ تنظیمات بدون قطع تماس‌های جاری
  - پشتیبان‌گیری و بازیابی دیتابیس، پایش منابع، وضعیت ثبت سیپ، نمایشگر لاگ، جست‌وجوی سراسری

techStack:
  - Python
  - Asterisk
  - VoIP / SIP
  - Gemini Live API
  - FastAPI
  - Next.js
  - RAG
  - systemd
  - Telegram Bot API

heroImage: /projects/ai-voip-receptionist/hero.webp
gallery:
  - url: /projects/ai-voip-receptionist/01.webp
    caption: Admin dashboard
    captionFa: داشبورد مدیریت
  - url: /projects/ai-voip-receptionist/02.webp
    caption: Call list and detail
    captionFa: لیست و جزئیات تماس‌ها
  - url: /projects/ai-voip-receptionist/03.webp
    caption: Live monitoring of calls in progress
    captionFa: پایش زندهٔ تماس‌های در جریان
  - url: /projects/ai-voip-receptionist/04.webp
    caption: Prompt, model and voice settings
    captionFa: تنظیمات پرامپت و مدل و صدا

published: true
order: 1
---
