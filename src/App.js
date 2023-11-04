import Navbar from './Navbar';
import MainScreen from './MainScreen';
import About from './About'
import React from "react"
import Projects from './Projects';
import Wall from './Wall';
import Contact from './Contact';


function App() {

  const [showing, setShowing] = React.useState("MainScreen")// show/hide about section

  function changeShowing(component, showing) {
    if (showing === component) {
      setShowing("MainScreen")
    }
    else {
      setShowing(component)
    }
  }

  return (
    <div className="App">
      <Navbar changefunc={changeShowing} showing={showing} />
      {showing === "MainScreen" && <MainScreen />}
      {showing === "About" && <About />}
      {showing === "Projects" && <Projects />}
      {showing === "Wall" && <Wall />}
      {showing === "Contact" && <Contact />}
    </div>
  );
}

export default App;



