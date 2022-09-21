import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import Contact from './components/pages/Contact.jsx';
import NotFound from './components/pages/NotFound.jsx';

class App extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/kontakt" element={<Contact />}/>
          <Route path="/onama" element={<NotFound />}/>
          <Route path="/informacije" element={<NotFound />}/>
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;