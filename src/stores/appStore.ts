import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AppStore = {
  theme: 'dark' | 'light';
  switchTheme: () => void;
};

const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      theme: 'light',
      switchTheme: () => {
        set((state) => ({
          theme: state.theme === 'dark' ? 'light' : 'dark',
        }));
      },
    }),
    {
      name: 'app-data',
    },
  ),
);

export default useAppStore;
