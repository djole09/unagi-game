import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { routes, RouteType } from './AppRoutes';
import { GlobalStyle, theme } from './Theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <Switch>
        {routes.map((route: RouteType, index: number) => (
          <Route {...route} key={index} />
        ))}
      </Switch>
    </Router>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
