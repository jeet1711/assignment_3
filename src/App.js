import './App.css';
import Navbar from './Components/Navbar';
import Main from './Sections/Main';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Features from './Sections/Features';
import Resource from './Sections/Resource';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Contact />
      <Features />
      <Resource />
    </div>
  );
}

export default App;
