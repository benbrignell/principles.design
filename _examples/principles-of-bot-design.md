---
title: Principles of Bot Design
author: Intercom
overview:
link: https://blog.intercom.com/principles-bot-design/
principles:
- principle: Don’t pretend to be a human
  summary: |
    Playing bait-and-switch with a user can make them feel that they have been duped, or that they don’t understand how a system works; both are bad user experiences. Don’t pull the rug out from under your users. This means not using “is-typing” indicators or artificial delays to make it seem more human. On the contrary, bot messages should be styled differently and be clearly labeled in a way that communicates they are not human. This doesn’t preclude us from giving the bot personality.
- principle: Keep it incredibly simple
  summary: |
    Bot conversations should be bounded to very particular subjects and follow linear conversation routes; we avoid complicated branching paths. We’re not trying to create a general, self-aware A.I. here. It’s okay to expose and explain limitations. BASAAP. Individual bot designers shouldn’t have to account for tricky failure cases. Users will tire of complicated passages of dialogue.
- principle: Respect the chat medium
  summary: |
    One advantage of smart messaging apps is that we can strip away a lot of apps and interface and reduce the interaction to a simple chat UI. It would therefore be pointless to turn around and drop an entire app directly into a conversation. Keep everything native to the conversational back-and-forth. Every bot interaction is about call and response, with the bot publishing comments into the chat thread and the end user responding in the reply area. Bots can’t modify conversations in ways that humans can. At the same time, make use of conventions: rather than printing out an ungainly URL in a bot response, show a nicely-formatted card previewing the linked page.
- principle: Optimise for the end user
  summary: |
    Bots should be used to improve the end user experience, not just to make life easier for customer support teams. A designer should ask themselves: would a human be better for the end user? If the answer is yes, you shouldn’t be using a bot. Bots should not attempt to replace what humans are good at; rather they should attempt to improve what humans are slow at. Machines should work; people should think.
- principle: Use sparingly
  summary: |
    Bot interactions should be short and precise. It should be impossible to get into a protracted back and forth conversation with a bot; anything above two inputs feels laborious.
- principle: Provide an escape hatch
  summary: |
    Always have a human fallback option, allowing the user to express “I’d rather wait and talk to a real human, make this robot thing go away“.
- principle: Use structured input when possible
  summary: |
    The more alleyways a conversation can go down, the greater the potential for dead ends. Don’t place users in a situation where they need to guess the correct incantation required to proceed. Custom soft keyboards permit a limited range of input and can save a bunch of typing. For example, rather than asking the end user to type “yes” or “no,” show them two mutually exclusive buttons. Or validate structured text like email addresses before sending. In this way you can keep responses on track and sidestep the complications of parsing unpredictable plain text input.
- principle: Everyone sees the same thing
  summary: |
    Bots don’t only appear to the end user. The humans behind the bots need a record of the conversation’s context too – how a bot replied and how end users responded accordingly. Common or lengthy bot messages may be displayed in a collapsed state in the admin view for the sake of neatness. Cases in which bot messages are private to an admin and are only internally visible are an exception.
tags: [specific, organisational]
---
