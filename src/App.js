import React, { useState } from "react";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Nav from "./components/Nav";
import Resume from "./components/Resume";

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const showTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      /* case "works":
        return <Works />; */
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
    </div>
  );
}

export default App;
