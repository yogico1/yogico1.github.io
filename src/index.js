import React, { useEffect } from 'react'; // useEffect 추가
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, useLocation } from 'react-router-dom'; // Router로 변경
import { Provider } from "react-redux";
import store from './store.js';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter> {/* BrowserRouter -> Router로 변경 */}
        <ScrollToTop />
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
