import React from 'react';
import QdtComponent from '../components/QdtComponent';

const Scotterplot = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Dumbbell plot made with Picasso</h2>

    <div className="row">
      <div className="col-md-12 text-left">
        <QdtComponent type="QdtSelectionToolbar" props={{ type: 'QdtSelectionToolbar', height: '300px' }} />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-6 object">
        <QdtComponent
          type="QdtPicasso"
          props={{
            type: 'dumbbell',
            cols: [
              // '[Subject]',
              '[Case Owner]',
              '[Case Created Date]',
              '[Case Closed Date]',
              // {
              //   qDef: {
              //     qLabel: 'Created',
              //     qDef: '=[Case Created Date]',
              //   },
              // },
              // {
              //   qDef: {
              //     qLabel: 'Closed',
              //     qDef: '=[Case Closed Date]',
              //   },
              // },
            ],
            outerHeight: 400,
            qPage: {
              qTop: 0,
              qLeft: 0,
              qWidth: 3,
              qHeight: 10,
            },
            getQRData: false,
          }}
        />
      </div>
    </div>
    <a className="link" href="#/">🢐 back to gallery</a>

  </div>
);

export default Scotterplot;
