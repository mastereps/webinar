const Credibility = () => {
  return (
    <section className="text-center mt-16">
      <header className="mb-11">
        <p className=" headline-gradient text-lg font-text uppercase tracking-[0.05em] mb-4 font-bold">
          Recognized in Education and Research
        </p>
        <h2 className=" font-heading uppercase text-5xl">
          Trusted by Educators and Learning Communities Worldwide
        </h2>
      </header>
      <div>
        <p className="text-2xl max-w-[75ch] mx-auto mb-7">
          My training programs, books, and research-based materials have
          supported educators, academic leaders, and homeschool communities
          across the Philippines and internationally helping them strengthen
          their teaching strategies and improve learner outcomes.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#"
            className="inline-block mt-4 px-8 py-3 font-text font-bold uppercase tracking-[0.08em] bg-lantern text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_0_.2rem_#fff] rounded-sm"
          >
            Reserve Your Spot
          </a>
          <a
            href="#"
            className="inline-block mt-4 px-8 py-3 font-text font-bold uppercase tracking-[0.08em] bg-[#ef3f37] text-white transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_0_.2rem_#fff] rounded-sm"
          >
            Get Your Copy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
