import About from "./components/About";
import Credibility from "./components/Credibility";
import FeaturedBooksSection from "./components/FeaturedBooksSection";
import Hero from "./components/Hero";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedBooksSection />
      <Credibility />
    </>
  );
};

export default LandingPage;
