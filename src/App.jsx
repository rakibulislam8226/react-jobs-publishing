import MainLayouts from './layouts/MainLayouts';
import HomePages from './pages/HomePages';
import JobsPages from './pages/JobsPages';
import NotFound from './pages/NotFound';
import JobPage from './pages/JobPage';
import { JobLoader } from './pages/JobPage';
import AddJob from './pages/AddJob';
import JobEditPage from './pages/JobEditPage';

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
  };

  const deleteJob = async (id) => {
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete job');
    }
    else {
      return
    };
  };
  const updateJobSubmit = async (id, updatedJob) => {
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedJob)
    });
    if (!response.ok) {
      throw new Error('Failed to update job');
    }
    else {
      return
    };
  }

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts />} >
        <Route index element={<HomePages />} />
        <Route path='/jobs' element={<JobsPages />} />
        <Route path='/add-job' element={<AddJob addNewJobFormSubmit={addNewJobForm} />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={JobLoader} />
        <Route path='/jobs-edit/:id' element={<JobEditPage updateJobSubmit={updateJobSubmit} />} loader={JobLoader} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />
};

export default App;
