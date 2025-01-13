import MainLayouts from './layouts/MainLayouts';
import HomePages from './pages/HomePages';
import JobsPages from './pages/JobsPages';
import NotFound from './pages/NotFound';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayouts />} >
      <Route index element={<HomePages />} />
      <Route path='/jobs' element={<JobsPages />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);


const App = () => {
  return <RouterProvider router={routes} />
};

export default App;
