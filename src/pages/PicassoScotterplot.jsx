import React from 'react';
import QdtComponent from '../components/QdtComponent';

const viz1 = {
  type: 'QdtSelectionToolbar',
  props: {
    type: 'QdtSelectionToolbar', height: '300px',
  },
};
const viz2 = {
  type: 'QdtPicasso',
  props: {
    type: 'scotterplot', cols: ['Case Owner', '=Avg([Case Duration Time])', '=Count( {$<Status -={\'Closed\'} >} Distinct %CaseId )'], options: { noTooltip: true }, height: '300px',
  },
};

const Scotterplot = () => (
  <div>
    <div className="row pb50">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz1.type} props={viz1.props} />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-12">
        <QdtComponent type={viz2.type} props={viz2.props} />
      </div>
    </div>
  </div>
);

export default Scotterplot;
