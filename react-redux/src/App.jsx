import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import { useSelector } from 'react-redux'
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated)

  return (
    <>
      <Header />
      {!isAuth && <UserForm />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
