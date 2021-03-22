import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentTab, setCurrentTab] = useState("About Me");

  useEffect(() => {
    document.title =
      currentTab === "Aldrin Burgos"
        ? currentTab
        : `Aldrin Burgos : ${currentTab}`;
  }, [currentTab]);

  const showTab = () => {
    switch (currentTab) {
      case "About Me":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>

      <main>{showTab()}</main>

      <Footer></Footer>
    </div>
  );
}

export default App;
