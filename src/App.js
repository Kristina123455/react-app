import "./App.css";
import "./components/NavBar";
import NavBar from "./components/NavBar";
import Books from "./components/Books";
import SavedBooks from "./components/SavedBooks";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  //let booksText = 0;
  const [booksText, setBooksText] = useState(0);
  const books = [
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
    {
      id: 4,
      title: "Banana",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ];
  function addBook(title) {
    console.log("dodato: " + title);
    setBooksText(booksText + 1);
  }

  return (
    <BrowserRouter className="App">
      <NavBar booksText={booksText}></NavBar>
      <Routes>
        <Route path="/" element={<Books books={books} onAdd={addBook} />} />
        <Route path="/savedBooks" element={<SavedBooks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
