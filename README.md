### MyCode
 Bellow are the instructions I followed to create this page.
### Objective
Apply your understanding of the this keyword in JavaScript by creating interactive buttons and exploring function contexts. This exercise aims to demonstrate how this behaves in event listeners and different function types.

### Instructions
This assignment involves creating a JavaScript program with interactive elements to observe this in action.

### Part 1: Interactive Buttons with Event Listeners
Create a New Repository:

On GitHub, create a new repository named JavaScript-This-Context.
Initialize this repository with a README.md file.
Clone your new repository to your local machine.
Develop the JavaScript Program:

Create an index.html file in your repository with three buttons. Each button should be labeled differently (e.g., 'Button 1', 'Button 2', 'Button 3').
Link a script.js file to your index.html.
In script.js, define an object with three methods. For example:
const messageHandler = {
  message1: 'The first button was clicked',
  message2: 'The second button was clicked',
  message3: 'The third button was clicked',
  displayMessage1: function () {
    this.displayMessage(this.message1);
  },
  displayMessage2: function () {
    this.displayMessage(this.message2);
  },
  displayMessage3: function () {
    this.displayMessage(this.message3);
  },
  displayMessage: function (message) {
    const p = document.createElement('p');
    p.textContent = message;
    document.body.appendChild(p);
  },
};
Each method (displayMessage1, displayMessage2, displayMessage3) should create a new paragraph element, set its text content to the respective message (e.g., message1, message2, message3), and append this paragraph to the body of the HTML document.
Attach these methods as event listeners to the respective buttons. Ensure you use .bind() to maintain the correct this context within the methods. For instance:
document
  .getElementById('button1')
  .addEventListener(
    'click',
    messageHandler.displayMessage1.bind(messageHandler)
  );
Repeat this for the other two buttons, adjusting the method and button ID accordingly.
The use of .bind() is crucial here to ensure that this inside each method refers to the messageHandler object and not to the button that was clicked.
### Part 2: Exploring Function Contexts
Differentiating Function Types:
Within the same script.js, define another object representing a person with a property name (e.g., "Frank").
Add two methods to the object: one using a standard function and another using an arrow function. Both methods should attempt to log "Hello, " + this.name to the console.
Observe the output when these methods are called to demonstrate the difference in how this behaves in standard functions versus arrow functions in strict mode.
### Part 3: Documentation and Comments
Comment Your Code:
Provide detailed comments in your script.js file explaining how this behaves in each context.
Explain why .bind() is necessary in the case of event listeners and the difference in output for the standard function vs. the arrow function.
### Part 4: Deployment and Submission
Push Your Code to GitHub:

Commit and push your index.html and script.js files to the JavaScript-This-Context repository on GitHub.
Deploy your page to GitHub Pages.
Submit Your Work:

Submit the URL link to your GitHub repository as your assignment submission.
### Resources Used
Html and javascript are used here.