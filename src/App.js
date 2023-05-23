import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Highlights from './Components/Highlights';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Footer from './Components/Footer';
import Specials from './Components/Specials';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='br'/>
      <Specials/>
      <div className='br'/>
      <Highlights />
      <div className='br'></div>
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
