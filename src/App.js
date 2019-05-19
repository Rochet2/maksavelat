import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import MainPage from './pages/MainPage'
import AddDebt from './pages/AddDebt'
import Reasons from './pages/Reasons'
import Debts from './pages/Debts'
import Contacts from './pages/Contacts'
import EditDebt from './pages/EditDebt'

function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '' : ''}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/AddDebt" component={AddDebt} />
        <Route exact path="/Debts" component={Debts} />
        <Route exact path="/Debts/:id" component={EditDebt} />
        <Route exact path="/Reasons" component={Reasons} />
        <Route exact path="/Contacts" component={Contacts} />
        {/* 404 redirect to basename */}
        <Route component={() => (<Redirect to="/"/>)} />
      </Switch>
    </Router>
  );
}

export default App;
