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

// const url = 'https://18.206.201.18:443/qdt-components/tempcontent/3c7883eb-5f36-4d41-8f12-f6310bbdd14f/26cc8265-17b5-4fc8-9915-e7c503dc191e.csv?serverNodeId=125cd3b9-a9af-4069-8e62-e46e40567703';
// const tempUrl = url.split('/');
// const host = `${tempUrl[0]}//${tempUrl[2]}`;
// const tcIndex = tempUrl.indexOf('tempcontent');
// const partialUrl = tempUrl.slice(tcIndex, tempUrl.length).join('/');
// const finalUrl = `${host}/${partialUrl}`;
// // const protocol = tempUrl[0];
// // tempUrl = tempUrl[1].split('/');
// console.log(finalUrl);
// const tcIndex = tempUrl.indexOf('tempcontent');
// tempUrl.splice(tcIndex, tcIndex - 2);
// const finalUrl = `${protocol}//${tempUrl.join('/')}`;
// console.log(tcIndex);
// console.log(tempUrl);
// console.log(finalUrl);
// console.log(url);

const EmbedObject = () => (
  <div>
    <div className="row pb50">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz1.type} props={viz1.props} />
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
