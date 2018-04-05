---
title: 7 Principles of Rich Web Applications
author: Guillermo Rauch
overview: |
    My approach is to examine the usage of JavaScript exclusively from the lens of user experience (UX). In particular, I put a strong focus on the idea of minimizing the time it takes the user to get the data they are interested in. Starting with networking fundamentals all the way to predicting the future.
link: https://rauchg.com/2014/7-principles-of-rich-web-applications
principles:
- principle: Server rendered pages are not optional
  summary: |
    Server rendering is not about SEO, it’s about performance. Consider the additional roundtrips to get scripts, styles, and subsequent API requests. In the future, consider HTTP 2.0 “pushing” of resources.
- principle: Act immediately on user input
  summary: |
    JavaScript allows us to mask network latency altogether. Applying this as a design principle should even remove most spinners or “loading” messages from your applications. PJAX or TurboLinks miss out on opportunities to improve the perception of speed.
- principle: React to data changes
  summary: |
    When data changes on the server, let the clients know without asking. This is a form of performance improvement that frees the user from manual refresh actions (F5, pull to refresh). New challenges: (re)connection management, state reconciliation.
- principle: Control the data exchange with the server
  summary: |
    We can now fine-tune the data exchange with the server. Make sure to handle errors, retry on behalf of the user, sync data on the background and maintain offline caches.
- principle: Don’t break history, enhance it
  summary: |
    Without the browser managing URLs and history for us, new challenges emerge. Make sure not to break expectations related to scrolling. Keep your own caches for fast feedback.
- principle: Push code updates
  summary: |
    Pushing data without pushing code is insufficient. If your data updates automatically, so should your code. Avoid API errors and improve performance. Use stateless DOM for side-effect free repainting.
- principle: Predict behavior
  summary: |
    Negative latency.
tags: [universal, language]    
---
