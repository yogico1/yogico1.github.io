import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store.js';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
      console.log("Current path:", pathname); // 로그 추가
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
