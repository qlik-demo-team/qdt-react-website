import React from 'react';
import { dependencies } from '../../package.json';

const Header = () => (
  <div className="singlepage">
    <div className="row">
      <div className="col-md-12 text-center">
        <a href="#/"><img src="assets/react_Qdt.png" className="banner" alt="Qdt and React" /></a>
        <h3>
            This is a React (
          {dependencies.react}
            ) template that uses
          { ' '}
          <a className="link" href="https://github.com/qlik-demo-team/qdt-components">
            qdt-components (
            {dependencies['qdt-components']}
            )
          </a>
        </h3>
      </div>
    </div>
  </div>
);

export default Header;
