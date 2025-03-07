
import Hero from "./components/hero";
import Features from "./components/features";
import AboutUs from "./components/about";
import CourseCarousel from "./components/coursees";
import ExploreCourses from "./components/explore";
import ExpertInstructors from "./components/expert-instrutor";
import ReviewCarousel from "./components/review";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <AboutUs />
      <CourseCarousel />
      <ExploreCourses />
      <ExpertInstructors />
      <ReviewCarousel />
      <Footer />
    </div>
  );
}
