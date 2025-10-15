import AddMultipleProvider from "./components/AddMultipleProvider";
import CartDisplay from "./components/CartDisplay";
import ChangeThemeButton from "./components/ChangeThemeButton";
import ChangeThemeCard from "./components/ChangeThemeCard";
import ChangeThemeText from "./components/ChangeThemeText";
import ProductList from "./components/ProductList";
import UseCustomHook from "./components/UseCustomHook";
import UserLogin from "./components/UserLogin";
import { CartProvider } from "./context/cartContext";
import { LanguageProvider } from "./context/LanguageContext";
import { NotificationProvider } from "./context/NotificationContext";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return(
    <div>
      <h1>soal 1</h1>
      <UserProvider>
        <UserLogin />
      </UserProvider>
      <h1>soal 2</h1>
      <ThemeProvider>
        <ChangeThemeButton />
        <ChangeThemeCard />
        <ChangeThemeText />
      </ThemeProvider>
      <h1>soal 3</h1>
      <LanguageProvider>
        <NotificationProvider>
          <AddMultipleProvider />
        </NotificationProvider>
      </LanguageProvider>
      <h1>soal 4</h1>
      <ThemeProvider>
        <UseCustomHook />
      </ThemeProvider>
      <h1>soal 5</h1>
      <CartProvider>
        <ProductList />
        <CartDisplay />
      </CartProvider>
    </div>
  )
}