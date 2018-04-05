---
title: iOS User Experience Guidelines
author: Apple
overview:
link:
principles:
- principle: Focus on the Primary Task
  summary: |
    When an iOS app establishes and maintains focus on its primary task, it is satisfying and enjoyable to use. Your app definition statement will help you focus your app on its primary task (to learn more about this statement, see “Create an App Definition Statement”). To maintain that focus, you need to determine what’s most important in each context or screen.

    Analyze what’s needed in each screen. As you decide what to display in each screen always ask yourself, Is this critical information or functionality users need right now? If your answer is no, decide whether the information or functionality might be critical in a different context, or if it’s not that important after all.

    For example, the iPhone Calendar app is focused on days and the events that occur on them. Users can use the clearly labeled buttons to highlight the current day, select a viewing option, and add events.

- principle: Elevate the Content that People Care About
  summary: |
    In a game, people care about the experience; they don’t expect to manage, consume, or create content. If you’re developing a game, you elevate content by enhancing the experience with a satisfying story, beautiful graphics, and responsive gameplay.

    If you’re not developing a game, you can help people focus on the content by designing your UI as a subtle frame for the information they’re interested in. Here are some ways you can do this:

    Minimize the number and prominence of controls to decrease their weight in the UI. Photos does this by placing a few unobtrusive controls on translucent bars.

    Consider subtly customizing controls so that they integrate with your app’s graphical style. In this way, controls are discoverable and comprehensible, without being conspicuous.

    Consider fading controls after people have stopped interacting with them for a little while, and redisplaying them when people tap the screen. Sometimes you may want to fade the rest of your app UI, too. This is especially appropriate in apps that enable an immersive experience, because it gives even more of the screen space to the content people want to see. For example, Photos fades the controls and bars after a few moments of noninteraction, which encourages people to immerse themselves in the content. When people want to perform a task with their photos, a single tap anywhere on the screen redisplays the controls.

- principle: Think Top Down
  summary: |
    The top of the screen is most visible to people, because they tend to interact with the device by holding the device in the following ways:

    In their nondominant hand—or laying it on a surface—and gesturing with a finger of the dominant hand
    In one hand, and gesturing with the thumb of the same hand
    Between their hands, and gesturing with both thumbs
    Put the most frequently used (usually higher level) information near the top, where it is most visible and easy to reach. As the user scans the screen from top to bottom, the information displayed should progress from general to specific and from high level to low level.

    In a game, for example, the most important action can take place in the top half of the screen. This leaves the bottom half of the screen for supplementary information and for controls users can tap without obscuring their view.

- principle: Give People a Logical Path to Follow
  summary: |
    People appreciate knowing where they are in an app and getting confirmation that they’re on the right path.

    Make the path through the information you present logical and easy for users to predict. In addition, be sure to provide markers—such as back buttons—that users can use to find out where they are and how to retrace their steps.

    In most cases, give users only one path to a screen. If a screen needs to be accessible in different circumstances, consider using a modal view that can appear in different contexts.

- principle: Make Usage Easy and Obvious
  summary: |
    Strive to make your app instantly understandable to people, because you can’t assume that they have the time—or can spare the attention—to figure out how it works.

    Make the main function of your app immediately apparent. You can make it so by:

    Minimizing the number of controls from which people have to choose
    Using standard controls and gestures appropriately and consistently so that they behave the way people expect
    Labeling controls clearly so that people understand exactly what they do
    Be consistent with the usage paradigms of the built-in apps. Users understand how to navigate a hierarchy of screens, edit list contents, and switch among app modes using the tab bar. Make it easy for people to use your app by reinforcing their experience. For example, people understand that the blue button in a toolbar represents the action they’re most likely to take in the current context. If your app displays more than one blue button in a single context, users will have to figure out which one to tap.

    In the built-in Stopwatch function (part of the iPhone Clock app) users can see at a glance which button stops and starts the stopwatch and which button captures lap times.

- principle: Use User-Centric Terminology
  summary: |
    In all your text-based communication with users, use terminology you’re sure they understand. Use what you know about your users to determine whether the words and phrases you plan to use are appropriate. For example, technical jargon is rarely helpful in an app aimed at unsophisticated users, but in an app designed for technically savvy users, it might be appreciated.

    The Wi-Fi Networks Settings screen uses plain language to explain how iOS responds to the user’s preference.

    Take care to be accurate when describing dates. It’s often appropriate to use friendly terms such as “today” and “tomorrow” when you display date information in your UI, but it can be confusing if you don’t account for the user’s current locale. For example, consider an event that starts just before midnight. To users in the same time zone, the event starts today, but to users in an earlier time zone, the same event may have started yesterday.

- principle: Minimize the Effort Required for User Input
  summary: |
    Inputting information takes time and attention, whether people tap controls or use the keyboard. If your app requires a lot of user input before anything useful happens, that input slows people down and can discourage them from using your app.

    Balance a request for user input with what you offer users in return. In other words, strive to provide as much information or functionality as possible for each piece of information people give you. That way, people feel they are making progress and are not being delayed as they move through your app.

    Make it easy for users to make choices. For example, you can use a table view or a picker instead of a text field, because it’s usually easier for people to select an item from a list than to type words.

    Get information from iOS, when appropriate. People store lots of information on their devices. When it makes sense, don’t force people to give you information you can easily find for yourself, such as their contacts or calendar information.

- principle: Downplay File-Handling Operations
  summary: |
    Although iOS apps can allow people to create and manipulate files, this does not mean that people should have an awareness of a file system on an iOS device.

    There is no iOS app analogous to the OS X Finder, and people shouldn’t be asked to interact with files as they do on a computer. In particular, people shouldn’t be faced with anything that encourages them to think about file metadata or locations, such as:

    An open or save dialog that exposes a file hierarchy
    Information about the permissions status of files
    As much as possible, allow people to manage documents without opening iTunes on their computer. Consider using iCloud to help users access their content on all of their devices.

    If your app allows people to create and edit documents, it’s appropriate to provide some sort of document picker that allows them to open an existing document or create a new one. Ideally, such a document picker:

    Is highly graphical. People should be able to easily identify the document they want by looking at visual representations of the documents onscreen.
    Allows people to make the fewest possible gestures to do what they want. For example, people might scroll horizontally through a carousel of existing documents and open the desired one with a tap.
    Includes a new document function. Instead of making people go somewhere else to create a new document, a document picker can allow them to tap a placeholder image to create a new document.
    You can also use the Quick Look Preview feature to allow people to preview documents within your app, even if your app can’t open them.

- principle: Enable Collaboration and Connectedness
  summary: |
    iOS devices are personal devices, but they also encourage collaboration and sharing with others. Enhance your app by helping people collaborate and connect with others.

    When appropriate, make it easy for people to interact with others and share things like their location, opinions, and high scores. People generally expect to be able to share information that’s important to them.

    Most apps can add value by allowing people to go beyond the app and share data with other tools they use. For example, an iOS app can act as a mobile complement to a computer app. Or, an iPad app might allow its users to communicate with the users of the iPhone version of the app.

    If your app allows people to access their social media accounts, be sure to take advantage of the Social framework APIs so that you can avoid asking users to sign in multiple times on the same device.

    For iPad, think of ways to allow more than one person to use your app on the same device. For example, two people might be able to play a game on opposing sides of an onscreen board. Or a band app might allow different people to play different instruments together on a single device.

- principle: De-emphasize Settings
  summary: |
    Avoid including settings in your app if you can. Settings include preferred app behaviors and information that people rarely want to change. Users can’t open the Settings app without first switching away from your app, and you don’t want to encourage this action.

    When you design your app to function the way most of your users expect, you decrease the need for settings. If you need information about the user, query the system for it instead of asking users to provide it.

    Let users set the behavior they want by using configuration options in your app. Configuration options let your app react dynamically to changes, because people don’t have to leave your app to set them.

    Offer configuration options in the main UI or—in iPhone apps—on the back of a view. To decide which location  makes sense, determine whether the options represent a primary task and how often people might want to set them.

    In the main UI, put options that provide primary functionality or that people want to change frequently.

    For example, iPad Calendar allows people to view their schedules by day, week, or month. These configuration options are offered in the main UI because viewing different perspectives of a calendar is a primary function of the app and people are likely to change their focus frequently.

    Apps that provide an immersive experience, such as games, are most likely to provide configuration options within the app, because users tend to change aspects of the experience frequently.

    In iPhone apps, you can put options that people don’t need to change frequently on the back of a view. For example, the primary function of Weather is to display a city’s current conditions and 6-day forecast. Although it’s important to be able to choose whether temperatures are displayed in Celsius or Fahrenheit, people aren’t likely to change this option very often. Therefore it makes sense to put the temperature-scale option on the back of the Weather view, where it’s conveniently available, but not obtrusive.

- principle: Brand Appropriately
  summary: |
    Incorporate a brand’s colors or images in a refined, unobtrusive way. Branding is most effective when it’s subtle and understated. People use your app to get things done or to be entertained; they don’t want to feel as if they’re being forced to watch an advertisement. For the best user experience, you want to quietly remind users of your identity.

    Avoid taking space away from the content people care about. For example, displaying a second, persistent bar at the top of the screen that does nothing but display branding assets means that there’s less room for content. Consider other, less intrusive ways to display pervasive branding, such as subtly customizing the background of a screen.

    Important: The exception to these guidelines is your app icon, which should be completely focused on your brand. Because users see your app icon frequently, it’s important to spend time designing an icon that balances eye-appeal with brand recognition.

- principle: Make Search Quick and Rewarding
  summary: |
    In apps that handle or display a lot of data, search can be a primary function. If you need to provide search in your app, follow these guidelines to ensure that it performs well.

    Build indexes of your data so that you are always prepared for search. Don't wait until the user initiates a search to do this, because you can't afford to create a negative first impression of the search experience in your app.

    Live-filter local data so that you can display results more quickly. It’s best when you can begin filtering as soon as users begin typing, and narrow the results as they continue typing. Although live-filtering data usually produces a superior user experience, it’s not always practical. When live filtering is impractical, you can begin the search process after the user taps the Search button in the keyboard. If you do this, be sure to provide feedback on the search’s progress so users know that the process has not stalled.

    When possible, also filter remote data while users type. Although filtering users’ typing can result in a better search experience, be sure to inform them and give them an opportunity to opt out if the response time is likely to delay the results by more than a second or two.

    Display a search bar above a list or the index in a list. Users expect to find a search bar in this position, because they're accustomed to the search bar in Contacts and other apps. Putting the search bar in this location means that it stays out of users’ way when they're scrolling through the list or using the index, but is conveniently available when it's needed.

    Use a tab for search only in special circumstances. If search is a primary function in your app you might want to feature it as a distinct mode. In iTunes, for example, finding and getting music and podcasts is the focus of the app. Users want to search for their favorite songs, artists, or podcasts regardless of the mode they're currently in, so it makes sense to offer a dedicated search tab that's always available.

    If necessary, display placeholder content right away and partial results as they become available. In this way, you give users useful information promptly. In iTunes, for example, users initiate a search for content by tapping the Search button. If the network connection is slow, iTunes first displays the Loading... message along with a spinning activity indicator so users know that search is proceeding. iTunes then displays a results view in which each section is populated with textual results—such as title and genre—and a custom outline of a box. As users scan the items in each section, thumbnail images appear in the box outlines.

    Consider providing a scope bar if the data sorts naturally into different categories. A scope bar allows users to specify locations or rules in a search or to filter objects by specific criteria. It contains up to four scope buttons, each representing a category. For example, Mail provides a scope bar that allows users to focus their search on the From, To, or Subject fields of messages, or broaden the search to include all fields. Providing a scope bar helps users focus their search and can significantly reduce the number of results.

- principle: Entice and Inform with a Well-Written Description
  summary: |
    Your App Store description is a great opportunity to communicate with potential users. In addition to describing your app accurately and highlighting the qualities you think people might appreciate the most, follow these guidelines:

    Be sure to correct all spelling, grammatical, and punctuation errors. Although such errors don’t bother everyone, in some people they can create a negative impression of your app’s quality.

    Keep all-capital words to a minimum. The occasional all-capital word can draw people’s attention, but capitalizing every letter of every word in a description can make it very difficult to read.

    Consider describing specific bug fixes. If a new version of your app contains bug fixes that customers have been waiting for, it can be a good idea to mention this in your description.

- principle: Be Succinct
  summary: |
    Think like a newspaper editor, and strive to convey information in a condensed, headline style. When your UI text is short and direct, users can absorb it quickly and easily. Identify the most important information, express it concisely, and display it prominently so that people don’t have to read too many words to find what they’re looking for or to figure out what to do next.

    Give controls short labels, or use well-understood symbols, so that people can tell what they do at a glance. When appropriate, use the built-in buttons and icons described in “System-Provided Buttons and Icons” for guidelines on designing your own icons, see “Icons for Navigation Bars, Toolbars, and Tab Bars.”

- principle: Use UI Elements Consistently
  summary: |
    People expect standard views and controls to look and behave consistently across apps.

    Follow the recommended usages for standard user interface elements. In this way, users can depend on their prior experience to help them as they learn to use your app. You also make it easy for your app to look up-to-date and work correctly if iOS changes the look or behavior of these standard views or controls.

    For an app that enables an immersive task—such as a game—it’s reasonable to create completely custom controls. This is because you’re creating a unique environment, and discovering how to control that environment is an experience users expect in such apps.

    Avoid radically changing the appearance of a control that performs a standard action. If you use unfamiliar controls to perform standard actions, users will spend time discovering how to use them and will wonder what, if anything, your controls do that the standard ones do not.

    iOS makes available to you many of the standard buttons and icons used throughout the built-in apps. For example, you can use the same Refresh, Organize, Trash, Reply, and Compose icons that Mail uses on both iPhone and iPad.

    To avoid confusing people, never use the standard buttons and icons to mean something else. Be sure you understand the documented meaning of a standard button or icon; don’t rely on your interpretation of its appearance. To learn more about using system-provided items, see “System-Provided Buttons and Icons.”

    In addition to the benefit of leveraging users’ prior experience, using system-provided buttons and icons imparts two other substantial advantages:

    Decreased development time, because you don’t have to create custom art to represent standard functions.

    Increased stability of your user interface, even if future iOS updates change the appearances of standard   icons. In other words, you can rely on the semantic meaning of a standard icon remaining the same, even if its appearance changes.

    The Interface Builder editor in Xcode makes it easy to use the system-provided buttons and apply system-provided icons to your controls. For guidance, see the appearance-related information in “Edit User Interfaces” in Interface Builder User Guide.

    If you can’t find a system-provided button or icon that has the appropriate meaning for a specific function   in your app, you should design a custom button or icon. For some guidelines to help you do this, see “Icons for Navigation Bars, Toolbars, and Tab Bars.”

- principle: Consider Adding Physicality and Realism
  summary: |
    When appropriate, add a realistic, physical dimension to your app. Sometimes, the more true to life your app looks and behaves, the easier it is for people to understand how it works and the more they enjoy using it. For example, people instantly know how to use the realistic address book that Contacts on iPad portrays.

    On iPhone, people instantly know what the Voice Memos app does, and how to use it, because it presents a beautifully rendered focal image (the microphone) and realistic controls.

    Think of the objects and scenes you design as opportunities to communicate with users and to express the essence of your app. Don’t feel that you must strive for scrupulous accuracy. Often, an amplified or enhanced portrayal of something can seem more real, and convey more meaning, than a faithful likeness.

    Use appropriate animation to further enhance realism in your app. In general, it’s more important to strive for accuracy in movement than in appearance. This is because people accept artistic license in appearance, but they can feel disoriented when they see movement that appears to defy physical laws. As much as possible, make sure your virtual views and controls mimic the behavior of the physical objects and controls they resemble. Convincing animation heightens people’s impression of your app as a tangible, physical realm in which they want to spend time.

- principle: Delight People with Stunning Graphics
  summary: |
    Rich, beautiful, engaging graphics draw people into an app and make the simplest task rewarding. Beautiful  artwork also helps to build your app’s brand in people’s eyes. iOS devices showcase your app’s artwork, so you should consider hiring a professional artist to create first-rate graphics that people will admire.

    Consider replicating the look of high-quality or precious materials. If the effect of wood, leather, or metal is appropriate in your app, take the time to make sure the material looks realistic and valuable. For example, Notes reproduces the look of fine leather and meticulous stitching.

    Create high-resolution artwork. In most cases, scaling up your artwork is not recommended as a long-term solution. Instead, try creating your artwork in a dimension that is larger than you need, so you can add depth and details before scaling it down. This works especially well when the dimension of the original art file is a multiple of the dimension you need. Then, if you also use an appropriate grid size in your image-editing app, you’ll be able to keep the scaled-down art file crisp and reduce the amount of retouching and sharpening you need to do.

    Spend the time to design a beautiful, memorable app icon. It’s not unusual for users to base the decision to download an app on the quality of its app icon. For guidelines on how to create an app icon, see “App Icons.”

    Remove hard-coded values that identify screen dimensions. This is particularly important if you want your app to run on different iOS devices or external displays.
tags: [specific, organisational]
---
