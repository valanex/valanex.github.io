import './App.css';
import Info from "./components/Info/Info";
import About from "./components/About/About";
import Interests from "./components/Interests/Interests";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-body">
      <Info />
      <About />
      <Interests />
      <Footer />      
    </div>
  );
}

export default App;
