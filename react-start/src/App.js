import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header/>
        <section className='main'>

        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
