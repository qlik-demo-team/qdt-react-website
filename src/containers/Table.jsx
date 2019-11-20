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
  type: 'QdtViz',
  props: {
    type: 'table',
    cols: [
      'Case Owner',
      'Employee Status',
      "=dual(floor((vToday - [Employee Hire Date])/365) & 'y ' & floor(((vToday - [Employee Hire Date])/365 - floor((vToday - [Employee Hire Date])/365)) * 12) & 'm', vToday - [Employee Hire Date])",
      "=Count( {$<Status -={'Closed'} >} Distinct %CaseId )",
      "=Count( {$<[Case Is Closed] ={'True'} >} %CaseId )",
      '=Count(Distinct [%CaseId])',
    ],
    options: {
      showTitles: true,
      title: 'Resource Details',
    },
    height: '300px',
  },
};

const disCode = {
  template: '<QdtComponent type={viz2.type} props={viz2.props} />',
  code: `
    const viz2 = {
        type: 'QdtViz',
        props: {
          type: 'table',
          cols: [
            'Case Owner',
            'Employee Status',
            "=dual(floor((vToday - [Employee Hire Date])/365) & 'y ' & floor(((vToday - [Employee Hire Date])/365 - floor((vToday - [Employee Hire Date])/365)) * 12) & 'm', vToday - [Employee Hire Date])",
            "=Count( {$<Status -={'Closed'} >} Distinct %CaseId )",
            "=Count( {$<[Case Is Closed] ={'True'} >} %CaseId )",
            '=Count(Distinct [%CaseId])',
          ],
          options: {
            showTitles: true,
            title: 'Resource Details',
          },
          height: '300px',
        },
    };`,
};

const Table = () => (
  <div className="singlepage">
    <a className="link" href="../">🢐 back to gallery</a>
    <h2>Table</h2>
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
    <a className="link" href="../">🢐 back to gallery</a>

  </div>
);

export default Table;
