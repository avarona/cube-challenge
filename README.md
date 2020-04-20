# Frontend Project

## Requirements

This simple ecommerce site is almost complete! There are a few UX issues and bugs that you need to address to get us to the finish line. You can ask any question beforehand about requirements or tasks if something isn't clear, as with any client project: [Ask Us](mailto:keith@cubesoftware.com?&cc=ash@cubesoftware.com&subject=Question%20about%20code%20challenge)

This should only take an hour or two, but take as long as you need. We expect you to do this on your own without help from anyone else. Answers are not found online. We expect you to fork this repo and treat it like a real client project. We're expecting the same level of care, good code, good commits, good questions, and to answer the questions bellow when you turn in your project. You'll be questioned about choices you made for solving the tasks.

Other than that, you can get it done however you see fit. We'll talk soon!

### Catalog

- Add a text input to filter the products by name. Below the input include a text that shows the count of the products filtered. For example: `10 products found`.
- Show products as `Out of Stock` when the inventory count is 0.
- When products are `Out of Stock`
  - Desaturate the photo of the product
  - Hide the `Add to Cart` button

### Cart

- The cart should only list products once.
  - Add a number input that allows users to update their quantity or reflects the amount of times `Add to Cart` was clicked on the product. The quantity cannot be more than the inventory count.
  - Calculate price accordingly
  - Remove the product from cart with a `Remove` button
- There should be a count next to the `Cart` heading that lists the number of unique products added to cart. For example: `Cart (3)`.
- A `Total` section with the checkout amount for the cart.

### Follow Up

- Explain the flow of data from the store to the UI and back as simply as you can.
  
  Redux flow is unidirectional. Components dispatch actions with a certain payload that updates the global state (ie. store) via the reducer. Data is immutable, and the reducer copies a piece of the state (determined by the action) and updates it. Selectors return derived data from the store which are rendered by the component.
- How else can we improve the experience of the site? What suggestions can you make to the product team and the development team?
  
  Define how to load the products on the page (pagination or lazy loading) to optimize performance as the list of products grows
  Keep accessibility in mind by using HTML5 tags and making sure the html layout is semantic (looks good)
  Hide cart and have a toggle to open/close for a less cluttered UI and better UX
  Edit responsive breakpoints and make sure badges and images resize (or disappear) accordingly
  Add transitions for hovers, clicks, etc. (cosmetic changes)
- What recommendations can you make to the development team for scalability?
  
  Add tests (unit for functionality, snapshots for UI regressions, and e2e for page flow)
  Typings (flow or TS) to mitigate bugs
  A system design to separate base components in order to make them reusable (eg. Button, Input).
  Ejecting from CRA to have more customization options and control over the entire app (ie. webpack config, path aliases)
- What knowledge up front could have helped this go smoother or faster?
  
  The instructions were pretty straight foward. I considered tackling some ambitious UI styling, like refining the responsiveness, but I didn't since I would've taken longer to complete the assignment and it seemed out of it's scope.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template. -- **Don't worry about building, testing or hosting. We'll pull down your code and evaluate it locally. Targeting latest Chrome on latest MacOS.**

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

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More About CRA

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
