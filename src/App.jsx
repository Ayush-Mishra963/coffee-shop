import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Roastery from "./components/Roastery";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import GrainOverlay from "./components/GrainOverlay";

export default function App() {
  return (
    <div>
      <GrainOverlay />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Roastery />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
