---
title: React Design Principles
author: React
overview: |
link: https://reactjs.org/docs/design-principles.html
principles:
- principle: Composition
  summary: |
    Components written by different people should work well together. It is important to us that you can add functionality to a component without causing rippling changes throughout the codebase. In React, components describe any composable behavior, and this includes rendering, lifecycle, and state.
- principle: Common Abstraction
  summary: |
    This is why sometimes we add features to React itself. If we notice that many components implement a certain feature in incompatible or inefficient ways, we might prefer to bake it into React as we believe it benefits the whole ecosystem.
- principle: Escape Hatches
  summary: |
    React believes that staying accessible to a wide range of developers with different skills and experience levels is an explicit goal of the project. If a useful pattern cannot be described declaratively, an imperative API or a replacable, temporary working API is developed based on feasibility.
- principle: Stability
  summary: |
    We value API stability. When we deprecate a pattern, we study its internal usage at Facebook and add deprecation warnings. They let us assess the impact of the change. Sometimes we back out if we see that it is too early, and we need to think more strategically about getting the codebases to the point where they are ready for this change.
- principle: Interoperability
  summary: |
    We place high value in interoperability with existing systems and gradual adoption. It is important to us that any product team can start using React for a small feature rather than rewrite their code to bet on it. This is why React provides escape hatches to work with mutable models, and tries to work well together with other UI libraries.
- principle: Scheduling
  summary: |
    It is a key goal for React that the amount of the user code that executes before yielding back into React is minimal. If something is offscreen, we can delay any logic related to it. If data is arriving faster than the frame rate, we can coalesce and batch updates. We can prioritize work coming from user interactions over less important background work to avoid dropping frames ensuring that React retains the capability to schedule and split work based on its knowledge about the UI.
- principle: Developer Experience
  summary: |
    Providing a good developer experience is important to us. We also try to go an extra mile to provide helpful developer warnings.The usage patterns that we see internally at Facebook help us understand what the common mistakes are, and how to prevent them early. When we add new features, we try to anticipate the common mistakes and warn about them.
- principle: Debugging
  summary: |
    When something goes wrong, it is important that you have breadcrumbs to trace the mistake to its source in the codebase. In React, props and state are those breadcrumbs. If the props are wrong, you can trace back to the poisonous component else if the state is wrong, we can monitor setState calls. This ability to trace any UI to the data that produced it is an explicit design goal to ensure that state is not “trapped” in closures and combinators, and is available to React directly.
- principle: Configuration
  summary: |
    We find global runtime configuration options to be problematic. Since composition is central to React, we don’t provide global configuration in code.
- principle: Beyond the DOM
  summary: |
    Being renderer-agnostic is an important design constraint of React. It adds some overhead in the internal representations. On the other hand, any improvements to the core translate across platforms. Having a single programming model lets us form engineering teams around products instead of platforms.
- principle: Implementation
  summary: |
    We prefer boring code to clever code. Code is disposable and often changes. So it is important that it doesn’t introduce new internal abstractions unless absolutely necessary. When we evaluate new code, we are looking for an implementation that is correct, performant and affords a good developer experience. Elegance is secondary.
- principle: Optimized for Tooling
  summary: |
    Optimizing for search is also important because of our reliance on codemods to make breaking changes. We want it to be easy and safe to apply vast automated changes across the codebase, and unique verbose names help us achieve this. Similarly, distinctive names make it easy to write custom lint rules about using React without worrying about potential false positives.
- principle: Dogfooding
  summary: |
    We found that picking a small audience and focusing on making them happy brings a positive net effect. While community issues are addressed, we are likely to prioritize the issues that people are also experiencing internally at Facebook. Counter-intuitively, we think this is the main reason why the community can bet on React. Dogfooding it means that our vision stays sharp and we have a focused direction going forward. 
tags: [specific, organisations, software]
---
