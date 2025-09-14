import { Header} from './components/Header';
import { FilterTop } from './components/FilterTop';
import { ServicesOffered } from './components/ServicesOffered';
import { CarouselDestinations } from './components/CarouselDestinations';
import { Footer } from './components/Footer';
import { AllDestinations } from './components/AllDestinations';
import { RegistrationFooter } from './components/RegistrationFooter';

function App() {
  return (
    <>
      <Header/>
      <FilterTop/>
      <ServicesOffered/>
      <CarouselDestinations/>
      <AllDestinations/>
      <RegistrationFooter/>
      <Footer/>
    </>
  );
}

export default App;
