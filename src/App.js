import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'
import AddDebt from './pages/AddDebt'
import Reasons from './pages/Reasons'
import Debts from './pages/Debts'
import Contacts from './pages/Contacts'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/AddDebt" component={AddDebt} />
          <Route exact path="/Debts" component={Debts} />
          <Route exact path="/Reasons" component={Reasons} />
          <Route exact path="/Contacts" component={Contacts} />
        </div>
      </Router>
    );
  }
}

export default App;
