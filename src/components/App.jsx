import React from "react";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import Home from "./Home";
import Club_info from "./Club_info";
import Faculty_info from "./Faculty_info";

import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
   return (
      <div>
         <NavLink exact activeClassName="active-class" to="/SignInPage">Sign-In </NavLink>
         <NavLink exact activeClassName="active-class" to="/SignUpPage"> Sign-Up </NavLink>
         <NavLink exact activeClassName="active-class" to="/Home"> Home </NavLink>
         <NavLink exact activeClassName="active-class" to="/Club_info">Club-info </NavLink>
         <NavLink exact activeClassName="active-class" to="/Faculty_info"> Faculty-info </NavLink>
         
         <Routes>
            <Route exact path='/SignInPage' element={<SignInPage />} />
            <Route exact path='/SignUpPage' element={<SignUpPage />} />
            <Route exact path='/Home' element={<Home />} />
            <Route exact path='/Club_info' element={<Club_info />} />
            <Route exact path='/Faculty_info' element={<Faculty_info />} />
         </Routes>
      </div>
   );
}
export default App;
