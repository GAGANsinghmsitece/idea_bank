import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import All from './pages/all';
import Dashboard from './pages/dashbboard';
import Deleted from './pages/deleted';
import Completed from './pages/completed';
import Create from './pages/create';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/deleted" element={<Deleted/>}/>
        <Route path="/completed" element={<Completed/>}/>
        <Route path="/all" element={<All/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
