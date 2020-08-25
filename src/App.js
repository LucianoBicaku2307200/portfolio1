import React from 'react';
import './css/app.css';
import { HomePage, ContactPage, AboutPage, ProjectPage, ProjectsPage, PageNotFound } from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/contact" component={ContactPage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/mywork" component={ProjectsPage}></Route>
        <Route exact path="/mywork/:id" component={ProjectPage}></Route>
        <Route >
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
