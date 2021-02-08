import * as React from 'react';
import { useGetListQuery } from './generated/graphql';

function App() {
  const { loading, error, data } = useGetListQuery();

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
