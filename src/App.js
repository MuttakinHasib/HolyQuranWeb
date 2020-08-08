import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import api from './api';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { useStateValue } from './context/StateProvider';
// import axios from 'axios';
import { FETCH_CHAPTERS } from './context/types';
import Settings from './components/Settings/Settings';
import Verse from './pages/Verse/Verse';

const App = () => {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    const getChapters = async () => {
      const {
        data: { chapters },
      } = await api.get(`/chapters`);
      dispatch({
        type: FETCH_CHAPTERS,
        chapters,
      });
    };
    getChapters();
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
