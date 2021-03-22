import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const showTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <ContactForm />;
      case "resume":
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
