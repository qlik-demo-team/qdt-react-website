import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';


const viz1 = {
  type: 'QdtViz',
  props: {
    type: 'barchart',
    id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398',
    // id: 'rjcpNwp',
    height: '300px',
    exportData: true,
    // noInteraction: true,
    // noSelections: false,
    exportImg: true,
    exportImgOptions: { width: 600, height: 400, format: 'JPG' },
    exportPdf: true,
    exportPdfOptions: { documentSize: { width: 300, height: 150 } },
  },
};

const viz2 = {
  type: 'QdtButton',
  props: {
    type: 'clearSelections',
    title: 'Clear Chart Selections',
  },
};


const disCode = {
  template: '<QdtComponent type={viz1.type} props={viz1.props} />',
  code: `
    const viz1 = {
      type: 'QdtViz',
      props: {
        type: 'barchart', 
        id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398', 
        height: '300px',      
        exportData: true,
        exportImg: true,
        exportImgOptions: { width: 600, height: 400, format: 'JPG' },
        exportPdf: true,
        exportPdfOptions: { documentSize: { width: 300, height: 150 } },
      },
    };`,
};

const EmbedObject = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Embedding a Qlik Chart into your website</h2>
    <div className="row">
      <div className="col-md-6 object">
        <QdtComponent type={viz1.type} props={viz1.props} />
      </div>
      <div className="col-md-2">
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
    <a className="link" href="#/">🢐 back to gallery</a>

  </div>
);

export default EmbedObject;
