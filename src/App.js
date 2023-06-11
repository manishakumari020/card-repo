import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./HeroComponent/HeroSection/HeroSection";
import Card from "./CardComponent/CardSection/Card";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Card />
    </div>
  );
}
