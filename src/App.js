import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './static_resources/stylesheets/Main.css'
import './static_resources/stylesheets/Navbar.css'
import './static_resources/stylesheets/Footer.css'

const ReactRouter = () => (
  <Router>
    <div className="Routes">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={Home}/>
        <Route exact path="/contact" component={Home}/>
      </Switch>
    </div>
  </Router>
)

class App extends Component {
    render() {
        return (
          <div className="main-container">
            <Header />
            <ReactRouter />
            <Footer />
          </div>
        );
    }
}

export default App;
