import { Tweet } from "./components/Tweet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Tweet username="@enrigios" name="Enrique" />
      <Tweet username="@juandc" name="Juan David">
        <p>Hola mundo!</p>
        <img src="https://picsum.photos/200" alt="img" />
      </Tweet>
      <Tweet username="@dsofia" name="Diana Palomares" />
    </div>
  );
}

export default App;
