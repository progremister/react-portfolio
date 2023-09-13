import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Header from "./containers/Header";
import Skills from "./containers/Skills";
import Testimonials from "./containers/Testimonials";
import Works from "./containers/Works";
import "./sass/style.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SocialMedia />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
