import { TodosAPI } from '@/api/todos';

// Example query for fetching todos
export const todosQuery = () => ({
  queryKey: ['todos'],
  queryFn: () => TodosAPI.getTodos(),
  retry: false,
  staleTime: 5 * 60 * 1000, // Data considered fresh for 5 minutes
  cacheTime: 10 * 60 * 1000, // Cache data for 10 minutes
});
