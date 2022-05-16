import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './stores';
import { createGlobalStyle } from 'styled-components';
import resetCss from 'sanitize.css';

const GlobalStyles = createGlobalStyle`
 ${resetCss}
  
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  li {
      list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
