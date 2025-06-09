import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import viteLogo from '/vite.svg';
import reactLogo from '@/assets/react.svg';

import type { Todo } from '@/types/todo';
import { todosQuery } from '@/queries/queries';

import './Home.css';

function Home() {
  const [count, setCount] = useState(0);
  // Example usage of a query
  const { data: todos, isLoading, error } = useQuery<Todo[]>(todosQuery());

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/pages/Home.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="todos-section">
        <h2>Example Tanstack Query usage: Todos from API</h2>
        {isLoading && <p>Loading todos...</p>}
        {error && <p>Error loading todos: {error.message}</p>}
        {todos && (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  padding: '10px',
                  margin: '10px 0',
                  backgroundColor: 'rgb(26, 26, 26)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span>{todo.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default Home;
