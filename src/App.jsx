import MainLayouts from './layouts/MainLayouts';
import HomePages from './pages/HomePages';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayouts />} >
      <Route index element={<HomePages />} />
    </Route>
  )
);


const App = () => {
  return <RouterProvider router={routes} />
};

export default App;
