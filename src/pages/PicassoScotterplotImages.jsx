import React from 'react';
import QdtComponent from '../components/QdtComponent';

// const viz1 = {
//   type: 'QdtSelectionToolbar',
//   props: {
//     type: 'QdtSelectionToolbar', height: '300px',
//   },
// };
const viz2 = {
  type: 'QdtPicasso',
  props: {
    type: 'scotterplot',
    cols: ['Case Owner', '=Avg([Case Duration Time])', '=Count( {$<Status -={\'Closed\'} >} Distinct %CaseId )'],
    options: {
      noLegend: true, noTooltip: true, href: 'https://webapps.qlik.com/qdt-components/plain-html/emoji_smiley.png', imageWidth: 32, imageHeight: 32,
    },
    height: '300px',
  },
};

const ScotterplotImages = () => (
  <div>
    <div className="row pb50">
      <div className="col-md-12">
        <QdtComponent type={viz2.type} props={viz2.props} />
      </div>
    </div>
  </div>
);

export default ScotterplotImages;
