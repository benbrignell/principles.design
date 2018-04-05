---
title: Front-End Principles for Designers
author: Jon Yablonski
overview: |
    Designers that code is becoming increasing common in the web community; and while not a requirement, this skill can have an substantial effect on the quality of the designer’s work. Is that to say that a designer must know how to code to create great digital experiences? This mind set is dogmatic and fails to ask the right question, which is what principles do designers need to understand to create better designs?
link: https://jonyablonski.com/2015/front-end-principles-for-designers/
principles:
- principle: Let Go of Control
  summary: |
    It is the nature of the web to be flexible, and with this flexibility comes a degree of letting go of control. The first step in this process is to leave behind the idea of pixel perfection: our medium is fluid and our decisions must be made with this in mind. It is absurd to design comps in Photoshop and then print them out in all their pixel-perfect detail in order to critique or present them as if they were posters.

- principle: Avoid Too Much Variation
  summary: |
    Variations of elements can grow during the design process, particularly with things like color, type sizes, and spacing. When there is too much variation, the CSS can become bloated with edge-case styling that results in a file that is difficult for the developer to author and maintain. This problem can be amplified on a larger project and result in a negative impact on page performance. The solution is simple: audit your design and ensure that variations are kept to a minimum by distilling them down to a few common values.

- principle: Keep Performance in Mind
  summary: |
    Performance is an essential design feature, not just a technical best practice. It is imperative to make performance part of your design workflow from the beginning and not an afterthought. There are lots of things designers can do to design for performance, including setting a performance budget, embracing conditional loading, eliminating unnecessary downloads, using SVG in place of raster graphics, optimizing images and encouraging your development team to adopt a responsive image strategy. By prioritizing performance and educating others on your team, you ensure that the end result is not hampered by a slow experience.

- principle: Understand Source Order
  summary: |
    Source order refers to the order in which elements are displayed on the page based on where they appear in the HTML. Elements will display from top to bottom and left to right by default — their width being determined by their display property. While it is easy to position elements outside the flow of the document with CSS, changing the order in which elements appear inside the flow of the document is a bit more difficult and has some limitations. The natural source order should guide you when thinking about how your design will adapt to various viewport widths. If you need to change this, be selective and have a good reason.

- principle: Know Your Numbers
  summary: |
    It can be quite frustrating to see a project in production with elements not appearing as you intended. From type sizes and general spacing to grid values, your design is full of numbers that you should be intimately aware of. If your development team is using a framework, then you should know the default values of this framework’s styles and the options available when changing them. If your project is platform specific, then you should be an expert on that platform’s DPI and other specs. By knowing your numbers, you can speak more knowledgeably when communicating these details to your development team.

- principle: Let Content Determine Breakpoints
  summary: |
    Determining breakpoints based on popular device dimensions or common screen resolutions is like building a house on a sandbar: the landscape is always changing and making decisions on what’s there today is inherently flawed. It makes much more sense to let content determine breakpoints instead of basing these values on a few devices or resolutions that are relevant today.

- principle: Maintain Consistency
  summary: |
    Consistency is the key when creating an environment that is easy for users. It will ensure that there is a common design language, which makes development easier because there are fewer edge cases that the developer must account for. It is important to always audit your designs for consistency and to reduce one-off solutions whenever possible.

- principle: Communicate Early and Often
  summary: |
    The most important principle when working with developers is to communicate early and often. Being proactive and finding out what they need, including them in on design decisions, and taking into consideration any technical restraints they point out is essential for a successful collaboration. Remember: the development team shares the same goal in that they want the best possible experience for the user.

tags: [universal]
---
