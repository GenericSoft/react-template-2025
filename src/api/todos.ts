import type { Todo } from '@/types/todo';
import axiosInstance from './axios';

export const TodosAPI = {
  getTodos: (limit = 5) => {
    return axiosInstance.get<Todo[]>(`/todos`, {
      params: {
        _limit: limit,
      },
    });
  },
};
