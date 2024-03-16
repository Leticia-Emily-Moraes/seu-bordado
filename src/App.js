import './App.css';
import Header from './components/header';
import Presentation from './components/presentation';
import ImageCarousel from './components/ImageCarousel';
import Benefits from './components/benefits/';
import SectionCardsPlans from './components/planCards/';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <ImageCarousel />
      <Benefits />
      <SectionCardsPlans />
      <Footer />
    </div>
  );
}

export default App;
