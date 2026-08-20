import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Providers from "./components/Providers";
import Apps from "./components/Apps";
import Testimonials from "./components/Testimonials";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#1F1534]">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Providers />
        <Apps />
        <Testimonials />
        <Articles />
      </main>

      <Footer />
    </div>
  );
}

export default App;