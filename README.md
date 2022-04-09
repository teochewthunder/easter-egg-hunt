# Easter Egg Hunt
A *Choose Your Own Adventure* style game where the player has to accumulate 30 eggs within 120 minutes. The game ends when the `eggs` property is greater than 30, or the `timeLeft` property is 0.

## HTML placeholders
- a div with class of `timeleft` to display the `timeLeft` property.
- a div with class of `inventory` to display the `eggs` property as well as any other items
- a div with class of `content` to display HTML content and images from any given section, along with any extra content.
  - a div with class of `message` to display the contents of the `messages` property from any given section.
- a div with class of `choices` to display the `choices` array from any given section, along with any extra content.

## Properties
- `eggs` : an integer which represents the number of eggs collected. Cannot go below 0.
- `timeLeft` : an integer that represents minutes left. Cannot go below 0.
- `visited` : an array of strings that is updated when certain sections are visited. Referenced when additional HTML content or choices need to be displayed, and whenever inventory needs to be determined.

## Methods
- `gotoSection()` : 
- `showChoices()` :
- `showContent()` :
- `modifyTime()` :
- `modifyEggs()` :
- `hasVisited()` :

## Sections (in `sections.js`)
This is an array containing objects. Each of these has the following properties.
- `content` :
- `flag` :
- `visitedChecks` :
- `messages` :
- `choices` :
  - `section` :
  - `content` :
  - `contentElse` :
  - `choices` :
  - `choicesElse` :
