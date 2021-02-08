import * as React from 'react';
import { request, gql } from 'graphql-request';
import { ListItem } from './generated/graphql';

function App() {
  const [data, setData] = React.useState<ListItem[]>([]);

  const query = gql`
    query {
      list {
        name
        categoryName
      }
    }
  `;

  React.useEffect(() => {
    request('http://localhost:8080/graphql', query).then((data) => {
      setData(data.list);
    });
  }, [query]);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>TypeScript + GraphQL</p>
      </header>
      <div>
        <ul>
          {data.length &&
            data.map(({ name, categoryName }) => (
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
