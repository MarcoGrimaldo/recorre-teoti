import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CarouselComponent from './Components/Carousel/CarouselComponent';
import Banner from './Components/Banner/Banner';
import Servicios from './Components/Servicios/Servicios';
import Footer from './Components/Footer/Footer';
import Incluye from './Components/Incluye/Incluye';
import ReservaBoton from './Components/ReservaBoton/ReservaBoton';
import Header from './Components/Header/Header';
import Reserva from './Components/Reserva/Reserva';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';

/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Carousel } from 'materialize-css';*/

{/*<Router>
      <Switch>
        {/*Pagina de inicio 
        <Route path="/" exact>
          <Navbar/>
          <Banner/>
          <Servicios/>
          <ReservaBoton/>
          <Gallery/>
          <Footer/>
        </Route>

        {/*Recorrido 
        <Route path="/recorrido" exact>
          <Navbar/>
          <Header
            h2H="Tour en Teotihuacán"
            h5H="¡Atrevete a vivir esta aventura!"
          />
          <CarouselComponent/>
          <Incluye/>
          <ReservaBoton/>
          <Footer/>
        </Route>

        {/*Reserva 
        <Route path="/reserva">
          <Navbar/>
          <Reserva/>
          <Footer/>
        </Route>

        {/*Contacto 
        <Route path="/contacto">
          <Navbar/>
          <Header
            h2H="Contactanos"
            h5H="Pregunta lo que desees."
          />
          <Contact/>
          <Footer/>
        </Route>

      </Switch>
    </Router>*/}

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Servicios/>
      <ReservaBoton/>
      <Gallery/>
      <Footer/>
    </div>
    
  );
}

export default App;
