import React from 'react';
import ReactDOM from 'react-dom/client';
import SiteHeader from './SiteHeader';
import BlogItem from './BlogItem';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SiteHeader />
    <BlogItem />
  </React.StrictMode>,
);