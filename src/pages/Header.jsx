import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => (
  <div>
    <div className="row">
      <div className="col-md-12 text-center">
        <a href="#/"><img src="https://cdn.rawgit.com/qlik-demo-team/qdt-react-template/223fe135/src/assets/banner_react.jpg" className="banner img-fluid" alt="banner" /></a>
        <h3>This is a React template that uses <a href="https://github.com/qlik-demo-team/qdt-components">qdt-components</a>.</h3>
      </div>
    </div>
  </div>
);

export default Header;
