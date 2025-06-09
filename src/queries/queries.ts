import type { Todo } from '@/types/todo';

// Example query for fetching todos
export const todosQuery = () => ({
  queryKey: ['todos'],
  queryFn: async (): Promise<Todo[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
  retry: false,
});
