import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';

const disCode = {
  template: `
    <QdtComponent
      type="QdtPicasso"
      props={{
        type: 'merimekko',
        cols: [
          'Case Owner Group',
          'Priority',
          '=Count(Distinct {$<[Case Is Closed] ={'False'} >} [%CaseId])',
        ],
        outerHeight: 300,
      }}
    />
  `,
};

const MapBox = () => (
  <div className="singlepage">

    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Merimekko chart made with Picasso</h2>
    <div className="row">
      <div className="col-md-12">
        <QdtComponent
          type="QdtPicasso"
          props={{
            type: 'merimekko',
            cols: [
              'Case Owner Group',
              'Priority',
              '=Count(Distinct {$<[Case Is Closed] ={\'False\'} >} [%CaseId])',
            ],
            outerHeight: 600,
          }}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <QdtComponent
          type="QdtSelectionToolbar"
          props={{ height: '300px' }}
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
