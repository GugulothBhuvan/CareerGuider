import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Goals from "../components/Goals";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Goals />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;