import React, { Component } from 'react';

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Navbar from './components/nav';

class App extends Component {
  render() {
    return (
      <div className="container">
       <Navbar/>
        {/* <Header /> */}
        <Main />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
