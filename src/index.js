import React from 'react';
import ReactDOM from 'react-dom';
// Importing the fetch polyfill allows cypress to intercept fetch api requests.
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.min.css';
// Change me if you prefer sass,scss, less. (Note you may need to update the build config)
import './index.css';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
