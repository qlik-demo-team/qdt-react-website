import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';
import Globals from '../components/Globals';

const viz1 = {
  type: 'QdtSelectionToolbar',
  props: {
    type: 'QdtSelectionToolbar', height: '300px',
  },
};
const mySettings = Globals.picasso.settings.horizontalBarchart;
mySettings.components[1].settings.labels.align = 'left';
// mySettings.components[1].settings.labels.invert = false;
// mySettings.components[1].settings.labels.justify = 0;
// console.log(mySettings.components[1]);
const viz2 = {
  type: 'QdtPicasso',
  props: {
    // type: 'horizontalBarchart',
    cols: ['Case Owner Group', '=Num(Avg([Case Duration Time]), \'##.0\')'],
    // options: { bar: { height: 50, fill: '#554741' } },
    outerHeight: 300,
    // qSortByAscii: 0,
    // qSortByLoadOrder: 1,
    qInterColumnSortOrder: [1, 0],
    qSuppressZero: true,
    prio: 'svg',
    settings: mySettings,
  },
};

const disCode = {
  template: '<QdtComponent type={viz2.type} props={viz2.props} />',
  code: `const viz2 = {
        type: 'QdtPicasso',
        props: {
            type: 'horizontalBarchart', 
            cols: ['Case Owner Group', '=Avg([Case Duration Time])'], 
            outerHeight: 300,
        },
    };`,
};

const PicassoHorizontalBarchart = () => (
  <div>
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

export default PicassoHorizontalBarchart;
