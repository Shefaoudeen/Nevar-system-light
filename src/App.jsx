import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Hero2 from "./Components/Hero2";
import About from "./Components/About";
import Service from "./Components/Service";
import Review from "./Components/Review";
import Footer from "./Components/Footer";
import Trans from "./Components/Trans";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero2 />
      <About />
      <Service />
      <Review />
      <Trans />
      <Footer />
    </div>
  );
}
