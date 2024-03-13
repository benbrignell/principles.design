---
title: AMP Design Principles
author: AMP Project
overview: |
  These design principles are meant to guide the ongoing design and development of AMP. They should help us make internally consistent decisions.
link: https://www.ampproject.org/learn/amp-design-principles/
principles:
- principle: User Experience > Developer Experience > Ease of Implementation.
  summary: |
    When in doubt, do what’s best for the end user experience, even if it means that it’s harder for the page creator to build or for the library developer to implement.
- principle: Don’t design for a hypothetical faster future browser.
  summary: |
    We’ve chosen to build AMP as a library in the spirit of the [EXTENSIBLE WEB MANIFESTO](https://github.com/extensibleweb/manifesto/blob/master/README.md) to be able to fix the web of today, not the web of tomorrow. AMP should be fast in today's browsers. When certain optimizations aren't possible with today's platform, AMP developers should participate in standards development to get these added to the web platform.
- principle: Don’t break the web.
  summary: |
    Ensure that if AMP has outages or problems it doesn’t hurt the rest of the web. That means if the Google AMP Cache, the URL API or the library fails it should be possible for websites and consumption apps to gracefully degrade. If something works with an AMP cache it should also work without a cache.
- principle: Solve problems on the right layer.
  summary: |
    E.g. don’t integrate things on the client side, just because that is easier, when the user experience would be better with a server side integration.
- principle: Only do things if they can be made fast.
  summary: |
    Don’t introduce components or features to AMP that can’t reliably run at 60fps or hinder the instant load experience on today’s most common mobile devices.
- principle: Prioritise things that improve the user experience – but compromise when needed.
  summary: |
    Some things can be made fast and are still a terrible user experience. AMPs should deliver a fantastic user experience and speed is just one part of that. Only compromise when lack of support for something would stop AMP from being widely used and deployed.
- principle: No whitelists.
  summary: |
    We won’t give any special treatment to specific sites, domains or origins except where needed for security or performance reasons.
tags: [specific, software, organisations]
---
