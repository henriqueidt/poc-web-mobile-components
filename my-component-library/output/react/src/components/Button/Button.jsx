import * as React from "react";

function Button(props) {
  return <button onClick={(e) => props.onClick(e)}>Click here</button>;
}

export default Button;
