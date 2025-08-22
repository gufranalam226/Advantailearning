import store from "./contexts/cartStore";
import {Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <h1>You got this 💪</h1>
      <p>Stuck? Not sure how to proceed?</p>
      <p>Don't worry - we've all been there. Let's build it together!</p>
    </Provider>
  );
}

export default App;
