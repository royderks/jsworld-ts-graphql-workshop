import * as React from 'react';
import { useQuery, gql } from '@apollo/client';
import { ListItem } from './generated/graphql';

const query = gql`
  query {
    list {
      name
      categoryName
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery<{
    list: ListItem[];
  }>(query);

  const { list } = data || {};

  return (
    <div className='App'>
      <header className='App-header'>
        <p>TypeScript + GraphQL</p>
      </header>
      <div>
        <ul>
          {list &&
            list.length &&
            list.map(({ name, categoryName }) => (
              <li>
                {name} - {categoryName}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
