import React from "react";

function Footer(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <footer className="flex-row px-1">
      <nav>
        <div className="footer">
          <ul className="flex-row">
            <li class="facebook">
              <a href="https://www.facebook.com/aldrin.burgos/">
                <i class="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>⠀⠀ ⠀ </li>
            <li class="facebook">
              <a href="https://www.facebook.com/aldrin.burgos/">
                <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
