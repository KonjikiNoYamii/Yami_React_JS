import { useState } from "react";
import { ChildTheme } from "./ChildTheme";

export default function ParentTheme() {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  console.log("parent telah di render");

  return (
    <div>
      <ChildTheme theme={theme} />
      <h2>{count}</h2>

      <button onClick={handleThemeChange}>
        ubah tema ke {theme === "light" ? "dark" : "light"}
      </button>
      <button onClick={() => setCount((prev) => prev + 1)}>klik</button>
    </div>
  );
}
