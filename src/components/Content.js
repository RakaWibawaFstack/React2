import React from "react";

function Content(props) {
    return (
      <div>
        <p>{props.children}</p>
      </div>
    );
  }

export default Content;