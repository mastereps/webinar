import pathwaysProficient from "../../assets/images/bb_pathwaytoproficientreader.png";
import metacognitiveCurriculum from "../../assets/images/bb_metacognitiv.png";
import beyondOrdeal from "../../assets/images/bb_beyondordea.png";
import WorksheetsESLTeaching from "../../assets/images/bb_beyondworsheet.png";
import ReflectiveTeacher from "../../assets/images/bb_thereflectiveteacherinclassroo.png";
import { FiEye } from "react-icons/fi";

const FeaturedBooksSection = () => {
  const books = [
    {
      title: "Pathways to Proficient Readers",
      price: "₱200.00 PHP",
      img: pathwaysProficient,
    },
    {
      title: "Beyond Worksheets in ESL Teaching",
      price: "₱400.00 PHP",
      img: WorksheetsESLTeaching,
    },
    {
      title: "Metacognitive strategy use and curriculum design",
      price: "₱2,400.00 PHP",
      img: metacognitiveCurriculum,
    },
    {
      title: "Beyond the Ordeal: Book of Poems",
      price: "₱290.00 PHP",
      img: beyondOrdeal,
    },
    {
      title: "The Reflective Teacher in the Classroom",
      price: "₱499.00 PHP",
      img: ReflectiveTeacher,
    },
  ];
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
        {books.map((book) => (
          <div
            key={book.title}
            className="bs_item relative max-w-56 cursor-pointer"
          >
            <div className="bs-img max-h-56 relative overflow-hidden">
              <img
                src={book.img}
                alt={book.title}
                width={225}
                height={225}
                className="object-contain w-56 h-56"
              />
              <div className="bs-content-hover">
                <div className="absolute z-20 top-7 right-5 group">
                  <div className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 -translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                    <div className="relative font-text bg-lantern text-white text-sm font-semibold px-3 py-1 rounded shadow-lg whitespace-nowrap">
                      Quick view
                      <span className="absolute top-1/2 right-[-7px] -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-lantern"></span>
                    </div>
                  </div>
                  <button className="fi_eye cursor-pointer flex h-10 w-10 items-center justify-center rounded-full dark:bg-white bg-black shadow-md opacity-0 transition-all duration-200 hover:scale-110">
                    <FiEye className="dark:text-black text-white" />
                  </button>
                </div>
                <button className="book_cta absolute cursor-pointer inline-block px-8 py-3 font-text font-bold uppercase tracking-[0.08em] bg-lantern text-white transition-all duration-300 hover:bg-lantern hover:text-white hover:shadow-[0_10px_30px_rgba(97,176,139,0.35)] dark:hover:bg-white dark:hover:text-black dark:hover:shadow-[0_0_0_.2rem_#fff] z-20 bottom-6 left-1/2 w-[95%]">
                  Get Copy
                </button>
              </div>
            </div>
            <div className="bs-description">
              <a href="#" className="uppercase">
                <h3 className="font-bold mb-2">{book.title}</h3>
                <span>{book.price}</span>
              </a>
            </div>
          </div>
        ))}
        {/* Div End */}
      </div>
    </section>
  );
};

export default FeaturedBooksSection;
