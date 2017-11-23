import React, { Component } from 'react';
import Logo from './ioof-logo.svg';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import Home from './pages/Home';
import Buttons from './pages/Buttons';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='container'>
          <div className='menu'>
            <a href='https://ioof.com.au' className='logo'>
              <img src={Logo} alt='IOOF' />
            </a>
            <h1 className='gel-title'>
              <span className="big-copy">GEL</span>
              <span className="small-copy">by IOOF</span>
            </h1>
            <ul className='navigation'>
              <li>
                <NavLink exact to='/' activeClassName='active'>
                  About the GEL
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/colours' activeClassName='active'>
                  Colours
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/typography' activeClassName='active'>
                  Typography
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/layout' activeClassName='active'>
                  Layout
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/containers' activeClassName='active'>
                  Containers
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/buttons' activeClassName='active'>
                  Buttons
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/footers' activeClassName='active'>
                  Footers
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/forms' activeClassName='active'>
                  Forms
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/headers' activeClassName='active'>
                  Headers
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/tables' activeClassName='active'>
                  Tables
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/lists' activeClassName='active'>
                  Lists
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/alerts' activeClassName='active'>
                  Alerts
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/popovers' activeClassName='active'>
                  Popovers
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/icons' activeClassName='active'>
                  Icons
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/symbols' activeClassName='active'>
                  Symbols
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/logos' activeClassName='active'>
                  Logos
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/navigation' activeClassName='active'>
                  Navigation
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/media' activeClassName='active'>
                  Media
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/helpers' activeClassName='active'>
                  Helpers
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/other' activeClassName='active'>
                  Other
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="content">
            <Route exact path='/' component={Home} />
            <Route exact path='/buttons' component={Buttons} />
          </div>
          
        </div>
      </Router>
    )
  }
}

export default App;
