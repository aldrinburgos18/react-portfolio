import React from "react";

function Footer() {
  return (
    <footer className="flex-row px-1">
      <nav>
        <div className="footer">
          <ul className="flex-row">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/aldrinburgos18"
              >
                <i class="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>⠀⠀ ⠀ </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/aldrin-burgos-057139164/"
              >
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
