import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player inintialName='Player1' symbol='X'></Player>
          <Player inintialName='Player1' symbol='X'></Player>
        </ol>
        <GameBoard></GameBoard>
      </div>
    </main>
  );
}
export default App;
