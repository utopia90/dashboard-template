import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';

function App() {

  // FIXME: Pasarlo a SessionStorage.
  // Variable para controlar las rutas de la app
  let loggedIn = true;

  return (
    <Router>
      {/* Switch de Rutas */}
      <Switch>
        {/* Ruta a la raíz con redirección a Login si no está logueado */}
        <Route exact path='/'>
            { loggedIn ? 
              <Redirect from='/' to='/dashboard'/>
              :
              <Redirect from='/' to='/login' />
            }
        </Route>
        {/* Ruta a Login */}
        <Route exact path='/login' component={Login}/>
        {/* Ruta al Dashboard con redirección a Login si no está logueado */}
        <Route exact path='/dashboard'>
            { loggedIn ? 
              <DashBoard />
              :
              <Redirect from='/dashboard' to='/login' />
            }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
