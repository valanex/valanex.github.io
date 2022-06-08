import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import Data from "./data.js";

function App() {
  const entries = Data.map(entry => {
    return(
      <Card 
        key={entry.id}
        {...entry}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      {entries}
    </div>
  );
}

export default App;
