import { useState } from "@builder.io/mitosis";

export default function Example() {
  const [name, setName] = useState("Henrique");

  return (
    <div>
      <input
        css={{
          color: "red",
        }}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      Hello! I can run in React and React Native!
    </div>
  );
}
