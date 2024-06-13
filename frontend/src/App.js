import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home.js";
import AddEdit from "./pages/AddEdit.js";
import View from "./pages/View.js";
import About from "./pages/About.js";
import Header from "./components/Header.js";

function App() {
  return (
    <BrowserRouter position="top-center">
      <div className="App">
        <Header />
        <ToastContainer  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
