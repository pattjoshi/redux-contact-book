import React from "react";
import { Provider } from "react-redux";
import contacts from "./components/contacts/Contacts";
import Navbar from "./components/elements/Navbar";
import store from "./store";
import "./styles/App.scss";
import "./styles/index.scss";

import { BrowserRouter as Router, Route } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Route exact path={"/"} component={contacts} />
              <Route exact path={"/contacts/add"} component={AddContact} />
              <Route exact path="/contacts/edit/:id" component={EditContact} />
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

// yarm add node-sass -D

// jin jinis change he c se ta Router bhitre rahi ba
