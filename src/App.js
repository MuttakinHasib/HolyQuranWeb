import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { useStateValue } from './context/StateProvider';
import chapters from './data/Chapters';
// import axios from 'axios';
import { FETCH_CHAPTERS } from './context/types';
import Settings from './components/Settings/Settings';
import Verse from './pages/Verse/Verse';

const App = () => {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: FETCH_CHAPTERS,
      chapters,
    });
  }, []);

  return (
    <Router>
      <Header />
      <div>
        <Settings />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:id' component={Verse} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
