import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { fetchGainers } from './redux/gainersSlice';

store.dispatch(fetchGainers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
);
