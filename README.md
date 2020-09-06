# Peter Whyte / Which? Frontend Tech Test

This is the exercise for the Which? interview process. 

I have added my thoughts here to explain the decisions i made in this solution to the exercise stated below;

## The Exercise
**Goal**: Production of a client-side Web application to help a child understand multiplication.

**Description**: The application will display a grid of all the numbers from 1 to 144 evenly laid out with a large clickable box around each number. The number should be centered in each box. When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way. Clicking on a second number removes the highlighting of the previous selection, then highlights the multiples of the newly selected number.

## Additional libraries used and why
The biggest change was to introduce **React** to the project. 
I decided to do this due the performance benefits, production quality of code and ease of use to get the exercise up and running. Creating components that can be reused and individually tested is a big plus in ensuring that the highest quality is met. 

The following is a list of the Languages/Technology and Libraries used:
* `storybook`: I used this to quickly build the conponents for this exercise, its also a great way to document all components.
* `storybook/addon-a11y`: I used `addon-a11y` with storybook to test the components in storybook for accessibility. It's great to have each component automatically tested for any accessibility issues within the tool you are using. 
* `storybook/addon-knobs`: I think using this addon really helps to test edge cases and see the same component with different content and in different states.
* `Styled-components`: This is a great way to keep everything together in one component: Markup, styles and any logic.
* `Create React App`: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). it is a great, quick and easy way to spin up a React project.
* `Node v14`: I used the latest LTS version of Node for this task, which is version 14 - therefore please use `nvm` to run Node v14 to test with. 

--- 

## Running the exercise
Running the app takes only one command. 

If using **nvm** you can use the following. `nvm use && npm install && npm start`.

Otherwise, please install node version 14 and run `npm install && npm start`.

This will download all depencies of thte project and start the Node server and run the project. The frontend can then be seen by navigating to `http://localhost:3000/` in your web browser.

--- 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run storybook`

Launches the storybook web server, where you can view and interact with the components used in this project. 
 
---
## If I hade more time
I spent a little over two hours on writing the test, putting the components together on the page and making it behave as expected. 

Improvements could have been made to add all the components to Storybook and writing some basic tests around each component as seen with the `<Title />` component. 

One last library i would have used would be `prop-types`. Adding this to the project would catch any stray input values and catch any needless bugs from entering the codebase. Since this is a small code base, then it will be ok, for now, until it grows and then tools like this can really show their worth. 