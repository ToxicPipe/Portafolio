import NavBar from "./components/NavBar";
import Home from "./components/sections/Home";
import Portfolio from "./components/sections/Portfolio";
import About from "./components/sections/About";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Home />
      <Portfolio />
      <About />
    </div>
  );
};

export default App;
