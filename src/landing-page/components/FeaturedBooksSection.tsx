import bookGreen from "../../assets/images/book_green.png";
import { FiEye } from "react-icons/fi";

const FeaturedBooksSection = () => {
  return (
    <section className="text-center mt-20">
      <header className="mb-11">
        <p className="headline-gradient text-lg font-text uppercase tracking-[0.05em] mb-4 font-bold">
          Inspiring Stories • Real-World Applications • Practical Lessons
        </p>
        <h2 className="font-heading uppercase text-5xl">
          DISCOVER YOUR NEXT GREAT READ
        </h2>
      </header>
      <div className="book_slider">
        {/* First Item */}
        <div className="bs_item relative w-full h-full max-w-56 max-h-56 cursor-pointer overflow-hidden">
          <div className="bs-img">
            <img
              src={bookGreen}
              alt="Book"
              width={225}
              height={225}
              className="p-10 w-56 h-56"
            />
          </div>
          <div className="bs-content-hover">
            <div className="absolute z-20 top-7 right-5 group">
              <div className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 -translate-x-3 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 transition-all duration-200">
                <div className="relative font-text bg-lantern text-white text-sm font-semibold px-3 py-1 rounded shadow-lg whitespace-nowrap">
                  Quick view
                  <span className="absolute top-1/2 right-[-7px] -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-lantern"></span>
                </div>
              </div>

              <button className="fi_eye cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md  opacity-0 transition-all  duration-200 hover:scale-110">
                <FiEye className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooksSection;
