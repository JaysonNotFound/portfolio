import React from "react";

import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Skills from "./components/skills/skills";

import "./styles/app.scss";

const App = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main className="main">
        <Home />
        <Skills />
      </main>
    </>
  );
};

export default App;
