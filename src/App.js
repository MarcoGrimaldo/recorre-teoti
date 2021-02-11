import './App.css';

import Home from './Pages/Home';
import Recorrido from './Pages/Recorrido';
import Contacto from './Pages/Contacto';
import ReservaPage from './Pages/ReservaPage'

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/recorrido" component={Recorrido}></Route>
        <Route path="/contacto" component={Contacto}></Route>
        <Route path="/reserva" component={ReservaPage}></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
