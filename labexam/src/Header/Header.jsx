import React from "react";
import "../pages/header.css"

const Header = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo">DesignX</label>
        <ul>
          <li>
            <a class="active" href="/home">
              Home
            </a>
          </li>
          <li>
            <a href="/adiloro">Adil</a>
          </li>
          <li>
            <a href="/rafayl">Rafay</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
