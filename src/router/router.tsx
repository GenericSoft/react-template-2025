import { Route, Routes } from 'react-router';

import Home from '@/pages/home/Home';
import NotFound from '@/pages/error/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
