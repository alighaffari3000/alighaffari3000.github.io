---
title: AI Hotel Advisor for FreeHotelCard
titleFa: مشاور هوشمند هتل برای FreeHotelCard

summary: A conversational hotel recommender, shipped as an embeddable widget with its own analytics panel.
summaryFa: توصیه‌گر هتل به شکل گفتگو، که به‌صورت ویجت قابل نصب همراه با پنل تحلیل اختصاصی تحویل شده.

description: |-
  A booking filter asks you to already know what you want. This does the opposite: it talks to the traveller, works out what they are actually after, and recommends from there.

  The project ships in three parts that work together: the conversational engine, a widget that drops into any website with a few lines of code, and an admin panel that turns the resulting conversations into something the business can read.
descriptionFa: |-
  فیلتر رزرو از شما می‌خواهد از قبل بدانید چه می‌خواهید. این یکی برعکس عمل می‌کند: با مسافر حرف می‌زند، می‌فهمد واقعاً دنبال چیست، و از همان‌جا پیشنهاد می‌دهد.

  پروژه در سه بخش تحویل شده که با هم کار می‌کنند: موتور گفتگو، ویجتی که با چند خط کد داخل هر سایتی می‌نشیند، و پنل مدیریتی که مکالمه‌های به‌دست‌آمده را به چیزی قابل خواندن برای کسب‌وکار تبدیل می‌کند.

problem: |-
  Traditional hotel search works on fixed filters: city, dates, price range, star rating. That only helps a visitor who has already translated their trip into those boxes. Someone planning a first family holiday, or a work trip with an odd constraint, has no box to type it into, and leaves.
problemFa: |-
  جست‌وجوی سنتی هتل روی فیلترهای ثابت کار می‌کند: شهر، تاریخ، بازهٔ قیمت، تعداد ستاره. این فقط به بازدیدکننده‌ای کمک می‌کند که از قبل سفرش را به همین خانه‌ها ترجمه کرده باشد. کسی که اولین سفر خانوادگی‌اش را برنامه‌ریزی می‌کند، یا سفر کاری با یک محدودیت غیرمعمول دارد، خانه‌ای برای تایپ کردنش پیدا نمی‌کند و سایت را ترک می‌کند.

solution: |-
  The assistant asks targeted questions instead of presenting a form, and builds a picture of the trip as the conversation goes: budget, trip type, who is travelling, which amenities are non-negotiable. It detects the visitor's language and answers in it, which matters for an audience that is not all Persian-speaking.

  Sessions are stored, so a visitor who comes back continues rather than starting over, and the same stored conversations become the analytics layer: what people keep asking, where the knowledge base falls short, which topics repeat.
solutionFa: |-
  دستیار به‌جای نمایش فرم، سؤال‌های هدفمند می‌پرسد و در طول گفتگو تصویری از سفر می‌سازد: بودجه، نوع سفر، همراهان، و امکاناتی که غیرقابل‌مذاکره‌اند. زبان بازدیدکننده را تشخیص می‌دهد و به همان زبان جواب می‌دهد، که برای مخاطبی که همه‌اش فارسی‌زبان نیست اهمیت دارد.

  جلسه‌ها ذخیره می‌شوند، پس بازدیدکننده‌ای که برمی‌گردد ادامه می‌دهد نه اینکه از صفر شروع کند، و همان مکالمه‌های ذخیره‌شده لایهٔ تحلیل را می‌سازند: مردم مدام چه می‌پرسند، پایگاه دانش کجا کم می‌آورد، کدام موضوع‌ها تکرار می‌شوند.

architecture: JavaScript widget -> FastAPI backend -> PostgreSQL via SQLAlchemy, with Gemini as the model. Behind Nginx as a reverse proxy on an Ubuntu VPS, over HTTPS.
architectureFa: ویجت جاوااسکریپتی، سپس بک‌اند FastAPI، سپس PostgreSQL از طریق SQLAlchemy، با Gemini به‌عنوان مدل. پشت Nginx به‌عنوان ریورس پروکسی روی وی‌پی‌اس اوبونتو و روی اچ‌تی‌تی‌پی‌اس.

results: Deployed to production with a scalable architecture, an installable widget that needs no redevelopment per site, and a dedicated panel for reading and improving what the assistant says.
resultsFa: روی محیط عملیاتی مستقر شده، با معماری مقیاس‌پذیر، ویجتی که برای هر سایت نیازی به بازنویسی ندارد، و پنلی اختصاصی برای خواندن و بهبود چیزی که دستیار می‌گوید.

features:
  - Interactive conversation that identifies needs instead of presenting filters
  - Personalised recommendations by budget, trip type and required amenities
  - Language detection with answers in the visitor's own language
  - Session storage, so a returning visitor continues the same conversation
  - Embeddable widget, installed with a few lines of code
  - Responsive widget UI with customisable appearance and branding
  - Admin dashboard with user counts, session counts and daily activity
  - User management with search and filtering, and access to each user's history
  - Full conversation browser with global search across messages
  - Analysis view for recurring questions and gaps in the knowledge base
featuresFa:
  - گفتگوی تعاملی که نیاز کاربر را کشف می‌کند به‌جای نمایش فیلتر
  - پیشنهاد شخصی‌سازی‌شده بر اساس بودجه و نوع سفر و امکانات موردنیاز
  - تشخیص زبان و پاسخ به همان زبان بازدیدکننده
  - ذخیرهٔ جلسه، پس بازدیدکنندهٔ بازگشته همان گفتگو را ادامه می‌دهد
  - ویجت قابل نصب با چند خط کد
  - رابط واکنش‌گرای ویجت با ظاهر و برندینگ قابل سفارشی‌سازی
  - داشبورد مدیریت با آمار کاربران و جلسه‌ها و فعالیت روزانه
  - مدیریت کاربران با جست‌وجو و فیلتر، و دسترسی به سوابق هر کاربر
  - مرورگر کامل مکالمه‌ها با جست‌وجوی سراسری در پیام‌ها
  - نمای تحلیل برای سؤالات پرتکرار و نقاط ضعف پایگاه دانش

techStack:
  - JavaScript
  - FastAPI
  - PostgreSQL
  - SQLAlchemy
  - Gemini API
  - Nginx
  - Ubuntu VPS

heroImage: /projects/ai-hotel-advisor/hero.webp
gallery:
  - url: /projects/ai-hotel-advisor/01.webp
    caption: Chat widget in a page
    captionFa: ویجت گفتگو داخل صفحه
  - url: /projects/ai-hotel-advisor/02.webp
    caption: Recommendation flow
    captionFa: جریان ارائهٔ پیشنهاد
  - url: /projects/ai-hotel-advisor/03.webp
    caption: Admin dashboard
    captionFa: داشبورد مدیریت
  - url: /projects/ai-hotel-advisor/04.webp
    caption: Conversation browser
    captionFa: مرورگر مکالمه‌ها

published: true
order: 2
---
