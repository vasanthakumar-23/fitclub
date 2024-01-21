import './App.css';
import Hero from "./components/hero"
import Program from "./components/program"
import Reason from './components/Reason';
import Plan from "./components/plan";
import Testimonial from "./components/testimonial";
import Join from "./components/join"

function App() {
  return (
    <div className="App">
          <Hero />
          <Program/>
          <Reason />
          <Plan />
          <Testimonial />
          <Join />
    </div>
  );
}

export default App;
