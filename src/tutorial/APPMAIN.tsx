// import LoginForm from "./components/LoginForm";
//
// import EventsList from "./components/EventList";
// import NavBar from "./components/NavBar";
// import SearchInput from "./components/SearchInput";
// import { useState } from "react";

import Aletrt from "./tutorial/Aletrt";
import ListGroup from "./tutorial/ListGroup";

function App() {
  const barangays = ["Bangad", "Batingan", "Bombong", "Angono"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  // const [searchText, setSearchText] = useState("");
  // const [topic, setTopic] = useState("All");
  // const [order, setOrder] = useState("dateAsc");
  return (
    <>
      {/* <NavBar /> */}
      {/* <SearchInput
        onSearch={(text) => setSearchText(text)}
        topic={topic}
        onTopicChange={setTopic}
        order={order}
        onOrderChange={setOrder}
      />
      <EventsList searchText={searchText} topic={topic} order={order} /> */}
      {/* <LoginForm /> */}
      {/* FIXME: Tutorial */}
      <ListGroup
        barangays={barangays}
        onSelectItem={handleSelectItem}
        heading="Island"
      />
      <Aletrt />
    </>
  );
}

export default App;
