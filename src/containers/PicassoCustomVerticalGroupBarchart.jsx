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
    type: 'customVerticalGroupBarchart',
    cols: [
      'Case Owner Group',
      "=Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )",
      "=Count( {$<Priority={'Medium'}, Status -={'Closed'} >} Distinct %CaseId)",
      "=Count( {$<Priority={'Low'}, Status -={'Closed'} >} Distinct %CaseId)",
      "=Count( {$<[Case Is Closed] ={'True'} >} %CaseId )/50",
    ],
    outerHeight: 300,
  },
};

const disCode = {
  template: '<QdtComponent type={viz2.type} props={viz2.props} />',
  code: `const viz2 = {
        type: 'customVerticalGroupBarchart',
        props: {
            type: 'stackedBarchart',
            cols: [
              'Case Owner Group',
              "=Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )",
              "=Count( {$<Priority={'Medium'}, Status -={'Closed'} >} Distinct %CaseId)",
              "=Count( {$<Priority={'Low'}, Status -={'Closed'} >} Distinct %CaseId)",
              "=Count( {$<[Case Is Closed] ={'True'} >} %CaseId )/50",
            ],
            outerHeight: 300,
        },
    };`,
  codet: `
      if (props.type === 'customVerticalGroupBarchart') {
        props.type = null;
        props.settings = settings.verticalGroupBarchart;
        props.settings.scales.y.data.fields = ['qMeasureInfo/0', 'qMeasureInfo/1', 'qMeasureInfo/2', 'qMeasureInfo/3'];
        props.settings.components = [
          components.axis(),
          components.axis({ scale: 'y' }),
          components.box({
            displayOrder: 0, measures: 3, end: { field: 1 }, fill: '#275378', stroke: '#3399CC',
          }),
          components.box({
            displayOrder: 1, measures: 3, end: { field: 2 }, fill: '#B35A01', stroke: '#CC6666',
          }),
          components.box({
            displayOrder: 2, measures: 3, end: { field: 3 }, fill: '#669933', stroke: '#99CC66',
          }),
          components.line({
            key: 'line', displayOrder: 3, y: { field: 'qMeasureInfo/3' }, stroke: '#B974FD',
          }),
          components.point({
            key: 'point', displayOrder: 4, y: { field: 'qMeasureInfo/3' }, fill: '#B974FD', stroke: '#B974FD', size: 0.2,
          }),
          components.range(),
          components.labels({ displayOrder: 3, direction: 'up' }),
          components.tooltip,
        ];
      }
    `,
};

const PicassoVerticalBarchart = () => (
  <div className="singlepage">
    <a className="link" href="../">🢐 back to gallery</a>
    <h2>Custom Vertical Group Barchart made with Picasso</h2>
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
    <div className="row">
      <div className="col-md-12 text-left">
        <h5>Add this in your Qdt-components.jsx file</h5>
        <Highlight language="javascript">
          {disCode.codet}
        </Highlight>
      </div>
    </div>
    <a className="link" href="../">🢐 back to gallery</a>

  </div>
);

export default PicassoVerticalBarchart;
