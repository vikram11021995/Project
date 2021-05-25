import React from 'react';
import Header from './header';
import  Dashboard from './dashboard';
import  Category from './category';
import Room from './room';
import Newroom  from './newroom';
import  Newbooking from'./newbooking';
import Billing from './billing';



import {HashRouter,Route} from 'react-router-dom';



function App() {
  return <HashRouter>
  <Header/>
  <Route exact path="/" component={Dashboard}/>
  <Route  path="/category" component={Category}/>
  <Route  path="/newroom" component={Newroom}/>
  <Route  path="/newbooking" component={Newbooking}/>
  <Route  path="/:type/room" component={Room}/>
  <Route  path="/:userid/billing" component={Billing}/>
  
  
  </HashRouter>
    
}

export default App;
