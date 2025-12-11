import React, { Component } from 'react';
import Header from './Header.jsx';
import Headline from './Headline.jsx';
import Timers from './Timers.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="first__section">
          <Header />
          <Headline />
        </div>
        <div className="second__section">
          <Timers />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
