import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const headerTitle = "arlen contact manager";

  const contacts = [
    {
      id: 1,
      name: "Sri Ram",
      email: "sai@gmail.com",
      phone: "9099899894",
    },
    {
      id: 2,
      name: "Priya Kala",
      email: "priya@gmail.com",
      phone: "7778699895",
    },
  ];

  return (
    <div>
      <Header title={headerTitle} />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
