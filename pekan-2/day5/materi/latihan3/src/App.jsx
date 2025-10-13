import ThemeButton from "./components/ThemeButton";
import ThemeParagraf from "./components/ThemeParagraf";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return(
    <div>
      <ThemeProvider>
        <ThemeButton />
        <ThemeParagraf />
      </ThemeProvider>
    </div>
  )
}