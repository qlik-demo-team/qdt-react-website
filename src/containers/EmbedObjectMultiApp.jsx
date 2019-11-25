import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';

const disCode = {
  template: `
        <QdtComponent type={viz1.type} props={viz1.props} />
        <QdtComponent type={viz2.type} props={viz2.props} app2 />
    `,
  code: `
    const viz1 = {
        type: 'QdtViz',
        props: {
        id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', height: '300px',
        },
    };
    const viz2 = {
        type: 'QdtViz',
        props: {
          id: 'akDGX', height: '300px',
        },
      };
  `,
};

const EmbedObject = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Embedding objects from multiple Qlik Sense apps</h2>
    <div className="row">
      <div className="col-md-12">
        <h3>App #1: Helpdesk</h3>
      </div>
      <div className="col-md-6">
        <QdtComponent type="QdtViz" props={{ id: 'jTuCwkB', height: '300px' }} />
      </div>
      <div className="col-md-6">
        <QdtComponent type="QdtViz" props={{ id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', height: '300px' }} />
      </div>
    </div>
    <div className="row pb50">


      <div className="col-md-12">
        <h3>App #2: Consumer Sales</h3>
      </div>
      <div className="col-md-6">
        <QdtComponent type="QdtViz" props={{ id: 'PyQXKt', height: '300px' }} app2 />
      </div>
      <div className="col-md-6">
        <QdtComponent type="QdtViz" props={{ id: 'MRmuW', height: '300px' }} app2 />
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

export default EmbedObject;
