# p5.speech: An introduction {

---

## Summary

[p5.speech](https://idmnyu.github.io/p5.js-speech/) is a library that provides simplified access to the [Web Audio Speech Synthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) and [Speech Recognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) services in your browser (if your browser is Chrome, essentially).

It lets us make our computer *talk to us* and *listen to what we say*! That sounds good!

---

## Contents

- How to meet a new library
- Go to the website
- Look at examples
- Read the documentation
- Gather your first impressions
- What next?

---

## Meeting a new library

Whenever we want to use a library or a framework or some other add-on code to our programming, we always want to start by trying to *understand it* a bit first before we jump in and try to use it. Generally speaking, there are three key steps to start out with:

1. Go to the website for an overview
2. Look at any examples provided
3. Read or at least scan the documentation

---

## The p5.speech website

The p5.speech website lives at

[https://idmnyu.github.io/p5.js-speech/](https://idmnyu.github.io/p5.js-speech/)

Because it's a fairly simple library, it's a fairly simple website. We get a basic description up top, a couple of ways to obtain the library, some examples, and some documentation. All just as we might hope.

Read the description to get your most fundamental sense of what this library is and does. We already talked about it above, but yes, it's a library that lets us work with Web Speech (Synthesis and Recognition).

Close your eyes and send out a little thank-you into the universe for the library's creators. You can always retract it later if it turns out to be a bad experience.

---

## Looking at examples

The p5.speech website provides a series of fairly basic examples. This way we can both *experience what it's capable of* and *see the code to achieve this* in one place.

When looking at an example, it's usually best to first run the example, then take a look at the code afterwards. There's no need to assume you'll understand every line of it, but it's a good idea to just get a sense of what the common elements are, the patterns involved.

With p5.speech we're dealing with two pretty separate ideas: the *synthesis* stuff, which is about getting the computer to say something, and the *recognition* stuff, which is about gettin gthe computer to listen to something.

In both cases we're dealing with *strings*. The synthesis takes a string and tries to say it. The recognition listens to you talking and tries to turn it into a string.

### Unpicking examples

One thing you'll often find is that an example's code is *way* more complex than just demonstrating the specific lines of code you need. For instance, even in the most basic example provided, there's a lot of user-interface code being added to make the example more versatile, including

- Text display
- A button to click to list voices
- A random word selector on mouse pressed

This means the code can look more complex that we really want and we have to try to pick out the really critical pieces of the puzzle. In this case we can figure out that getting something said really involves two steps:

1. Create a variable that stores a p5.Speech() object:

```javascript
let voice = new p5.Speech()
```

2. Tell that object to say something:

```javascript
voice.speak(`She sells seashells by the seashore.`);
```

Practicing seeing what is truly necessary versus what is added bonus stuff is important.

---

## Reading the documentation

Having seen some examples, and having spent some time looking at the code, we should at the very *least* scan through the actual documentation of how the library works to get a sense of what's available. That's because

1. It's good practice to read documentation and improve your comprehension (it's a genre all of its own!)
2. There are very often things the library can do that are *not* shown in the examples but that might be super fun to try out

So just have a look at it, taking note especially of what *methods* and *properties* there are, since these essentially tell you what can be done.

Be ready for some of this to make no sense! You're learning, for one thing, and also not everyone is actually good at *writing* documentation, so it won't always be smooth sailing. Just have patience with them and with yourself.

While you're reading, consider remembering or even writing down things that look like they could be fun to play around with. I can't deny loving playing with a voice's pitch, for instance. We'll get to that in a second.

---

## Gather your first impressions

Take a couple of minutes to expand on your notes about the library. Note down key functions and properties that seem interesting. Allow yourself to think about a bigger picture of what you might want to do with the abilities the library gives you.

- You might be curious about the highest and lowest pitch possible for a voice.
- You might wonder what all the different voices sound like.
- You might think about the impact of languages on all this.
- You might want the computer to speak in nonsense, or to sing, or to rap, or to be rude, or supportive...
- You might want a program that mishears you on purpose
- You might want to control a game with your voice
- You might want to make the user say weird things

How could this library and its abilities fit in with the kinds of things you like to make? How could it *change* the kinds of things you normally do? What is the larger significance of the abilities of the library? What does "speech" mean?

---

## What next?

We've familiarized ourselves with the p5.speech library a bit, we have a sense of what it can do and what the code looks like, and we've done a bit of thinking about what it could all mean.

It's time to jump in try it out! This will include just getting the library up and running at all, and make sure we can get the most basic code working to try it out.

So let's move on and actually [get the library](./p5.speech-getting-the-library.md).

---

}
