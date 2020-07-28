import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aleksei Zaiats</title>
        </Helmet>
      <div className="portfolio">
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
