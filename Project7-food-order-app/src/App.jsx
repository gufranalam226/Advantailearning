import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from './components/Meals'
import Checkout from './components/Checkout'
import { ContextProvider } from "./contexts/CartContext";
import { UserProgressContextProvider } from "./contexts/UserProgressContext";
import { Provider } from "react-redux";
import CartStore from "./contexts/cartStore";
// function App() {
//   return (
//     <UserProgressContextProvider>
//       <ContextProvider>
//         <Header />
//         <Meals />
//         <Cart />
//         <Checkout />
//       </ContextProvider>
//     </UserProgressContextProvider>
//   );
// }

function App() {
  return (
      <Provider store={CartStore}>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </Provider>
  );
}

export default App;
