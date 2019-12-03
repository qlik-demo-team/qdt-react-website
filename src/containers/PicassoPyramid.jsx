import React from 'react';
import QdtComponent from '../components/QdtComponent';

const Scotterplot = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Pyramid made with Picasso</h2>

    <div className="row">
      <div className="col-md-12 text-left">
        <QdtComponent type="QdtSelectionToolbar" props={{ type: 'QdtSelectionToolbar', height: '300px' }} />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-12">
        <QdtComponent
          type="QdtPicasso"
          props={{
            type: 'pyramid',
            cols: [
              '[Case Owner Group]',
              {
                qDef: {
                  qLabel: 'Open Cases',
                  qDef: '=Count( {$<Priority={\'Medium\'}, Status -={\'Closed\'} >} Distinct %CaseId )',
                },
              },
              {
                qDef: {
                  qLabel: 'Closed Cases',
                  qDef: '=Count( {$<Priority={\'Medium\'}, Status -={\'Closed\'} >} Distinct %CaseId )',
                },
              },
            ],
            outerHeight: 400,
          }}
        />
      </div>
    </div>
    <a className="link" href="#/">🢐 back to gallery</a>

  </div>
);

export default Scotterplot;
