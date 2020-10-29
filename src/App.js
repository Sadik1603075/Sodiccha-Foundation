import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navigation from './components/Navigation/Navigataion'

function App() {
  return (
    <div className="App">     
      <Router>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        
        <Route exact path='/'>
        <Navigation />
          index page
        </Route>
      </Router>
    </div>
  );
}

export default App;
