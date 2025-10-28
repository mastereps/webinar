// import LoginForm from "./components/LoginForm";

import EventsList from "./components/EventList";
import NavBar from "./components/NavBar";
import SearchInput from "./components/SearchInput";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <NavBar />
      <SearchInput onSearch={(text) => setSearchText(text)} />
      <EventsList searchText={searchText} />
      {/* <LoginForm /> */}
    </>
  );
}

export default App;
