import React from 'react';

import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobsListings';
import ViewAllJobs from '../components/ViewAllJobs';


const HomePages = () => {
    return (
        <div>
            <Hero />
            <HomeCards />
            <JobListings />
            <ViewAllJobs />
        </div>
    )
}

export default HomePages