# Activity: Slamina {

## Objectives

* Using p5.speech both for voice output and voice input

---

## The idea

The program will speak the name of a common animal backwards and the user will have to say (with their voice) what they think it is in the form "I think it is **X**." If they get it right, their guess will be displayed in green, if they get it wrong, their guess will be displayed in red.

---

## Create a new project

1. Download [template-p5-project.zip](../templates/template-p5-project.zip) and unzip it
2. Rename the folder to `slamina`
3. Move the folder into the `activities` folder in your repository folder (create it if necessary)
4. Commit the changes to your repository with a commit message
5. Open the project folder in VS Code to start work

---

## The plan

The idea here is really simple, but it has a few moving parts. We'll need to obtain a list of animal names in a useful format to make the user guess. We'll need to figure out how to make p5.speech say an animal's name backwards. And we'll need to have it listen to a user command representing a guess. Finally, we'll need to display whether they got it right somehow.

Here's a plan:

1. Obtain a list of animal names
2. Choose an animal and say it backwards
3. Setup the recognizer to listen to guesses
4. Display whether a guess is right or wrong

---

## 1. Animal names

When we work on a project like this, one thing we need is nicely formatted data (the animal names) that we can easily use in our program. Fortunately for us, Darius Kazemi (a wonderful creative programmer worth looking up) has a [corpora](https://github.com/dariusk/corpora) project that contains all kinds of lists in easily accessible form. We'll use an [animal list](https://github.com/dariusk/corpora/blob/master/data/animals/common.json) he provides.

1. Go to [https://github.com/dariusk/corpora/blob/master/data/animals/common.json](https://github.com/dariusk/corpora/blob/master/data/animals/common.json)
2. Copy the **array** containing the list of animal names (including the square brackets at the start and end)
3. Declare a **constant** `animals` in your script and assign the array (paste it in)

Now we have a nice long list of animal names we can use for our guessing game.

---

## 2. Choose an animal and say it backwards

At the heart of this experience is having the computer say an animal's name backwards. The novelty being that it can be quite hard to work out what animal it is in this case. So we need to start the game by choosing an animal's name from the array, and then say it with p5.speech's speech synthesis, but backwards! Given that it's best to trigger audio from a user event, we'll do this when the user clicks.

Because it's a little more complicated than is easy to just work out, we'll have the string reversing part provided below.

First we need to have a way to track the current guess...

1. Declare a **variable** at the top of the program called `currentAnimal` and set it to an empty string. This is where we'll store the animal the user is guessing.

Now we need to be able to reverse a string of text.

1. Add the following function for reversing a string to your program:

```javascript
/**
Reverses the provided string
*/
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split('');
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join('');
  // Return the result
  return result;
}
```

Finally, we need to trigger p5.speech to say the reversed animal name...

1. Include the p5.speech library in your project

* Place the script tag for the library in `index.html` (feel free to use the CDN version or the downloaded version)

2. Create a speech synthesis object in your project

* Declare a `const` called `speechSynthesizer` at the top of the program and assign it a p5.speech synthesizer object

3. Define a `mousePressed()` function and in it

* Assign a random animal name from the `animals` array to `currentAnimal` (remember you can use p5's `random()` function for this)
* Declare a variable `reverseAnimal` and assign the reverse of `currentAnimal` to it by using `reverseString(currentAnimal)`
* Use the `speechSynthesizer` to speak `reverseAnimal`

Now when the program starts, if the user clicks, they will hear the name of a random animal backwards.

---

## 3. Set up a voice recognizer to listen to guesses

We want p5.speech to listen to the user and hear when they make a guess. To do this we need to be able to listen to a guessing command like "I think it is..." and then capture what the actual guess is. This is kind of non-trivial, but we'll get into it. In order to give some feedback, we'll display the guess in the console.

First we want to set up the recognizer...

At the top of the program:

1. Add a speech recognizer object

* Declare a `const` called `speechRecognizer` at the top of the program and assign it a p5.speech recognizer object

In `setup()`:

1. Set up the new recognizer object

* First set it to work *continuously* by setting its `continuous` property to true
* Then set the function it will call on results to `handleSpeechInput` (we'll write that function in a moment)
* Then start the recognizer working with its `start()` method

2. Set up some default text styling (perhaps a large text size, bold, and centering)

Now we need to handle guessing...

At the top of the program:

1. We need somewhere to store the user's guess, so declare a variable called `currentAnswer` containing an empty string (they haven't guessed yet!)

Below the `mousePressed()` function:

1. Define the function called `handleSpeechInput()`. In it we need to *extract* the animal name the user hopefully said so we can store it in `currentAnimal`. This bit is kind of intense, so a bit more hand holding here:

* Declare a variable called `guessedAnimal` and give it a default value that will make sense if the user sees it after the program didn't understand them for some reason, something like... `"what??"`
* Write an if-statement that checks that `speechRecognizer.resultValue` is true (this will help us avoid situations where the recognizer didn't really hear something well).
* Inside the if-statement:
  * Use the String `split` method to break a *lowercase version* of the user's command into two parts, the part *before* "i think it is" and the part *after* "i think it is", which should be the animal name. `split` will return an *array*, ideally with two elements (the before part and the after part). This is by no means easy, so here's what that would look like:

```javascript
let parts = speechRecognizer.resultString.toLowerCase().split(`i think it is`);
```

* Still inside the if-statement:
  * Write an if-statement that checks if `parts` has a length greater than `1` (e.g. it managed to break the string into two parts, meaning if found "i think it is" inside the string).
  * Inside this new if-statement:
    * Assign `parts[1]` to `guessedAnimal` (that is, the part of the user's command *after* "I think it is", which is their answer)
* Outside both if statements, assign `guessedAnimal` to `currentAnswer`
* Use `console.log()` to print out `currentAnswer` so you can see what it is

Now if the user starts the program and clicks, they should be able to say "I think it is dog" (for example) and you should see "dog" in the console

---

## 4. Display whether a guess is right or wrong

Finally, we want to display the user's guess to the user themselves so they can understand whether they were right or wrong!

In `draw()`:

1. Set a background color
2. Write an `if` statement that checks if the current answer is correct (does it equal the current animal?)

* If it does, set the fill (for the text) to green
* It it doesn't, set the fill (for the text) to red

3. Display the `currentAnswer` variable as text on the canvas

Now if the user starts the program and clicks, they should be able to say "I think it is dog" (for example) and see the word "dog" appear on the canvas in green (if it's right) or red (if it's wrong). Hey presto! Our guessing game is complete!

---

## 5. Improve the program

Currently our program works, but there are some places where we could make it nicer. Consider breaking the code down into smaller functions like `sayAnimalBackwards(animal)`, `displayAnswer()`, and `nextQuestion()` to ask a new question.

---

## Done

As with any simple program, we can imagine all kinds of improvements and changes?

* Add start and end screens
* Add more visual flair when you get an answer right or wrong
* Add sound effects when you get an answer right and wrong (could be criticism/praise via speech output?)
* Add a counter for how many correct guesses the user achieves
* Use a different set of answers from the corpora site to have the user guess something else
* Transform the answers in a different way than reversing them (anagrams? say them in a really hard to understand voice using voice settings?)
* Add a time limit for the user to name their guess in
* Completely change the dynamic away from a guess game to something else, what if the command was "I feel like a(n) X" or "I look like a(n) X"?
* Turn it into an attempt to guess as many real animals from the array as possible?
* Add multiple options for the user (maybe they can choose between two animals? Which is cuter?)
* ... and many more?!

---

}
