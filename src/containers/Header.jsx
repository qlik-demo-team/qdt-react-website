import React from 'react';
import { dependencies } from '../../package.json';

const Header = () => (
  <div>
    <div className="row">
      <div className="col-md-12 text-center">
        <a href="#/"><img src="https://cdn.rawgit.com/qlik-demo-team/qdt-react-template/223fe135/src/assets/react_Qdt.png" className="banner img-fluid" alt="Qdt and React" /></a>
        <h3>
            This is a React (
          {dependencies.react}
            ) template that uses
          { ' '}
          <a href="https://github.com/qlik-demo-team/qdt-components">
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
