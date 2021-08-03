import React from 'react';
import HeyArnoldCharacters from '../containers/HeyArnoldCharacters';
import DetailContainer from '../containers/DetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HeyArnoldCharacters} />
          <Route path="/:id" component={DetailContainer} />
        </Switch>
      </Router>
    </div>
  );
}
