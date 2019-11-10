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
    type: 'barchart',
    id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398',
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

const viz3 = {
  type: 'QdtButton',
  props: {
    type: 'clearSelections',
    title: 'Clear All',
  },
};

const viz4 = {
  type: 'QdtFilter',
  props: {
    cols: ['Case Owner Group'],
    placeholder: 'Case Owner',
    single: true,
    autoSortByState: 0,
    showStateInDropdown: true,
  },
};

const disCode = {
  template: '<QdtComponent type={viz2.type} props={viz2.props} />',
  code: `
    const viz2 = {
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
  <div>
    <div className="row pb50">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz1.type} props={viz1.props} />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz4.type} props={viz4.props} />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-12">
        <QdtComponent type={viz3.type} props={viz3.props} />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-12">
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
  </div>
);

export default EmbedObject;
