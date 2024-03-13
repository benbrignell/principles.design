---
title: What is a good standard?
author: Bert Bos
overview: |
  Why doesn't HTML include tags for style? Why can't you put text inside SMIL? Why doesn't CSS include commands to transform a document? Why, in short, does W3C modularize its specification and why in this particular way? This essay tries to make explicit what the developers in the various W3C working groups mean when they invoke words like efficiency, maintainability, accessibility, extensibility, learnability, simplicity, longevity, and other long words ending in -y.
link: https://www.w3.org/People/Bos/DesignGuide/introduction
principles:
- principle: Maintainability
  summary: |
    Both the specifications and the files or programs made according to them have to be maintained. There is hardly any data or service that never needs updating, moving or converting. Sometimes there is a program that can make the changes, but there always comes a time when a major change is needed and a human has to be involved.

- principle: Modularity
  summary: |
    People can only consciously work with a limited number of concepts at any time. Short-term memory, which is what you use when solving an intellectual problem, only holds six or seven items. Thus to solve a complex problem with many variables, we divide the problem into at most six chunks and build the solution with those chunks as building blocks.

- principle: Minimum redundancy
  summary: |
    This section is called "minimum redundancy" and not "no redundancy," because, as the introduction said, our technologies are used by humans, and humans can deal with redundancy, indeed have trouble when there is none. Too much redundancy is bad for the computer (or the programmer) though, because it means implementing the same thing several times.

- principle: Accessibility
  summary: |
    The word "accessibility" refers primarily to the degree in which something is accessible by people with disabilities, but in a wider sense it also measures resistance to external or temporary handicaps, such as noisy environments or bad lighting.

    The main method to ensure accessibility is to encode data at as high a level of abstraction as possible, but it is also important to hook into already existing accessibility technologies.
- principle: Device-independency
  summary: |
    If a specification doesn't have to depend on a specific (type of) device, then it probably shouldn't. Or it should be split in a dependent and an independent part. Device-independency is in many ways the same as accessibility, although for different reasons.

- principle: Internationality
  summary: |
    To be World-Wide, the Web must be usable by people who don't speak the language of its developers. In general, it makes little sense to develop a format for the exchange of information that is only usuable for one or two human languages. Thus, if a specification allows human readable text anywhere, it must allow text in any language.

- principle: Extensibility
  summary: |
    It would be really nice if a technology was right the first time... No different versions, no differences between applications, no need to upgrade. But in practice everything needs a version 2 and often a version 3 as well. So it is best to take this fact into account when designing version 1.

- principle: Learnability
  summary: |
    You sometimes hear people say that syntax is not important. Not true: syntax is one of the most important things there is. (Maybe what they really mean is that their syntax is better than yours...) They probably refer to the fact that there are multiple ways to write down the same model. That is true, but it by no means follows that all ways are equivalent. It is a philosophical debate whether a person's language determines his mental model of the world or whether the language is merely the surface structure of a deeper model that is essentially the same for everybody.

- principle: Readability
  summary: |
    A notation can be too short. If a seldomly used feature takes only one letter ("t"), then the few times you see the letter you will probably have to look it up, if you don't overlook the letter completely. It is better as a complete word ("translate").

- principle: Efficiency
  summary: |
    According to Jakob Nielsen, people are most productive if the computer's response to their click takes less than a second. People lose their concentration if a page takes longer than ten seconds to appear.

- principle: Binary or text format
  summary: |
    Most W3C specifications define a formal language for describing some type of resource: HTML describes simple text files, SVG describes vector graphics, PNG describes raster images, HTTP describes the dialog between a client and a server and URLs describe the path to a certain resource. There are exceptions, such as the several WAI guidelines, that describe meta-rules about how to design programs and specifications (a bit like this essay, in fact, but more precise...). But most people working on W3C specifications have to start with the choice: do we create a binary format or a text based one?

- principle: Implementability
  summary: |
    The easier a specification is to implement, the more implementations will be made and the more compatible they will be. Easy implementation also means that implementers have time to be creative and come up with novel ways to use the technology. Implementations will be cheaper; in fact they can be virtually free if they can be made by individuals in their spare time. Fixing bugs is among the most expensive operations known to developers, especially if there are people that, unwittingly, have come to rely on them. Avoiding bugs is thus of the foremost importance.

- principle: Simplicity
  summary: |
    [This image](https://www.w3.org/People/Bos/DesignGuide/7-stage2.png), which is based on one by Donald Norman, shows seven stages a person has to go through to complete an activity. If we start at the top with the person's goals, then from those goals he forms a set of intentions to change certain things in the world. He translates the intentions into a sequence of actions and executes them. He subsequently perceives the new state of the world, interprets what he sees, and compares it against what he intended to change. He may have to do another cycle if his goals were not met.

- principle: Longevity
  summary: |
    By default, documents on the Web are written for eternity. If something is worth writing it is worth keeping. You never know when something stops being useful or who depends on it. As a consequence you should never break links. That part is well known.

- principle: Backwards compatibility
  summary: |
    There are two kinds of backwards compatibility: the obvious one of a version of a specification with previous versions of the same, and another one of new technologies with earlier ones.

- principle: Interoperability
  summary: |
    This new-fangled word is a variant of that other, rather better known new-fangled word, compatibility, and it means simply that something (a document, a program) written according to our specifications should work identically across different applications and different computers. "Identically" of course has to be qualified: you cannot display a document exactly the same on the screen of a handheld organizer as on a 19 inch color screen. But you can get the same experience and the same information from that document.

- principle: Repurposing of content
  summary: |
    The large circle [in the diagram](https://www.w3.org/People/Bos/DesignGuide/communication.png) represents human communication with the Web as an intermediary: somebody has an idea (at the top); he represents it in a machine-readable way and enters it into the Web (the red part); the Web transports it and displays it to somebody; that somebody interprets what he sees (at the bottom) and may in turn become the originator of new ideas.

- principle: Timeliness
  summary: |
    For a new technology to be successful, it has to come at the right time. Waiting too long before developing an essential module means that ad-hoc solutions will be deployed, which causes backwards-compatibility problems and high costs for the people who have to convert things to the new standards once they arive. Developing something too early may mean that it will be forgotten by the time it is needed, or worse, that it can't be used, because the intermediate steps have turned out to be different than what was expected.

- principle: Use what is there
  summary: |
    Looking back to the first 10 years of the Web, it certainly looks as if there has been a revolution. The Web now runs on HTML, HTTP and URLs, none of which existed before the '90s. But it isn't just because of the quality of these new formats and protocols that the Web took off. In fact, the original HTTP was a worse protocol than, e.g., Gopher or FTP in its capabilities, and HTML back then also wasn't quite what it is now: no embedded images, no tables, no colors...

- principle: Design by committee
  summary: |
    Nearly all specifications are created by a committee rather than by a single individual. The working groups of W3C typically consist of some 10 to 20 people, who work together on a new technology for a year or longer.

- principle: Expertise
  summary: |
    If a specification is so large that there are experts on individual parts of it, but nobody wants to be called an expert on the whole, then the specification is definitely too large. Splitting it into two parts and setting up a working group for each part will almost certainly make for a better result in the end.

- principle: Brevity
  summary: |
    Don't forget that most people are short on time: reading a spec of 50 pages is just about possible, although 15 would have been better, but who is going to read 385 pages? The typical programmer will read the first 20 pages, look at a few more examples, and then start programming right away.

- principle: Stability
  summary: |
    Technology changes, the future can't be predicted, and often specification writers will have to publish something that they expect to change in the future, simply because there is an urgent need for a standard. Hopefully they will have gotten the extensibility right…

- principle: Robustness
  summary: |
    Networks may fail, people may make mistakes, files can get lost, software may have bugs, the new version may not be as backwards-compatible as you thought... and exactly when you desperately need certain information, you cannot get it, or it arrives damaged.

tags: [universal, people]
---
