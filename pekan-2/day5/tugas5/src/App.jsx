import ThemeButton from "./components/ThemeButton";
import ThemeDiv from "./components/ThemeDiv";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <div>
      <ThemeProvider>
        <div>
          <ThemeDiv />
          <ThemeButton />
        </div>
      </ThemeProvider>
    </div>
  );
}
