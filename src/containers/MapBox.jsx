import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';

const disCode = {
  template: '<QdtComponent type="QdtKpi" props={{cols: [`=Count( {$<Priority={\'High\'}, Status -={\'Closed\'} >} Distinct %CaseId )`]}} />',
};

const MapBox = () => (
  <div className="singlepage">
    <a className="link" href="../">🢐 back to gallery</a>
    <h2>MapBox</h2>
    <div className="row">
      <div className="col-md-12">
        <QdtComponent
          type="QdtMapBox"
          props={{
            cols: ['ID', 'lat', 'lon', 'gender'],
            height: 400,
            qPage: {
              qTop: 0,
              qLeft: 0,
              qWidth: 4,
              qHeight: 2500,
            },
          }}
          app3
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <h5>Render in your Template</h5>
        <Highlight language="html">
          {disCode.template}
        </Highlight>
      </div>
    </div>
    <a className="link" href="../">🢐 back to gallery</a>

  </div>
);

export default MapBox;
