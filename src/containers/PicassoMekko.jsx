import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';

const disCode = {
  template: '<QdtComponent type="QdtKpi" props={{cols: [`=Count( {$<Priority={\'High\'}, Status -={\'Closed\'} >} Distinct %CaseId )`]}} />',
};

const MapBox = () => (
  <div>
    <div className="row pb50">
      <div className="col-md-12">
        <QdtComponent
          type="QdtPicasso"
          props={{
            type: 'mekko',
            cols: ['Department', 'Date.Year', '=Avg([Case Duration Time])'],
            outerHeight: 300,
          }}
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
  </div>
);

export default MapBox;
