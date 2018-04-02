import React from 'react';
import QdtComponent from '../components/QdtComponent';

const viz2 = {
  type: 'QdtPicasso',
  props: {
    type: 'line', cols: ['Date.autoCalendar.YearMonth', '=Sum([Number of New Cases])'], options: { noTooltip: true }, height: 300,
  },
};

const PicassoLinechart = () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <QdtComponent type={viz2.type} props={viz2.props} />
      </div>
    </div>
  </div>
);

export default PicassoLinechart;
