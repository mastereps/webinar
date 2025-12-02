import pathwaysProficient from "../../assets/images/bb_pathwaytoproficientreader.png";
import metacognitiveCurriculum from "../../assets/images/bb_metacognitiv.png";
import beyondOrdeal from "../../assets/images/bb_beyondordea.png";
import WorksheetsESLTeaching from "../../assets/images/bb_beyondworsheet.png";
import ReflectiveTeacher from "../../assets/images/bb_thereflectiveteacherinclassroo.png";
import { FiEye } from "react-icons/fi";

const FeaturedBooksSection = () => {
  return (
    <section className="text-center mt-20 min-[1100px]:max-w-[1100px] mx-auto">
      <header className="mb-11">
        <p className="headline-gradient text-lg font-text uppercase tracking-[0.05em] mb-4 font-bold">
          Inspiring Stories • Real-World Applications • Practical Lessons
        </p>
        <h2 className="font-heading uppercase text-5xl">
          DISCOVER YOUR NEXT GREAT READ
        </h2>
      </header>
      <div className="book_slider flex">
        {/* First Item */}
        <div className="bs_item relative max-w-56  cursor-pointer">
          <div className="bs-img max-h-56">
            <img
              src={pathwaysProficient}
              alt="Book"
              width={225}
              height={225}
              className="object-contain w-56 h-56"
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
          <div className="bs-description">
            <a href="#" className="uppercase ">
              <h3 className="font-bold mb-2">
                {" "}
                Pathways to Proficient Readers
              </h3>
              <span>₱2,400.00 PHP</span>
            </a>
          </div>
        </div>
        <div className="bs_item relative max-w-56  cursor-pointer">
          <div className="bs-img max-h-56">
            <img
              src={WorksheetsESLTeaching}
              alt="Book"
              width={225}
              height={225}
              className="object-contain w-56 h-56"
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
          <div className="bs-description">
            <a href="#" className="uppercase ">
              <h3 className="font-bold mb-2">
                {" "}
                Beyond Worksheets in ESL Teaching
              </h3>
              <span>₱2,400.00 PHP</span>
            </a>
          </div>
        </div>
        {/* Second Item */}
        <div className="bs_item relative max-w-56 cursor-pointer">
          <div className="bs-img max-h-56">
            <img
              src={metacognitiveCurriculum}
              alt="Book"
              width={225}
              height={225}
              className="object-contain w-56 h-56"
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
          <div className="bs-description">
            <a href="#" className="uppercase ">
              <h3 className="font-bold mb-2">
                {" "}
                Metacognitive strategy use and curriculum design
              </h3>
              <span>₱2,400.00 PHP</span>
            </a>
          </div>
        </div>
        {/* Third Item */}

        {/* Fourth Item */}

        <div className="bs_item relative max-w-56  cursor-pointer">
          <div className="bs-img max-h-56">
            <img
              src={beyondOrdeal}
              alt="Book"
              width={225}
              height={225}
              className="object-contain w-56 h-56"
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
          <div className="bs-description">
            <a href="#" className="uppercase ">
              <h3 className="font-bold mb-2">
                {" "}
                Beyond the Ordeal: Book of Poems
              </h3>
              <span>₱2,400.00 PHP</span>
            </a>
          </div>
        </div>
        {/* Fifth Item */}
        <div className="bs_item relative max-w-56  cursor-pointer">
          <div className="bs-img max-h-56">
            <img
              src={ReflectiveTeacher}
              alt="Book"
              width={225}
              height={225}
              className="object-contain w-56 h-56"
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
          <div className="bs-description">
            <a href="#" className="uppercase ">
              <h3 className="font-bold mb-2">
                {" "}
                The Reflective Teacher in the Classroom
              </h3>
              <span>₱2,400.00 PHP</span>
            </a>
          </div>
        </div>
        {/* Div End */}
      </div>
    </section>
  );
};

export default FeaturedBooksSection;
