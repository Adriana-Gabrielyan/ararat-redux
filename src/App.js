import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import loadable from '@loadable/component';
import Provider from 'react-redux/es/components/Provider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import 'global/index.scss';
import {connect} from 'react-redux';

function App(props) {
  const Routes = loadable(() => import('./routes'));
  const LoadingIndicator = loadable(() =>
    import('components/LoadingIndicator/LoadingIndicator'),
  );

  const [isLoading, setIsLoading] = useState(true);
  const [{store}, setStore] = useState({
    store: {},
  });

  useEffect(() => {
    (async () => {
      const {store, persistor} = await import('./store/configureStore');
      setStore({store, persistor});
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <LoadingIndicator
        loading
        background="rgba(255,255,255,.5)"
        loaderColor="#3498db"
      />
    );
  }

  return (
    <>
      <Router>
        <Provider store={store}>
          <Header />
          <Routes />
        </Provider>
      </Router>
    </>
  );
}

export default connect()(App);
