# Exercise 6: Raving Redactionist++ {

#### Grade

- 4% of final grade (see guidelines at bottom)
- Note: Only your **best five exercises** will count for your final grade

#### Deadlines

- Section A (Tuesdays): 11:59PM, 8 March 2022.
- Section B (Thursdays): 11:59PM, 10 March 2022.

---

## Objectives

* Playing with jQuery

---

## Setup

1. Start a new project by duplicating your Raving Redactionist activity project folder and renaming it `raving-redactionist-plus-plus` (or something else).
2. Move this new project folder into your `exercises` folder in your course repository
3. Commit these changes to your repository with an appropriate message like `Ex: Starting code`
4. Open the project in VS Code and begin!

## Brief

Your objective is to add functionality to the existing *Raving Redactionist* to make it more interesting and engaging. Or more strange, or disturbing, or funny, or something else entirely! Implement **at least three** of the following:

- Improve the visual presentation by working with the CSS and HTML
- Find a different text to be redacted
- Add a counter to the page that tells the user how many currently revealed secrets there are (all jQuery selections have a `.length` property that tells you how many elements the selection found)
- Use a fading effect to fade the redaction effect in and out (this will likely require `.animate()`)
- Add a second task in which the user can mouse over specific words or even letters to reveal a hidden message in the text, each element should highlight when the user finds them
- Add audio to the experience (background music? the sound of a boring office? a pen squealing sound when you redact something? a gasp when something is revealed?)
- Allow the user to redact by clicking and dragging the mouse cursor over a reveal passage rather than clicking
- Allow the user to redact using their voice
- Add an ending of some kind to the experience if the user allows all the secrets to be revealed ("YOU LOST THE COLD WAR!!")
- Have a computer voice read out revealed secrets and have the user "lose" if the computer finishes reading before they've redacted it
- Make the secrets float off the "page" instead of just being revealed, and if they make it off the edge they're gone forever - clicking them makes them go back to where they started
- Generate a text for redaction in code instead of having it already in the HTML (you'll have to generate the redaction spans as well)
- Use ml5.js's text features of a library like RiTa to generate the text being redacted
- Reposition the user as someone trying to get the secrets with an interesting revelation mechanics (maybe if they successfully print the document they win???)
- ... and many more?

Some of these are straightforward and some are not. Choose wisely such that you get some good programming practice and challenge yourself, but not so that you stress out!

If you have other ideas for additions and changes, go ahead, so long as you add at least three new things and learn something.

## Submission

Submission will take place on **Moodle**. Go to the appropriately named **exercise** on the Moodle and then submit your work there.

Your submission should just be plain text that includes (substituting your GitHub username and any difference in the folder names):

1. A link to your exercise code (e.g. <https://github.com/pippinbarr/cart263/tree/master/exercises/raving-redactionist-plus-plus/>)
2. A link to your project on the web (e.g. <https://pippinbarr.github.io/cart263/exercises/raving-redactionist-plus-plus/>)

## Evaluation

See the [evaluation guide for exercises](./evaluation-guide).

---

# }
