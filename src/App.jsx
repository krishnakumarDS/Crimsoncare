import ButtonGradient from "./assets/svg/ButtonGradient";
import Benfits from "./components/Benfits";
import Button from "./components/Button";
import Collabartion from "./components/Collabartion";
import Footer from "./components/Footer";
import Header from "./components/header";
import Hero from "./components/Hero";
import Pricing from "./components/pricing";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benfits />
        <Collabartion />
        <Services />
        <Pricing />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
