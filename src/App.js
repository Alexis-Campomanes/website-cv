import './App.scss';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';
import Experience from './Experience/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services /> 
      <Experience />
      <Works />
    </div>
  );
}

export default App;
