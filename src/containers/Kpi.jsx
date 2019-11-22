import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';

const disCode = {
  template: '<QdtComponent type="QdtKpi" props={{cols: [`=Count( {$<Priority={\'High\'}, Status -={\'Closed\'} >} Distinct %CaseId )`]}} />',
};
const viz1 = {
  type: 'QdtSelectionToolbar',
  props: {
    type: 'QdtSelectionToolbar', height: '300px',
  },
};
const viz2 = {
  type: 'QdtFilter',
  props: {
    cols: ['Case Owner Group'],
    placeholder: 'Case Owner',
    single: true,
    autoSortByState: 0,
    showStateInDropdown: true,
  },
};

const EmbedObject = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>KPI component</h2>
    <div className="row">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz1.type} props={viz1.props} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 text-center">
        <QdtComponent type={viz2.type} props={viz2.props} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 text-center">
        <h5>High Priority Cases</h5>
        <h1 style={{ color: '#F93F16', fontSize: '5rem' }}><QdtComponent type="QdtKpi" props={{ cols: ["=Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )"] }} /></h1>
      </div>
      <div className="col-md-4 text-center">
        <h5>Medium Priority Cases</h5>
        <h1 style={{ color: '#FFCF02', fontSize: '5rem' }}><QdtComponent type="QdtKpi" props={{ cols: ["=Count( {$<Priority={'Medium'}, Status -={'Closed'} >} Distinct %CaseId )"] }} /></h1>
      </div>
      <div className="col-md-4 text-center">
        <h5>Low Priority Cases</h5>
        <h1 style={{ color: '#266E27', fontSize: '5rem' }}><QdtComponent type="QdtKpi" props={{ cols: ["=Count( {$<Priority={'Low'}, Status -={'Closed'} >} Distinct %CaseId )"] }} /></h1>
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

export default EmbedObject;
