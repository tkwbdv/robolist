import React from "react";

const Scroll = (props) => {  // props contains children even if we dont explicitly pass a prop called like that
  return (
    <div style={{ overflowY: "scroll", border: "5px solid black", height: "1000px" }}> {/* {{}} because we are in JSX. {} means JS expression, second {} JS object.*/}
      {props.children}
    </div>
  );
}

export default Scroll;