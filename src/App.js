import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import HeroBackground from "./assets/hero.png";

const App = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      <div className="w-[80%] mx-auto">
        <div>
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
