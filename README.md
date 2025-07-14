# Busha Frontend test

## Requirements

Create the screens for a Busha MVP application.

| View              | Links                                                                                |
| ----------------- | ------------------------------------------------------------------------------------ |
| Account List  | [Issue](issues/account-list.md) • [Tests](src/tests/account-list.test.tsx)   |
| Add Account    | [Issue](issues/add-wallet.md) • [Tests](src/tests/add-wallet.test.tsx)       |

## Guidelines

- Satisfy the requirements using TypeScript and React.

- Make use of, but don't change, the dependencies in [`package.json`](package.json).

- Make use of, but don't change, the components in [`src/components/shared`](src/components/shared). See examples in [`src/stories`](src/stories).

- Don't change the tests in [`src/tests`](src/tests).

## Submission

When the tests pass, and the UI resembles the figma design, archive your work in a `.zip` file and send it to bolaji@busha.co with your CV. _Do not include `node_modules` in the `.zip` file._
Or submit a pull request

## Feedback

Something we can improve? Email bolaji@busha.com.

## Available Scripts
### Setup

```sh
yarn install
```

Requires [Node](https://nodejs.org) and [NPM](https://www.npmjs.com/).

### Develop

```sh
yarn start
```

Use the exposed JSON server [API Docs](https://my-json-server.typicode.com/bushaHQ/busha-frontend-test)

Alternatively, [JSON Server](https://github.com/typicode/json-server) will start on port 3090 and [Create React App](https://github.com/facebook/create-react-app) will start on port 3000.



### Reset Database
```sh
yarn run db:reset
```
You might want to reset the database if the request to `GET /wallets`  returns an empty list 🙂.

### Storybook

```sh
yarn run storybook
```

[Storybook](https://storybook.js.org) will start on port 6006.

### Test

```sh
yarn test
```

Tests are written with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Typescript.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
