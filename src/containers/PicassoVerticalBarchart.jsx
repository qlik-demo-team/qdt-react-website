import React from 'react';
import Highlight from 'react-highlight.js';
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
    type: 'verticalBarchart',
    cols: ['Date', '=Sum([Number of New Cases])'],
    // cols: ['Contributor Name', '=Sum([Total Amount])'], // NP for testing
    outerHeight: 500,
    qInterColumnSortOrder: [1, 0],
    qPage: {
      qTop: 0,
      qLeft: 0,
      qWidth: 2,
      qHeight: 30,
    },
  },
};

const disCode = {
  template: '<QdtComponent type={viz2.type} props={viz2.props} />',
  code: `const viz2 = {
    type: 'verticalBarchart',
    cols: ['Date', '=Sum([Number of New Cases])'],
    outerHeight: 500,
    qInterColumnSortOrder: [1, 0],
    qPage: {
      qTop: 0,
      qLeft: 0,
      qWidth: 2,
      qHeight: 30,
    },
  };`,
};

const PicassoVerticalBarchart = () => (
  <div className="singlepage">
    <div className="row">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz1.type} props={viz1.props} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <QdtComponent type={viz2.type} props={viz2.props} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <h5>Define the props in your code</h5>
        <Highlight language="javascript">
          {disCode.code}
        </Highlight>
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

export default PicassoVerticalBarchart;
