## TypeScript + GraphQL Workshop

### Get started

This repository containts a "full-stack" application, for which you need to have both the `server` and `app` running. Therefore you need to run the following command in both directories at the same time:

```
yarn && yarn start
```

After this you'd have a local GraphQL server running on [http://localhost:8080/graphql](http://localhost:8080/graphql) and a local React application at [http://localhost:3000](http://localhost:3000).

### Excercises

1. Run both the server and application using the instructions above. Have a look at the GraphiQL explorer on [http://localhost:8080/graphql](http://localhost:8080/graphql), what does the GraphQL schema look like?

Convert file `app/src/App.jsx` to `app/src/App.tsx` in order to use TypeScript for the appication. After restarting the application using `yarn start` make sure the application by adding the correct types to the `useState` Hook.

Hint: You can use a [generic](https://www.freecodecamp.org/news/react-typescript-how-to-set-up-types-on-hooks/#set-types-on-usestate) to add the type to the React Hook.

2. Also display the category name of every item in the list of the React application. What changes do you have to make to support this type?


3. Add a new field to the GraphQL Schema that is called `categoryName` (this logic is already present in the resolver). What changes do you have to make at the application in order to render the list from the server correctly?

BONUS: Deprecate the `Category` type in the GraphQL schema as we're no longer using this.