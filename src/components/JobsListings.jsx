import JobListing from './JobListing';
import { useState, useEffect, React } from 'react';
import Spinner from './Spinner';

function JobsListings({ lastThreeJobs = false }) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            const apiUrl = lastThreeJobs ? '/api/jobs?_limit=3' : '/api/jobs';
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []);

    const showJobs = () => {
        if (loading) return <Spinner loading={loading} />
        if (jobs.length === 0) return <div className='text-center text-lg mt-10 italic'>No jobs found</div>
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <JobListing key={job.id} {...job} />
                ))}
            </div>
        )
    }

    return (
        <div>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        Browse Jobs
                    </h2>

                    {/* <!-- Job Listing --> */}
                    {showJobs()}
                </div>
            </section>
        </div>
    )
}

export default JobsListings


