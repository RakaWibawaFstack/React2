import React from "react";

function Header(props) {
    return (
      <div className="Header">
        <p className="text-header">
          {props.text} | {props.name}
        </p>
        <br/>

      </div>
    );
  }

  export default Header;