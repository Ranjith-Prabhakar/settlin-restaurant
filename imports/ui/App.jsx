import React from 'react';
import {Meteor} from 'meteor/meteor'
import { useTracker } from "meteor/react-meteor-data";
import { Login } from './components/Login/Login.jsx';
import { Home } from './components/Home/Home.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Restaurant } from './components/Restaurant/Restaurant.jsx';
import Navbar from './components/Navbar/Navbar.jsx';


export const App = () => {
  const user = useTracker(() => Meteor.user());
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Home />}/>
      <Route path='/book_seat/:id' element={user ? <Restaurant /> : <Login/> }/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
};
