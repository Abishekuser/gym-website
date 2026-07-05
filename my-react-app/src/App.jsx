import Navbar from "./Navbar";
import Hero from "./hero";
import Features from "./Features";
import About from "./About";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import CTABanner from "./CTABanner";
import Footer from "./Footer";
import Contact from "./Contact";
function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      <Navbar />
      <Hero />
      <Features/>
      <About/>
      <Testimonials/>
      <Pricing/>
      <FAQ/>
      <CTABanner/>
      <Footer/>
      <Contact/>
    </div>
  );
}

export default App;