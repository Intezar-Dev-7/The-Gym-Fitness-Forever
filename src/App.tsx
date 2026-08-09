import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Programs from "./components/Programs";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PageLoader from "./components/PageLoader";

export default function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white antialiased selection:bg-amber-500 selection:text-black scroll-smooth">
      <PageLoader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Programs />
      <Reviews />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

