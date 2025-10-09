import { useState } from "react";
import Dashboard from "./components/Dashboard";
export default function App() {
  const [isAkhirat, setIsakhirat] = useState(false);
  const [notification, setNotification] = useState("");

  let togel = () => {
    setIsakhirat((prev) => !prev);
  };

  return (
    <div>
      <h1>Fesnuk</h1>
      <h3>like jika ingin masuk surga</h3>
      <h3>dislike jika ingin masuk neraka</h3>
      <button onClick={togel}>{isAkhirat ? "dislike" : "like"}</button>
      <Dashboard isAkhirat={isAkhirat} notification={notification} />
    </div>
  );
}
