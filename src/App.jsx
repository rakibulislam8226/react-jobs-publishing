import MainLayouts from './layouts/MainLayouts';
import HomePages from './pages/HomePages';
import JobsPages from './pages/JobsPages';
import NotFound from './pages/NotFound';
import JobPage from './pages/JobPage';
import { JobLoader } from './pages/JobPage';
import AddJob from './pages/AddJob';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const App = () => {
  const addNewJobForm = async (newJob) => {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    if (!response.ok) {
      throw new Error('Failed to add job');
    }
    else {
      return
    }

  }

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts />} >
        <Route index element={<HomePages />} />
        <Route path='/jobs' element={<JobsPages />} />
        <Route path='/add-job' element={<AddJob addNewJobFormSubmit={addNewJobForm} />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={JobLoader} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />
};

export default App;
