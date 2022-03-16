import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BlogPost from './container/BlogPost/BlogPost';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BlogPost/>,
  document.getElementById('content')
);

reportWebVitals();
