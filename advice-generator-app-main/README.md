# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- Free API from [Advice slip JSON API](https://api.adviceslip.com)

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(advice => document.querySelector('#advice').innerHTML = '"'+ advice.slip.advice + '"')
.catch(error => document.querySelector('#advice').innerHTML = error);

fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(id => document.querySelector('#advice-id').innerHTML = "advice #" + id.slip.id)
.catch(error => document.querySelector('#advice-id').innerHTML = error);
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

## Author

- Website - [Add your name here]https://www.your-site.com
- Frontend Mentor - @hexanne https://www.frontendmentor.io/profile/hexanne
- Facebook - @justin.steen.254 https://www.facebook.com/justin.steen.254
- Github - @hexanne https://www.github.com/hexanne
- Telegram - @developerke https://t.me/developerke
