import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Intro />
      </header>
    </div>
  );
}

export default App;
