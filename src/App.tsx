// import LoginForm from "./components/LoginForm";
//
// import EventsList from "./components/EventList";
// import NavBar from "./components/NavBar";
// import SearchInput from "./components/SearchInput";

import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/ExpenseFilter";

// import Expandable from "./tutorial/Expandable";

// import Message from "./tutorial/Message";

function App() {
  // const [searchText, setSearchText] = useState("");
  // const [topic, setTopic] = useState("All");
  // const [order, setOrder] = useState("dateAsc");
  interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
  }
  // FIXME: Tutorial
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "Coffee", amount: 120.25, category: "Groceries" },
    { id: 2, description: "Grab", amount: 250.25, category: "Utilities" },
    { id: 3, description: "wesa", amount: 350, category: "Utilities" },
    { id: 4, description: "ewas", amount: 450, category: "Entertainment" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  //onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id)) }

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
      // <EventsList searchText={searchText} topic={topic} order={order} /> */}
      {/* <LoginForm /> */}
      {/* FIXME: Tutorial */}
      <div className="mb-10">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </>
  );
}

export default App;

/*Button
import { useState } from "react";

import Aletrt from "./tutorial/Aletrt";

import Button from "./tutorial/Button";


      {
         {open && <Aletrt onClose={() => setOpen(false)} />}
      <Button color="purple" onClick={() => setOpen(true)}>
        I'am a button
      </Button>
      }

        const [open, setOpen] = useState(false);



         */
