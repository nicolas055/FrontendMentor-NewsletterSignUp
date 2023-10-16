# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop](/screenshots/desktop.png)
![Mobile](/screenshots/mobile.png)


### Links

- Solution URL: [Go to solution](https://www.frontendmentor.io/solutions/frontendmentornewslettersignup-R39tHQATbF)
- Live Site URL: [Go to live site](https://frontend-mentor-newsletter-sign-up-orpin.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Basic Javascript

### What I learned

This challenge helped me learn how to use regex:
```js
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
```

I also learned how to reload a page using js:
```js
dismissBtn.addEventListener("click", () => {
    location.reload();
})
```

### Continued development

I just started with js, so there is still a LOT to learn about this language. 

### Useful resources

- [devdocs](https://devdocs.io/) - This is a very good api with concepts of a lot of languages. It helped understand a lot of js concepts.
- [ChatGPT](https://chat.openai.com/) - It help me build regex and understand how to use it.

## Author

- Github - [@nicolas055](https://github.com/nicolas055)
- Frontend Mentor - [@nicolas055](https://www.frontendmentor.io/profile/nicolas055)
- Instagram - [@nicolas_leite2](https://www.instagram.com/nicolas_leite2/)
