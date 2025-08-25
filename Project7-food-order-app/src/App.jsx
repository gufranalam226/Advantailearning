import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from './components/Meals'
import Checkout from './components/Checkout'
import { ContextProvider } from "./contexts/CartContext";
import { UserProgressContextProvider } from "./contexts/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <ContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </ContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
