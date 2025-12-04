import pathwaysProficient from "../../assets/images/bb_pathwaytoproficientreader.png";
import metacognitiveCurriculum from "../../assets/images/bb_metacognitiv.png";
import beyondOrdeal from "../../assets/images/bb_beyondordea.png";
import WorksheetsESLTeaching from "../../assets/images/bb_beyondworsheet.png";
import ReflectiveTeacher from "../../assets/images/bb_thereflectiveteacherinclassroo.png";
import TomeOfKnowledge from "../../assets/images/book_red.png";
import TomeOfWisdom from "../../assets/images/book_purple.png";
import { useEffect, useRef } from "react";
import { FiEye } from "react-icons/fi";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const books = [
  {
    title: "Pathways to Proficient Readers",
    price: "PHP 200.00",
    img: pathwaysProficient,
  },
  {
    title: "Beyond Worksheets in ESL Teaching",
    price: "PHP 400.00",
    img: WorksheetsESLTeaching,
  },
  {
    title: "Metacognitive strategy use and curriculum design",
    price: "PHP 2,400.00",
    img: metacognitiveCurriculum,
  },
  {
    title: "Beyond the Ordeal: Book of Poems",
    price: "PHP 290.00",
    img: beyondOrdeal,
  },
  {
    title: "The Reflective Teacher in the Classroom",
    price: "PHP 499.00",
    img: ReflectiveTeacher,
  },
  {
    title: "Tome of Knowledge",
    price: "PHP 290.00",
    img: TomeOfKnowledge,
  },
  {
    title: "Tome of Wisdom",
    price: "PHP 499.00",
    img: TomeOfWisdom,
  },
];

const FeaturedBooksSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !prevRef.current || !nextRef.current) return;

    // Re-bind nav after refs are set
    swiper.params.navigation = {
      ...(swiper.params.navigation as object),
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    };
    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  return (
    <section className="text-center mt-40 min-[1100px]:max-w-[1100px] mx-auto">
      <header className="mb-11">
        <p className="headline-gradient text-lg font-text uppercase tracking-[0.05em] mb-4 font-bold">
          Inspiring Stories - Real-World Applications - Practical Lessons
        </p>

        <h2 className="font-heading uppercase text-5xl">
          DISCOVER YOUR NEXT GREAT READ
        </h2>
      </header>
      <div className="swiper_wrapper relative">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
            swiper.params.navigation = {
              ...(swiper.params.navigation as object),
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            };
          }}
          pagination={{
            clickable: true,
            bulletClass: "hero-dot",
            bulletActiveClass: "hero-dot-active",
            renderBullet: (index, className) =>
              `<button type="button" class="${className}" tabindex="0" aria-label="Go to slide ${
                index + 1
              }"></button>`,
          }}
          a11y={{
            enabled: true,
            paginationBulletMessage: "Go to slide {{index}}",
          }}
          rewind
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1.3, centeredSlides: true },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="book_slider  relative"
        >
          {books.map((book) => (
            <SwiperSlide
              key={book.title}
              className="flex flex-col items-center"
            >
              <div className="bs_item relative max-w-56 cursor-pointer">
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
                <div className="bs-description mt-3">
                  <a href="#" className="uppercase">
                    <h3 className="font-bold mb-2">{book.title}</h3>
                    <span>{book.price}</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Swiper Navigation */}
        <div className="custom-nav">
          <button ref={prevRef} className="my-prev" aria-label="Previous">
            <span className="sr-only">Prev</span>
          </button>
          <button ref={nextRef} className="my-next" aria-label="Next">
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooksSection;
