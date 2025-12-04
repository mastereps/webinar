// import LoginForm from "./components/LoginForm";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./landing-page/LandingPage";
import Footer from "./pages/Footer";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy";
// import EventsList from "./components/EventList";
// import SearchInput from "./components/SearchInput";
// import { useState } from "react";

function App() {
  // const [searchText, setSearchText] = useState("");
  // const [topic, setTopic] = useState("All");
  // const [order, setOrder] = useState("dateAsc");

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
