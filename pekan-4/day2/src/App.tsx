import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterList } from "./components/CharacterList";
import { UserCard } from "./components/UserCard";
import { FormProvider } from "./context/FormContext";
import { ResultPage } from "./pages/ResultPage";
import { FormPage } from "./pages/FormPage";

export default function App() {
  return (
    <div>
      <h3>soal 2</h3>
      <UserCard
        name="Yami"
        age={28}
        isOnline={true}
        hobbies={["ngoding", "main game", "nonton", "ngadu domba"]}
        onSendMessage={(name) => alert(`halo ${name}`)}
      />

      <h3>soal 3</h3>
      <CharacterList />

      <h3>soal 4</h3>
      <FormProvider>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </FormProvider>
    </div>
  );
}
