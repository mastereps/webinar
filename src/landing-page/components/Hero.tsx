import HeroBanner from "../../assets/hero-webinar.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative before:content-[''] before:absolute before:inset-0 before:bg-black/75 before:z-20 before:pointer-events-none after:content-['']
    after:absolute
    after:inset-0
    after:bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.65)_0%,_rgba(0,0,0,0)_52%,_rgba(0,0,0,0)_100%)]
    after:z-20
    after:pointer-events-none h-screen"
    >
      <img
        src={HeroBanner}
        alt="Banner"
        className="h-full w-screen object-cover"
      />
    </section>
  );
};

export default Hero;
