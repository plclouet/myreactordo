import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import PageNotFound from './pages/page-not-found';
import OrdoList from './pages/ordo-list';
import OrdoDetail from './pages/ordo-detail';
import OrdoForm from './pages/ordo-form';
import ProtectedRoute from './pages/protectedRoute';
import PageProtected from './pages/page-protected';
import Login from './pages/login';
import Nav from './pages/nav';
import Logout from './pages/logout';
 
const App = () => {
 
  return (
    <Router>
      <div>
     {/*  <Nav> 
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">Ordonnances radiologie</Link>
        </div> 
      </Nav> */}
      <Nav />
      <Switch>
        
        <Route exact path="/" component={OrdoList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/ordonnances" component={OrdoList} />
        <Route exact path="/ordonnance/add" component={OrdoForm} />
        <Route path="/ordonnances/:id" component={OrdoDetail} />
        <ProtectedRoute path="/protected" component={PageProtected} />
        <Route component={PageNotFound} />
      </Switch>
      </div>
    </Router>
  );
}
 
export default App;