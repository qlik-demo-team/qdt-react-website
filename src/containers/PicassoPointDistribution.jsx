import React from 'react';
import QdtComponent from '../components/QdtComponent';

const Scotterplot = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Point Distribution made with Picasso</h2>

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
            type: 'pointDistribution',
            cols: [
              '[Date.autoCalendar.Year]',
              '[Date.autoCalendar.Month]',
              '=Count( {$<[Case Is Closed] ={\'True\'} >} %CaseId )',
              '=Avg([Case Duration Time])',
              // {
              //   qDef: {
              //     qLabel: 'Year',
              //     qFieldDefs: ['Date.autoCalendar.Year'],
              //   },
              // },
              // {
              //   qDef: {
              //     qLabel: 'Month',
              //     qFieldDefs: ['Date.autoCalendar.Month'],
              //   },
              // },
              // {
              //   qDef: {
              //     qLabel: 'Closed Cases',
              //     qDef: '=Count( {$<[Case Is Closed] ={\'True\'} >} %CaseId )',
              //     qNumFormat: { qType: 'M', qFmt: '#,##0', qThou: ',' },
              //   },
              // },
              // {
              //   qDef: {
              //     qLabel: 'Avg Time',
              //     qDef: '=Avg([Case Duration Time])',
              //     // qNumFormat: { qType: 'M', qFmt: '#,##0', qThou: ',' },
              //   },
              // },
            ],
            // qPage: {
            //   qTop: 0,
            //   qLeft: 0,
            //   qWidth: 4,
            //   qHeight: 10,
            // },
            outerHeight: 400,
          }}
        />
      </div>
    </div>
    <a className="link" href="#/">🢐 back to gallery</a>

  </div>
);

export default Scotterplot;
