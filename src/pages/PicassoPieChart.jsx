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
    type: 'pie',
    cols: ['Case Owner Group', '=Num(Avg([Case Duration Time]), \'##\')'],
    outerHeight: 300,
  },
};

const PieChart = () => (
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

export default PieChart;
