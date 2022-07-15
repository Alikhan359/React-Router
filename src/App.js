import React from 'react'
import { BrowserRouter as Switch, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Navbar from './pages/Navbar';
import './App.css';
function App() {
  return (
    <main>
    <Switch>
      <Navbar />
       <Route path='/welcome' element={<Home/>} />
        <Route path="/About" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path='/Navbar' component={Navbar} />
        <Route component={Error} />
    </Switch>
</main>
  );
}
export default App;
