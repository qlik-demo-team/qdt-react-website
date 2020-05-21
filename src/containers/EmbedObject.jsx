import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';

const disCode = {
  template: '<QdtComponent type={viz1.type} props={viz1.props} />',
  code: `
  `,
};

const EmbedObject = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Embedding a Qlik Chart into your website</h2>
    <div className="row">
      <div className="col-md-6 object">
        {/* <QdtComponent type={viz1.type} props={viz1.props} /> */}
        <div style={{ paddingBottom: 50 }}>
          <QdtComponent
            options={{
              id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398',
              height: 400,
            }}
            appIndex={3}
          />
        </div>
      </div>
      <div className="col-md-6 object">
        <div style={{ paddingBottom: 50 }}>
          <QdtComponent
            options={{
              id: 'PAppmU',
              height: 400,
            }}
            appIndex={3}
          />
        </div>
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
