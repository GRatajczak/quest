import { GlobalStyles } from '../assets/styles/globalStyles';
import  { ThemeProvider } from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from '../assets/styles/theme';
import Header from '../components/global/Header/Header'
import Home from './Home';
import Solution from './Solution';
import About from './About';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
          <Header />
          <Switch >
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/solutions" >
              <Solution />
            </Route>
            <Route path="/about" >
              <About />
            </Route>
          </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
