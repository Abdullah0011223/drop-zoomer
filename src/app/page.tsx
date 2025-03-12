
import Hero from "./components/hero";
import Features from "./components/features";
import AboutUs from "./components/about";
import CourseCarousel from "./components/coursees";
import ReviewCarousel from "./components/review";

import ExpertInstructors1 from "./components/expert-instrutor";
import Explore from "./components/explore";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <AboutUs />
      <CourseCarousel />
      <Explore />
      <ExpertInstructors1 />
      <ReviewCarousel />
     
    </div>
  );
}
