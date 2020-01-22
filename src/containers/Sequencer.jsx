import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';

const viz1 = {
  type: 'QdtSequencer',
  props: {
    cols: ['Date'],
    keyCode: 32,
    delay: 1,
    wheel: true,
  },
};

const viz2 = {
  type: 'QdtTable',
  props: {
    cols: [
      {
        qDef: {
          qLabel: 'Date',
          qFieldDefs: ['Date'],
          qSortCriterias: [{ qSortByAscii: 1 }],
        },
      },
      {
        qDef: {
          qLabel: 'Subject',
          qFieldDefs: ['Subject'],
        },
      },
      {
        qDef: {
          qLabel: 'Case Owner',
          qFieldDefs: ['Case Owner'],
        },
      },
      {
        qDef: {
          qLabel: 'Status',
          qFieldDefs: ['Status'],
        },
      },
    ],
    height: 400,
    rowHeight: 40,
  },
};

const disCode = {
  template: '<QdtComponent type="QdtSequencer" props={cols: [\'Date\'], keyCode: 32, delay: 1} />',
  code: `
  `,
};

const Table = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Sequencer (Engine API)</h2>

    <div className="row">
      <div className="col-md-12 text-left">
        <QdtComponent type="QdtSelectionToolbar" props={{ type: 'QdtSelectionToolbar', height: '300px' }} />
      </div>
    </div>

    <div className="row pb50">
      <div className="col-md-12 object">
        <QdtComponent type={viz1.type} props={viz1.props} />
      </div>
    </div>

    <div className="row pb50">
      <div className="col-md-12 object">
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
    <a className="link" href="#/">🢐 back to gallery</a>

  </div>
);

export default Table;
