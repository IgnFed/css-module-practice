import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";

import { Index } from '../pages/Index.jsx'
import { SignIn } from '../pages/SignIn.jsx'
import { SignUp } from '../pages/SignUp.jsx'
import { NotFund } from '../pages/NotFund.jsx'
import {NavBar} from '../components/NavBar.jsx'

export const Routes = () => {
   return (
      <div>

         <Router>
            <NavBar/>
            <Switch>
               <Route exact path='/' component={Index} ></Route>
               <Route  path='/SignIn' component={SignIn}></Route>
               <Route  path='/SignUp' component={SignUp}></Route>
               <Route component={NotFund}></Route>
            </Switch>
         </Router>
      </div>
   )
}
