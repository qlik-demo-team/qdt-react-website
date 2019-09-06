import React from 'react';
import QdtComponent from '../components/QdtComponent';

const viz1 = {
  type: 'QdtSelectionToolbar',
  props: {
    type: 'QdtSelectionToolbar', height: '300px',
  },
};

const viz4 = {
  type: 'QdtPicasso',
  props: {
    type: 'custom3',
    cols: [
      'CaseNumber',
      '=[Case Created Date]',
      '=[Case Closed Date]',
    //   '=If(Not IsNull([Case Closed Date]) and Trim([Case Closed Date])<>\'-\', [Case Closed Date])',
    ],
    qPage: {
      qTop: 0,
      qLeft: 0,
      qWidth: 3,
      qHeight: 10,
    },
    prio: 'svg',
    innerWidth: 1500,
    outerHeight: 800,
  },
};

const PicassoVerticalBarchart = () => (
  <div>
    <div className="row">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz1.type} props={viz1.props} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <QdtComponent type={viz4.type} props={viz4.props} />
      </div>
    </div>
  </div>
);

export default PicassoVerticalBarchart;
