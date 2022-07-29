import React from 'react';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import page404 from '../components/Pageerror';


import Sendmsgform from '../components/Sendmsgform';
import AddEmployee from '../components/AddEmployee';

import Viewemployee from '../components/Viewemployee';


const Routes = () => {
 
  return (
    

    <Router>
   
         <Switch>    
    
      
         <Route path="/Sendmsgform/:email" component={Sendmsgform}  exact />  
         <Route path="/AddEmployee" component={AddEmployee}  exact />  
         <Route path="/Viewemployee" component={Viewemployee}  exact />  

         {/* <Route path="/Viewoneplan/:id" component={ }  exact />   */}

         <Route path="/*" component={ page404} exact />    
       </Switch>
  

      
   
   
  </Router>
  );
};

export default Routes;