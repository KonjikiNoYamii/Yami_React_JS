import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </Button>
  );
}
