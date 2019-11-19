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
    type: 'custom4',
    cols: [
      'Case Owner Group',
      '=Num(Avg([Case Duration Time]), \'##.0\')',
      "=Count( {$<Priority={'Low'}, Status -={'Closed'} >} Distinct %CaseId )",
      "=Count( {$<Priority={'Medium'}, Status -={'Closed'} >} Distinct %CaseId )",
      "=Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )",
    ],
    outerHeight: 300,
  },
};

const disCode = {
  template: '<QdtComponent type={viz2.type} props={viz2.props} />',
  code: `
    // In this page:
    const viz2 = {
        type: 'QdtPicasso',
        props: {
          type: 'custom1',
          cols: [
            "Case Owner Group",
            "=Num(Avg([Case Duration Time]), '##.0')",
            "=Count( {$<Priority={'Low'}, Status -={'Closed'} >} Distinct %CaseId )",
            "=Count( {$<Priority={'Medium'}, Status -={'Closed'} >} Distinct %CaseId )",
            "=Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )",
          ],
          outerHeight: 300,
        },
      };
      
      const viz3 = {
        type: 'QdtPicasso',
        props: {
          type: 'custom2',
          cols: [
            'Case Owner Group',
            "=Num(Avg([Case Duration Time]), '##.0')",
            "=Count( {$<Priority={'Low'}, Status -={'Closed'} >} Distinct %CaseId )",
            "=Count( {$<Priority={'Medium'}, Status -={'Closed'} >} Distinct %CaseId )",
            "=Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )",
          ],
          outerHeight: 300,
        },
      };

      // in the QdtComponents class:
      componentWillMount() {
        const { props } = this.props;
        const { settings, components, interactions } = QdtComponents.picasso;
        if (props.type === 'custom1') {
          props.type = null;
          props.settings = settings.verticalBarchart;
          props.settings.scales.y = { data: { fields: ['qMeasureInfo/0', 'qMeasureInfo/1', 'qMeasureInfo/2'] }, invert: true, expand: 0.04 };
          props.settings.components.push(components.line({
            displayOrder: 3, y: { field: 'qMeasureInfo/1' }, stroke: '#960000',
          }));
          props.settings.components.push(components.point({ displayOrder: 4, y: { field: 'qMeasureInfo/1' }, fill: '#960000' }));
          props.settings.components.push(components.line({
            displayOrder: 5, y: { field: 'qMeasureInfo/2' }, stroke: '#99cc66',
          }));
          props.settings.components.push(components.point({ displayOrder: 6, y: { field: 'qMeasureInfo/2' }, fill: '#99cc66' }));
          props.settings.components.push(components.point({ displayOrder: 7, y: { field: 'qMeasureInfo/3' }, fill: '#275378' }));
        } else if (props.type === 'custom2') {
          props.type = null;
          props.settings = {
            scales: {
              x: { data: { extract: { field: 'qDimensionInfo/0' } }, padding: 0.3 },
              y: { data: { fields: ['qMeasureInfo/0', 'qMeasureInfo/1'] }, invert: true, expand: 0.2 },
              c: { data: { field: 'qMeasureInfo/0' }, type: 'color' },
            },
            components: [
              { type: 'grid-line', y: 'y' },
              components.axis(),
              components.axis({ scale: 'y' }),
              components.tooltip,
              components.box({ fill: '#3399CC', stroke: '#275378' }),
              components.labels(),
              components.line({
                key: 'line2', displayOrder: 3, y: { field: 'qMeasureInfo/1' }, stroke: '#CC6666',
              }),
              components.point({
                key: 'point2', displayOrder: 4, y: { field: 'qMeasureInfo/1' }, fill: '#CC6666', stroke: '#B35A01',
              }),
              components.range(),
            ],
            interactions: [
              interactions.itooltip,
              interactions.pan(),
            ],
          };
        }
      }
  `,
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
      <div className="col-md-12">
        <p />
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
        <h5>Define the props in your code</h5>
        <Highlight language="javascript">
          {disCode.code}
        </Highlight>
      </div>
    </div>
  </div>
);

export default PicassoVerticalBarchart;
