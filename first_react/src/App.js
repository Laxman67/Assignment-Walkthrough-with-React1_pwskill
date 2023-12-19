import Person from "./Person";
import Button from "./Button";
import Header from "./Header";
import List from "./List";

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div className="App">
      {/* Ques 1 */}
      <Person name="Laxman" age="21" />

      {/* Ques 2 */}
      <Button text="Submit " />

      {/* Ques 3 */}
      <Header title="A React App -: PWSKILL" />

      {/* Ques 4  */}
      <h1>My List Component</h1>
      <List items={items} />
    </div>
  );
}

export default App;
