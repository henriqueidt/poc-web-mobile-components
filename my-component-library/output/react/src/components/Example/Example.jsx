import * as React from "react";
import { useState } from "react";

function Example(props) {
  const [name, setName] = useState(() => "Henrique");

  return (
    <>
      <div>
        <input
          className="input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        Hello! I can run in React and React Native!
      </div>
      <style jsx>{`
        .input {
          color: red;
        }
      `}</style>
    </>
  );
}

export default Example;
