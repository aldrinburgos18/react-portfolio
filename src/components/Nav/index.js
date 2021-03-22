import React from "react";

function Nav(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header className="flex-row px-1">
      <nav>
        <div className="navbar">
          <ul className="flex-row">
            <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
              <span onClick={() => setCurrentTab("About Me")}>about me</span>
            </li>
            <li
              className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}
            >
              <span onClick={() => setCurrentTab("Portfolio")}>my works</span>
            </li>
            <li
              className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}
            >
              <span onClick={() => setCurrentTab("Contact")}>contact me</span>
            </li>
            <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
              <span onClick={() => setCurrentTab("Resume")}>resumé</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
