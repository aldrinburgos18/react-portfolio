import React from "react";

function Nav(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header className="flex-row px-1">
      <nav>
        <div className="navbar">
          <ul className="flex-row">
            <li
              className={currentTab === "About Me" ? "mx-2 navActive" : "mx-2"}
            >
              <span onClick={() => setCurrentTab("About Me")}>about me</span>
            </li>
            <li
              className={currentTab === "Portfolio" ? "mx-2 navActive" : "mx-2"}
            >
              <span onClick={() => setCurrentTab("Portfolio")}>my works</span>
            </li>
            <li
              className={currentTab === "Contact" ? "mx-2 navActive" : "mx-2"}
            >
              <span onClick={() => setCurrentTab("Contact")}>contact me</span>
            </li>
            <li className={currentTab === "Resume" ? "mx-2 navActive" : "mx-2"}>
              <span onClick={() => setCurrentTab("Resume")}>resumé</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
