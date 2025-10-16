import CounterDisplay from "./components/CounterDisplay";
import FormInput from "./components/FormInput";
import FriendStatus from "./components/FriendsStatus";
import PortDisplay from "./components/PortDisplay";
import ThemeSwitcher from "./components/ThemeSwitcher";
import UserStatus from "./components/UserStatus";

export default function App() {
  return(
    <div>
      <h3>soal 1</h3>
      <FriendStatus friendId={1}/>
      <FriendStatus friendId={2}/>
      <UserStatus />
      <h3>soal 2</h3>
      <PortDisplay />
      <h3>soal 3</h3>
      <CounterDisplay />
      <h3>soal 4</h3>
      <FormInput />
      <h3>soal 5</h3>
      <ThemeSwitcher />
    </div>
  )
}