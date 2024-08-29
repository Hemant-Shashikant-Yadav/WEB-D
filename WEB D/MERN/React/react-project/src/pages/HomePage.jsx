import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import { ViewAllJobs } from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Prop Title from app.jsx"
        subtitle="Prop subtitle from app.jsx"
      />
      <HomeCard />

      <JobListings isHome={true}/>

      <ViewAllJobs />
    </>
  );
};

export default HomePage;
