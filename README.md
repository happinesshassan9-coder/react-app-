Name: Happiness Hassan Ojonuyo
Email: hassan.happiness@outlook.com

Introduction
Modern web development relies on a strong understanding of both JavaScript fundamentals and powerful libraries like React. 
This content brings together essential learning resources that explain how React works, how Hooks simplify state and logic management, and how the JavaScript DOM allows direct interaction with web pages. 

By exploring these materials, you gain a solid foundation for building interactive, efficient, and user-friendly web applications using industry-standard tools and best practices.




1. Complete Intro to React
React is a JavaScript library for building user interfaces, especially dynamic and reusable components.
It uses a declarative model—developers describe what the UI should look like and React updates the DOM efficiently.
Components

Function vs Class Components
Function components are simpler and now preferred.
React Hooks allow function components to have state and other features previously only available in class components.
Components help structure UI into reusable, isolated pieces.

JSX (JavaScript XML)
JSX looks like HTML but is actually JavaScript.
React compiles JSX into React.createElement() calls behind the scenes.

React Elements vs Components
React Elements are plain objects representing HTML tags or components.
Components are reusable functions or classes that return elements.

React Hooks
Hooks like useState and useEffect let function components manage state and side effects.
Hooks begin with the word use and are powerful tools to handle logic in functional style.

Handling User Events
React handles events like clicks using props like onClick.
Example: <button onClick={handleClick}>Click me</button> triggers a function on click.






2. React Hooks Cheat Sheet
This resource provides a cheatsheet for the most common React Hooks to speed up learning and application.


1. useState
Creates state in function components.
Returns a state value and a setter to update it.

2. useEffect
Performs side effects (e.g., fetching data, working with DOM).
Runs after render by default.

3. useRef
Accesses DOM elements directly or stores mutable values.

4. useCallback
Memoizes functions to avoid unnecessary re-creations.

5. useMemo
Memoizes expensive computations to optimize performance.

6. useContext
Shares state across components without deep prop passing.

7. useReducer
Alternative state management (useful for complex logic).







3. JavaScript HTML DOM
The document object represents the entire web page. It is the root object used to access everything else in the HTML DOM.

Finding Elements
Common document methods to find elements:
document.getElementById(id) — find element by ID
document.getElementsByTagName(name) — find by tag
document.getElementsByClassName(name) — find by class name

Modifying Page Content
You can use:
element.innerHTML — change content
element.style.property — change styling
element.setAttribute() — change attributes

Adding/Removing Elements
document.createElement() — create new element
document.appendChild() — add element
document.removeChild() — remove element
document.replaceChild() — replace element

Event Handling
You can attach events directly using properties like:
element.onclick = function(){…}
Document Properties
Examples include:
document.body — body element
document.head — head element
document.forms, document.images — collections of elements






4. JavaScript HTML DOM 
You can find HTML elements using several methods:
1. By ID

 document.getElementById("myElem")
 Finds the first element with the specified ID.


2. By Tag Name

 document.getElementsByTagName("p")
 Returns all elements of a certain tag.


3. By Class Name
 document.getElementsByClassName("myClass")
 Returns elements with the same class.


4. By CSS Selectors

 document.querySelectorAll("div.highlight")
 Finds elements matching complex selectors.


HTML Object Collections
You can access collections like:
document.forms
document.images
document.links
document.scripts

Using Found Elements
Once found, elements can be read or manipulated using properties and methods such as:
.innerHTML
.style
.classList
.setAttribute()




Conclusion
Together, these resources provide a well-rounded view of frontend development—from structuring applications with React components and Hooks to manipulating web pages using the JavaScript DOM. 
Mastering these concepts helps you write cleaner code, manage application state effectively, and create responsive user interfaces. 
As you apply what you’ve learned, consistent practice with real projects will deepen your understanding and prepare you to build scalable, modern web applications with confidence.




React Project Setup Assignment

1. What is NPM?
NPM stands for Node Package Manager. It is a tool used to install, manage, and update JavaScript packages and libraries needed for a project. It helps developers easily install tools like React and Vite.

2. What is package.json?
package.json is a file that contains important information about a project such as the project name, dependencies, version, and commands used to run the project. It helps manage the project structure and tools.

3. What is Vite?
Vite is a modern development tool used to quickly build and run fast web applications like React. It provides a faster development experience compared to older tools.

4. How I Set Up My React Project
Here is a step by step guide: 
1. Installed Node.js
2. Created a React project using Vite
3. Installed project dependencies using npm install
4. Ran the project using npm run dev
5. Uploaded the project to GitHub

















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
