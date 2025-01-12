import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JobsListing from "./components/JobsListings";
import ViewAllJobs from "./components/ViewAllJobs";
import HomeCards from "./components/HomeCards";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobsListing />
      <ViewAllJobs />
    </>
  )
}

export default App
