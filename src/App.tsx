import Router from '@/router/router';
import useAppStore from './stores/appStore';
import './App.css';

function App() {
  // Example usage of a zustand store, delete theme if not needed
  const theme = useAppStore((state) => state.theme);

  return (
    <main id="app" data-theme={theme}>
      <Router />
    </main>
  );
}

export default App;
