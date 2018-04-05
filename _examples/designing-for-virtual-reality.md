---
title: Designing for Virtual Reality
author: Google
overview: |
link: http://ustwo.com/blog/designing-for-virtual-reality-google-cardboard/
principles:
- principle: Head Tracking
  summary: |
    It’s fairly commonplace knowledge that if a user moves their head in a VR environment, it should be reflected in the application. “The most important guideline in designing for virtual reality is to always maintain head tracking. Never stop tracking the user’s head position inside of the application. Even a short pause in head tracking will cause some users to feel ill.” This principle, along with “using constant velocity at low speeds”, or “grounding the user in their environment” are all guidelines needed for any basic VR experience.
- principle: Acceleration
  summary: |
    Moving a user through your environment is particularly tricky in VR, since it’s fundamental to how humans perceive their position in space. If you’re standing still, there is acceleration due to gravity, which is how you keep yourself oriented. Ignoring acceleration altogether and snapping to a constant velocity is very unnatural. So the challenge is to either find the right amount of acceleration or replace the feeling of acceleration with something else entirely. For this version of Cardboard Design Lab, our team is experimenting with 83 milliseconds of acceleration, about 3m/s of constant velocity, and 266 milliseconds of deceleration. We think it’s a graceful solution, but it’s certainly one principle in the Design Lab that we’re looking forward to getting feedback from the community on.
- principle: Utilizing Reticles
  summary: |
    Because most VR systems can’t track eye position (yet), there’s no way for the user to tell the app where their gaze is focused. So instead, a reticle helps the app show the user where it’s center is. In the example above, we have the user attempt to pop the balloons without the use of a reticle, with the result being it’s likely they’ll miss their target a few times before getting the hang of it. We had never seen the use of a reticle before in VR, but it’s an example of something that’s so small and simple that will open doors for designers to craft better experiences.

    The goal of using a reticle is to easily allow users to understand if something is selectable, to quickly navigate through a menu, etc. We were careful not to let the reticle interfere with the design of application; sometimes we don’t have it visible, and our pilot version is minimalistic and utilitarian. It’s a foundation that designers can iterate and build on, whether they are creating crosshairs, a camera, or whatever they believe best fits their experience.
- principle: Using Scale
  summary: |
    There are many things that make VR experiences truly unique, the most striking of which is the impact of differences in scale between the user and their environment. While building the Design Lab, us two played with many variations of scale, and settled on the perspective you see above where the user feels small, and almost humbled. As the goal of Immersion principles are to initiate emotional reactions, we felt that designers experiencing just how grand and vast the world around them can be would jumpstart their imaginations.
- principle: Spatial Audio
  summary: |
    A fairly unique concept to 3D and VR games, spatial audio places sounds in physical locations in the environment around you. So, a sound that comes from an object to your left sounds like it’s coming from the left in your headphones. In the example above, the user hears the hoot of the owl and subsequently looks to the right, where they discover the owl in question, staring at them from his perch in a tree. This lesson, while simple, teaches designers about the infinite possibilities of audio in their virtual creations.
- principle: Gaze Cues
  summary: |
    The implementation of gaze cues, which may be a new concept for those just starting to design for VR, are something we’re really excited to see evolve as time goes on. A gaze cue is when the experience reacts based on where the user is looking. The experience could react more subtly, “hover state” style, or it could be event-based, like spawning a monster behind you in a horror game. In the example we created for Cardboard Design Lab, staring at the star-filled sky activates a hover-state gaze cue, revealing a series of constellations.
- principle: Make It Beautiful
  summary: |
    Our final Immersion principle? Make it beautiful. By focusing on the visual beauty of what you’re creating, you’re enhancing the feeling of immersion experienced by the user. At the end of your hike through the lesson-filled forest, the user emerges on a clifftop overlooking the ocean, allowing them to witness the sunrise. We wanted the user to a moment, breathe, and let the inspiration sink in before starting their own VR design journey.
tags: [specific, organisational]
---
