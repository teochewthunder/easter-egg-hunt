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
1. Calls `modifyTime()` and `modifyEggs()`.
2. If `flag` property of the section is `true`, add secton name to the `visited` array.
3. Grabs the required section, processes extra HTML content and choices based on the section's `visitedChecks` array.
4. Calls `showChoices` and `showContent()`.
- `showChoices()` : 
5. If it's an end-game scenario, only show links to the timeut or victory scenario. Otherwise...
6. Goes through the `links` array and displays buttons (and clikable events) for them.
7. Adds Restart button to interface.
- `showContent()` :
8. Display HTML content.
9. Dispay inventory based on `hasVisited()` checks.
10. Display messages, if any.
- `modifyTime()` : Sets `timeLeft` if value is positive, otherwise, deduct from `timeLeft` property.
- `modifyEggs()` : Sets `eggs` if value is 0, otherwise, add to `eggs` property.
- `hasVisited()` : Checks the `visited` array to see if a particular section name is in it. Returns `true` or `false`.

## Sections (in `sections.js`)
This is an array containing objects. Each of these has the following properties.
- `content` : HTML content for the section.
- `flag` : Boolean value that determines if a section needs to be "flagged" once visited.
- `visitedChecks` : An array of objects.
  - `section` : Section name to check via the `hasVisited()` method.
  - `content` : Extra HTML to display if `true`. Can be `null`.
  - `contentElse` : Extra HTML to display if `false`. Can be `null`.
  - `choices` : Extra `choice` objects if `true`. Can be `null`.
  - `choicesElse` : Extra `choice` objects if `false`. Can be `null`.
- `messages` : An array of strings.
- `choices` : An array of objects.
  - `time` : Integer to modify `timeLeft` property by.
  - `eggs` : Integer to modify `eggs` property by. Can be `null`.
  - `section` : Section name that the choice will lead to.
  - `text` : Text for the choice.
