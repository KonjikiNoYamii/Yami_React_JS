import "./index.css"
import Profile from "./pages/Profile"
import { ThemeProvider } from "./components/theme-provider"
import ThemeSwitcher from "./components/Theme-Switcher"

function App() {
  return (
    <ThemeProvider>
      {/* Gunakan flex + min-h-screen agar memenuhi layar */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-red-600 transition-colors duration-500">
        
        {/* Tombol switcher di pojok kanan atas */}
        <div className="absolute top-6 right-6">
          <ThemeSwitcher />
        </div>

        {/* Konten utama yang diperlebar */}
        <main className="w-[90%] max-w-3xl p-10 rounded-2xl shadow-2xl bg-white dark:bg-black border-4 border-red-700 text-center transition-all">
          <Profile />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
