---
title: Mr Javab, an AI Study Assistant on Telegram
titleFa: مستر جواب، دستیار درسی هوشمند در تلگرام

summary: A Telegram bot that answers homework questions, plots the diagram, and lets students ask their own textbook.
summaryFa: باتی تلگرامی که به سؤال درسی جواب می‌دهد، نمودارش را رسم می‌کند، و می‌گذارد دانش‌آموز از کتاب خودش سؤال بپرسد.

description: |-
  A study assistant that lives where students already are. They send a question as text or a photo of the page, and get an answer back, with the diagram drawn when the question needs one.

  Beyond answering, it does the things a student actually asks for next: explain it again more slowly, show the steps, give me a similar question to practise on, summarise this chapter, pull out the key points.
descriptionFa: |-
  دستیار درسی‌ای که همان‌جایی زندگی می‌کند که دانش‌آموزها هستند. سؤال را به‌صورت متن یا عکس صفحه می‌فرستند و جواب می‌گیرند، و اگر سؤال نمودار لازم داشته باشد، نمودارش هم رسم می‌شود.

  فراتر از جواب دادن، کارهایی را انجام می‌دهد که دانش‌آموز واقعاً بعدش می‌خواهد: دوباره و آرام‌تر توضیح بده، مراحل حل را نشان بده، یک سؤال مشابه بده تمرین کنم، این فصل را خلاصه کن، نکته‌های کلیدی را دربیاور.

problem: |-
  A student stuck on a question at eleven at night has two options: an answer with no working, or waiting until tomorrow. Neither teaches them anything. And a general-purpose chatbot does not know which textbook they are holding.
problemFa: |-
  دانش‌آموزی که ساعت یازده شب پشت یک سؤال گیر کرده دو گزینه دارد: جوابی بدون راه‌حل، یا صبر کردن تا فردا. هیچ‌کدام چیزی یادش نمی‌دهد. و یک چت‌بات عمومی هم نمی‌داند کتاب دستِ او کدام است.

solution: |-
  Questions arrive as PDF, JPG or PNG as well as text, so a photo of the page is enough and nothing has to be retyped. Answers can be expanded into a step by step walkthrough rather than a final number.

  The part that closes the textbook gap is chat with file: the student uploads their own book and asks questions against it, so summaries, key points and practice questions come from the material they are actually being examined on.
solutionFa: |-
  سؤال علاوه بر متن، به شکل پی‌دی‌اف و جی‌پی‌جی و پی‌ان‌جی هم می‌رسد، پس یک عکس از صفحه کافی است و چیزی لازم نیست دوباره تایپ شود. پاسخ می‌تواند به‌جای یک عدد نهایی، به تشریح گام‌به‌گام مراحل حل باز شود.

  چیزی که فاصله با کتاب درسی را پر می‌کند، گفتگو با فایل است: دانش‌آموز کتاب خودش را بارگذاری می‌کند و از همان سؤال می‌پرسد، پس خلاصه و نکات کلیدی و سؤال تمرینی از همان منبعی می‌آید که قرار است از رویش امتحان بدهد.

features:
  - Answers study questions across subjects, for school and university level
  - Plots the diagram when a question calls for one
  - "Chat with file: upload a textbook and ask questions against it"
  - Generates similar practice questions
  - Summarises, both briefly and at length
  - Extracts key points
  - Step by step walkthrough of how an answer was reached
  - Accepts PDF, JPG and PNG as well as text
featuresFa:
  - پاسخ به سؤال درسی در رشته‌های مختلف، در سطح مدرسه و دانشگاه
  - رسم نمودار وقتی سؤال به نمودار نیاز دارد
  - "گفتگو با فایل: کتاب را بارگذاری کنید و از خودش سؤال بپرسید"
  - تولید سؤال تمرینی مشابه
  - خلاصه‌سازی، هم مختصر و هم مفصل
  - استخراج نکات کلیدی
  - تشریح گام‌به‌گام مسیر رسیدن به جواب
  - پشتیبانی از پی‌دی‌اف و جی‌پی‌جی و پی‌ان‌جی در کنار متن

techStack:
  - Python
  - Telegram Bot API
  - Document Q&A
  - Vision Input
  - Chart Rendering

heroImage: /projects/mr-javab-study-bot/hero.webp
gallery:
  - url: /projects/mr-javab-study-bot/01.webp
    caption: Answering a question in chat
    captionFa: پاسخ به یک سؤال در گفتگو
  - url: /projects/mr-javab-study-bot/02.webp
    caption: Bot menu
    captionFa: منوی بات
  - url: /projects/mr-javab-study-bot/03.webp
    caption: Step by step walkthrough
    captionFa: تشریح گام‌به‌گام
  - url: /projects/mr-javab-study-bot/04.webp
    caption: Chat with an uploaded book
    captionFa: گفتگو با کتاب بارگذاری‌شده

published: true
order: 4
---
