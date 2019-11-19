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
  type: 'QdtTable',
  props: {
    cols: [
      'Case Owner',
      'Employee Status',
      "=Count( {$<Status -={'Closed'} >} Distinct %CaseId )",
    ],
    // options: {
    //   columnWidths: ['50', '50'],
    // },
    height: 400,
    rowHeight: 40,
  },
};

const disCode = {
  template: '<QdtComponent type={viz2.type} props={viz2.props} />',
  code: `
    const viz2 = {
        type: 'QdtTable',
        props: {
          cols: [
            'Case Owner',
            'Employee Status',
            "=Count( {$<Status -={'Closed'} >} Distinct %CaseId )",
          ],
          height: 400,
          rowHeight: 40,
        },
    };`,
};

const Table = () => (
  <div className="singlepage">
    <div className="row">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz1.type} props={viz1.props} />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-12">
        <QdtComponent type={viz2.type} props={viz2.props} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <h4>Define the props in your code</h4>
        <Highlight language="javascript">
          {disCode.code}
        </Highlight>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <h4>Render in your Template</h4>
        <Highlight language="html">
          {disCode.template}
        </Highlight>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <h4>Ref:</h4>
        <a href="https://help.qlik.com/en-US/sense-developer/April2018/Subsystems/APIs/Content/CapabilityAPIs/VisualizationAPI/table-properties.htm">https://help.qlik.com/en-US/sense-developer/April2018/Subsystems/APIs/Content/CapabilityAPIs/VisualizationAPI/table-properties.htm</a>
      </div>
    </div>
  </div>
);

export default Table;
