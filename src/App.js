import './App.css';
import About from './component/about/About';
import Body from './component/body/Body';
import Nav from './component/NavList/Nav';
import Skill from './component/skills/Skill';
import Work from './component/work/Work';

function App() {
  return (
    <div className="app">
      <Nav />
      <Body />
      <About />
      <Skill />
      <Work />
    </div>
  );
}

export default App;
