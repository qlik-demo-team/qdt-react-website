import React from 'react';
import Highlight from 'react-highlight.js';
import { QdtSelect, QdtList, QdtSelections } from 'qdt-components';
import QdtComponent from '../components/QdtComponent';

const disCode = {
  template: `
    `,
  code: `
  `,
};

const Table = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Data Filters</h2>

    <div style={{ paddingBottom: 50 }}>
      <QdtComponent
        component={QdtSelections}
        properties={{
          qSelectionObjectDef: {},
        }}
      />
    </div>
    <div className="row ">
      <div className="col-xs-12 object">
        <h3>Dropdown component - Case Owner Group</h3>
        <QdtComponent
          component={QdtSelect}
          options={{ multiple: false }}
          properties={{
            qListObjectDef: {
              qDef: {
                qFieldDefs: ['Case Owner Group'],
              },
              qInitialDataFetch: [{
                qWidth: 1,
                qHeight: 1000,
              }],
            },
          }}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-6 object">
        <h3>List component - Case Owner - IT Resources</h3>
        <QdtComponent
          component={QdtList}
          options={{ height: 300 }}
          properties={{
            qListObjectDef: {
              qDef: {
                qFieldDefs: ['Case Owner'],
              },
              qInitialDataFetch: [{
                qWidth: 1,
                qHeight: 1000,
              }],
            },
          }}
        />
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 object">
        <h3>List component - Case Owner Group - Department</h3>
        <QdtComponent
          component={QdtList}
          options={{ height: 300 }}
          properties={{
            qListObjectDef: {
              qDef: {
                qFieldDefs: ['Case Owner Group'],
              },
              qInitialDataFetch: [{
                qWidth: 1,
                qHeight: 1000,
              }],
            },
          }}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-12 mb-3 object">
        <h3>Expanded List component</h3>
        {/* <QdtComponent type={viz4.type} props={viz4.props} /> */}
        {/* <QdtComponent
          component={QdtTable}
          properties={{
            qHyperCubeDef: {
              qDimensions: [
                { qDef: { qFieldDefs: ['Case Owner'] } },
              ],
              qMeasures: [],
              qInitialDataFetch: [{
                qWidth: 1,
                qHeight: 2500,
              }],
            },
          }}
        /> */}
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        {/* <QdtComponent type={viz1.type} props={viz1.props} /> */}
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
    <a className="link" href="#/">🢐 back to gallery</a>

  </div>
);

export default Table;
