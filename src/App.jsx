import { Tweet } from "./components/Tweet";
import { PublishTweet } from "./components/PublishTweet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PublishTweet />
      <Tweet username="@enrigios" name="Enrique">
        <p>Hola mundo!</p>
        <img src="https://picsum.photos/200" alt="img" />
      </Tweet>
      <Tweet username="@juandc" name="Juan David">
        <p>Hola mundo2!</p>
        <img src="https://picsum.photos/300" alt="img" />
      </Tweet>
      <Tweet username="@dsofia" name="Diana Palomares">
        <p>Hola mundo3!</p>
        <img src="https://picsum.photos/400" alt="img" />
      </Tweet>
    </div>
  );
}

export default App;
