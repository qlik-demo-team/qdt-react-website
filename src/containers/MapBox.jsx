import React from 'react';
import Highlight from 'react-highlight.js';
import { QdtMapBox } from 'qdt-components';
import QdtComponent from '../components/QdtComponent';

const disCode = {
  template: `
    <QdtComponent
      component={QdtMapBox}
      options={{ height: 400 }}
      properties={properties}
      appIndex={2}
    />
  `,
};

const properties = {
  qHyperCubeDef: {
    qDimensions: [
      { qDef: { qFieldDefs: ['ID'] } },
      { qDef: { qFieldDefs: ['lat'] } },
      { qDef: { qFieldDefs: ['lon'] } },
      { qDef: { qFieldDefs: ['gender'] } },
    ],
    qMeasures: [],
    qInitialDataFetch: [{
      qWidth: 4,
      qHeight: 2500,
    }],
  },
};

const MapBox = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>MapBox</h2>
    <div className="row">
      <div className="col-md-6 object">
        <QdtComponent
          component={QdtMapBox}
          options={{ height: 400 }}
          properties={properties}
          appIndex={2}
        />
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

export default MapBox;
