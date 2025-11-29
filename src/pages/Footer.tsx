const Footer = () => {
  return (
    <footer className="border-t   border-lantern/50 mt-32">
      <div className="footer-content py-10 flex justify-between items-center max-w-full min-[1100px]:max-w-[1100px] mx-auto">
        <p className="footer-text">&copy; Train With Cequeña</p>
        <a
          className="transition-all duration-300 ease-in-out hover:text-lantern"
          href="#"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
