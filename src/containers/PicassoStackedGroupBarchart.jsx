import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';

const viz1 = {
  type: 'QdtSelectionToolbar',
  props: { type: 'QdtSelectionToolbar' },
};
const viz2 = {
  type: 'QdtPicasso',
  props: {
    type: 'stackedGroupBarchart',
    cols: [
      'Date.autoCalendar.Year',
      'Case Owner Group',
      '=Avg([Case Duration Time])',
      '=Sum([Case Owner])',
    ],
    prio: 'svg',
    outerHeight: 500,
  },
};

const disCode = {
  template: '<QdtComponent type={viz2.type} props={viz2.props} />',
  code: `const viz2 = {
        type: 'QdtPicasso',
        props: {
            type: 'stackedBarchart',
            cols: ['Case Owner Group', 'Priority', '=Count(Distinct [%CaseId])'],
            outerHeight: 300,a
        },
    };`,
};

const PicassoHorizontalBarchart = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Stacked Group Bar chart made with Picasso</h2>

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
    <a className="link" href="#/">🢐 back to gallery</a>

  </div>
);

export default PicassoHorizontalBarchart;
