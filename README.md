## TypeScript + GraphQL Workshop

### Get started

This repository contains a "full-stack" application, for which you need to have both the `server` and `app` running. Therefore you need to run the following command in both directories at the same time:

```
yarn && yarn start
```

After this, you'd have a local GraphQL server running on [http://localhost:8080/graphql](http://localhost:8080/graphql) and a local React application at [http://localhost:3000](http://localhost:3000).

### Exercises

1. Run both the server and application using the instructions above. Have a look at the GraphiQL explorer on [http://localhost:8080/graphql](http://localhost:8080/graphql), what does the GraphQL schema look like?

Convert file `app/src/App.jsx` to `app/src/App.tsx` in order to use TypeScript for the application. After restarting the application using `yarn start` make sure the application by adding the correct types to the `useState` Hook.

Hint: You can use a [generic](https://www.freecodecamp.org/news/react-typescript-how-to-set-up-types-on-hooks/#set-types-on-usestate) to add the type to the React Hook.

2. Add a new field to the GraphQL Schema that is called `categoryName` (this logic is already present in the resolver). What changes do you have to make at the application in order to render the list from the server correctly?

BONUS: Deprecate the `Category` type in the GraphQL schema as we're no longer using this.

3. Install `graphql-codegen`([here](https://graphql-code-generator.com/docs/getting-started/installation)) and generate the types for your query automatically using the [built-in CLI](https://graphql-code-generator.com/docs/getting-started/installation).

Hint: Make sure to comment out the `documents` line in the configuration file for `graphql-codegen` as you won't be using this for now.

BONUS: Try converting back to using the nested `category` field in your query, and see what happens if you regenerate the TypeScript types using `graphql-codegen`.

4. Instead of `graphql-request` you can also use `@apollo/client` for data fetching from your GraphQL server. Follow the steps in the [Apollo documentation](https://www.apollographql.com/docs/react/get-started/#installation) install `@apollo/client` and to add a `Client`, `Provider` and a `useQuery` Hook to fetch the data. Use the types previously generated by `graphql-codegen` on the `useQuery` Hook.

5. With `graphql-codegen` you can automagically create a type-safe `useQuery` Hook based on your query. Add a file called `query.graphql` in the `src` directory of your application, add the necessary configuration to `app/codegen.yaml` and install the plugin for `@apollo/client`. After this you should be able to run the `graphql-codegen` generator command again and a type-safe `useQuery` Hook will be present in your `generated.tsx` file.

Hint: More info on adding support for `@apollo/client` in `graphql-codegen` can be found [here](https://graphql-code-generator.com/docs/plugins/typescript-react-apollo).

Hint: Name your GraphQL query in order to have a Hook generated based on its name.