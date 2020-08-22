# Project 4: Around The U.S.

### Overview

- Pages link
- Description and Functionality
- Technologies and Techniques

**Pages link**

- [Link to the project in Pages](https://thinklikeadesigner.github.io/web_project_4/)

**Description and Functionality**

This project is a site that allows you to make a profile and post pictures. So far, the user can add their name and a short description about themself. Using JavaScript, the user can:

1. open and close a modal
2. edit the contents of a form
3. save the changes so the website reflects the user input from the form
4. Delete button deletes cards
5. Add button adds cards
6. Liking a card changes the heart fill color
7. Clicking on picture enlarges the picture
8. Clicking outside the form/image or pressing Esc closes the modal

**Technologies and Techniques**

I used these functions in the following ways:

**querySelector()** was used to select elements from html

**addEventListener()** was used to check for user actions on page

**preventDefault()** was used to prevent website from following default behavior

**forEach()** was used to add cards from an array

**prepend()** was used along with <template> to add an entire card to the page at once.

**keydown** event handlwer was used to listen for the Esc key in order to close a modal

**event.target** was used to specify what element was clicked, so that only clicking outside the modal closed it.

I also used form validation techniques for a responsive UI. The user will now prompted when:

- They left a field empty when completing the form
- They did not enter a valid URL for the image
- They did not use at least 2 characters for the name or description
- They did not use at least 1 character for the image title
