import React, { Component } from 'react';
import './App.css';
import Header from './navbar';
import Section1 from './description';
import Section2 from './patient-parents';
import Section3 from './global-company';
import Section4 from './platform';
import Section5 from './vision';
import Footer from './footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        < Section1 />
        < Section2 />
        < Section3 />
        < Section4 />
        < Section5/>
        < Footer/>
      </div>
    );
  }
}

export default App;
