import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login/Login'
import Index from './Components';
import { history } from './helpers/history'
import { PrivateRoute} from './helpers/privateRoute'
import Profile from './Components/Profile/Profile'

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
            <PrivateRoute exact path='/Manager' component={Index}/>
            <PrivateRoute exact path="/Profile" component={Profile} />
            <Route  exact path="/" component={Login}/>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
