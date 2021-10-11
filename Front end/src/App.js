import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListStoreComponent from './components/ListStoreComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStoreComponent from './components/CreateStoreComponent';
import ViewStoreComponent from './components/ViewStoreComponent';
import ListSearchStoreComponent from './components/ListSearchStoreComponent';
import RegisterComponent from './components/RegisterComponent';

import useState from 'react';


import LoginComponent from './components/LoginComponent';
import AboutUsComponent from './components/AboutUsComponent';
import ContactUsComponent from './components/ContactUsComponent';
import TermsComponent from './components/TermsComponent';

function App() {

  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 

                          <Route path = "/" exact component = {LoginComponent}></Route>
                          <Route path = "/stores" component = {ListStoreComponent}></Route>
                          <Route path = "/add-store/:id" component = {CreateStoreComponent}></Route>
                          <Route path = "/view-store/:id" component = {ViewStoreComponent}></Route>
                          <Route path = "/search-stores/:searchKeyword" component = {ListSearchStoreComponent}></Route>
                          <Route path = "/register" component = {RegisterComponent}></Route>
                          <Route path = "/login" component = {LoginComponent}></Route>
                          <Route path = "/aboutus" component = {AboutUsComponent}></Route>
                          <Route path = "/contactus" component = {ContactUsComponent}></Route>
                          <Route path = "/terms" component = {TermsComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;