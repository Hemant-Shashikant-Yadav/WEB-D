import JobListing from "./JobListing";
import jobs from "../jobs.json";

const JobListings = ({ isHome }) => {
  const Job = isHome ? jobs.jobs.slice(0, 3) : jobs.jobs;
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Job.map((j, i) => (
              <JobListing key={i} job={j} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListings;
