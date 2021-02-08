## TypeScript + GraphQL Workshop

### Get started

This repository containts a "full-stack" application, for which you need to have both the `server` and `app` running. Therefore you need to run the following command in both directories at the same time:

```
yarn && yarn start
```

After this you'd have a local GraphQL server running on [http://localhost:8080/graphql](http://localhost:8080/graphql) and a local React application at [http://localhost:3000](http://localhost:3000).

### Excercises

1. Run both the server and application using the instructions above. Convert file `app/src/App.jsx` to `app/src/App.tsx` in order to use TypeScript for the appication. After restarting the application using `yarn start` make sure the application by adding the correct types to the `useState` Hook.

Hint: You can use a [generic](https://www.freecodecamp.org/news/react-typescript-how-to-set-up-types-on-hooks/#set-types-on-usestate) to add the type to the React Hook.

