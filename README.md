Please note: This repo is a work in progress, I've pushed it public for performance testing and feedback. Over the next week or so I will finalise the content in the /create and /about sections. Feel free to report any bugs or issues. Feedback welcome. Just remember it's not finished. [There's stuff on the roadmap… ](https://github.com/benbrignell/principles.design/issues)

# Contributing

## Add a Design Principles example

There are two ways to contribute. You don't need to be able to code but you will need a (free) [GitHub](https://github.com) account in order to contribute.

### The easy ish-way

#### Take a look at the template
Firstly you'll have to format your design principles a certain way. Not all fields are necessary, if something is missing (for example `author:` or `summary:`) just leave it blank.

Here's the template, copy it from here into a simple text editor of your choice. Replace the things you want to add where described below:

```
---
layout: example #ignore layout! :)
title: #add title#
author: #add author#
overview:
link: #add full url#
principles:
- principle: #add a principle#
  summary: |
    #add a summary (optional)#
- principle: #add a principle#
  summary: |
    #add a summary (optional)#
- principle: #add a principle#
  summary: |
    #add a summary (optional)#
- principle: #add a principle#
  summary: |
    #add a summary (optional)#
- principle: #add a principle#
  summary: |
    #add a summary (optional)#
- principle: #add a principle#
  summary: |
    #add a summary (optional)#
- principle: #add a principle#
  summary: |
    #add a summary (optional)#
- principle: #add a principle#
  summary: |
    #add a summary (optional)#
- principle: #add a principle#
  summary: |
    #add a summary (optional)#
- principle: #add a principle#
  summary: |
    #add a summary (optional)#
---

```

#### Navigate to the `_examples` folder at the top of [this page](https://github.com/benbrignell/principles.design).

![screenshot-2017-12-04 11 27 37](https://user-images.githubusercontent.com/362340/33551370-19ec9dba-d8e9-11e7-9db8-fa517f9e8ffa.png)

#### Create a new file
Click on "Create new file" at the top right

![screenshot-2017-12-04-11 29 20](https://user-images.githubusercontent.com/362340/33551617-d9427932-d8e9-11e7-92a5-8e1928194a38.png)

#### Name your file
You'll see an empty text area to paste your design principles into. At the top is a field for you to name your file. Give it a descriptive file name (for example here I'm adding the example "Design Well Inc's" design principles and have called the file `design-well-in.md`)

<img width="998" alt="screenshot 2017-12-04 11 30 54" src="https://user-images.githubusercontent.com/362340/33551408-348d1744-d8e9-11e7-818d-83a4d307dc03.png">

#### Paste in your Design Principles
Paste in your design principles. You'll need to format them based on a template which if you don't have it yet can be found here:

<img width="991" alt="screenshot 2017-12-04 11 36 07" src="https://user-images.githubusercontent.com/362340/33551412-372172c0-d8e9-11e7-83ac-3661db303560.png">

#### Add your new file

Scroll down to the bottom of the text area and 'Propose new file'. Give this a message, for example `added example design-well-inc.md`

<img width="990" alt="screenshot 2017-12-04 11 36 58" src="https://user-images.githubusercontent.com/362340/33551415-39128a6a-d8e9-11e7-8074-7c8ab3d6a958.png">

#### Create pull request
A pull request is something that's created for somebody to review your contribution and check everything is ok. If it's ok it will be merged into the site, if there's a problem somebody will fix it or let you know.

<img width="1000" alt="screenshot 2017-12-04 11 37 21" src="https://user-images.githubusercontent.com/362340/33551422-3b685812-d8e9-11e7-89ea-67639e8f0893.png">

#### Confirm pull request
Give it a quick glance, make sure everything looks ok

<img width="997" alt="screenshot 2017-12-04 11 37 38" src="https://user-images.githubusercontent.com/362340/33551432-3e86e5f4-d8e9-11e7-93b6-0fd5ea9c5d65.png">

Once a pull request is made it will be reviewed and if everything is ok it'll be merged in and appear on the site. It may take a few days for this to happen.

### The harder-ish way
Checkout the this repo and fire up jekyll (more instructions to follow in the next few days)

## Features

New features and improvements are welcome but please submit a discussion thread before you attempt or commit anything.

# Data types

 `layout:` ignore this

 `title:` The title of this example, e.g. "The Five Principles of Design"

 `author:` The company, team or individual that created these principles

 `link:` A link to a source article or somehwere the original principles were created.

 `principles:`

 ` — principle:` Each principle on a new line

 `tags:` Add tags, separated by a comma. Tags aren't available on the site yet but will be soon. It's a good idea to add them in preparation. The proposed tags are:

- `Organistion`
- `Personal`
- `Product`
- `AI`
- `UX`
- `Accessibility`
- `Universal`
- `Specific`


Notes:
Troubleshooting - when bundle update throws ```An error occurred while installing commonmarker (0.17.6), and Bundler cannot continue.
Make sure that `gem install commonmarker -v '0.17.6'` succeeds before bundling.```

`brew install cmake`
