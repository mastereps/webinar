// import LoginForm from "./components/LoginForm";

import NavBar from "./components/NavBar";
import LandingPage from "./landing-page/LandingPage";
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
      <LandingPage />
      {/* <SearchInput
        onSearch={(text) => setSearchText(text)}
        topic={topic}
        onTopicChange={setTopic}
        order={order}
        onOrderChange={setOrder}
      />
      <EventsList searchText={searchText} topic={topic} order={order} />
     <LoginForm /> */}
    </>
  );
}

export default App;
