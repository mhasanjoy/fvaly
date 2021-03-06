import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const ProductDetails = React.lazy(
  () => import('pages/ProductDetails/ProductDetails')
);

const AppRouter: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/home" component={Home} />
          <Route path="/help" component={Help} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route exact path="/" component={Home} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default AppRouter;
