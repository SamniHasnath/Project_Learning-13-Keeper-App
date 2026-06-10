import React from "react";

function Header(props) {
  return (
    <header>
      <h1>Keeper App</h1>

      <button className="dark-toggle" onClick={props.toggleDark}>
        🌙
      </button>
    </header>
  );
}

export default Header;