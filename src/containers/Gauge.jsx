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
  type: 'QdtPicasso',
  props: {
    type: 'verticalGauge',
    cols: ['=Num(Avg([Case Duration Time]), \'##.#0\')'],
    options: { min: 10, max: 40 },
    outerHeight: 400,
  },
};

const viz3 = {
  type: 'QdtPicasso',
  props: {
    type: 'verticalRangeGauge',
    cols: [
      '=Num(Avg([Case Duration Time]), \'##.#0\')', // Current
      "=Min({<Priority={'High'}>}[Case Duration Time] )", // Range Min
      "=Max({<Priority={'High'}>}[Case Duration Time] )", // Range Max
      '=Min({1}[Case Duration Time])', // Min
      '=Max({1}[Case Duration Time])', // Max
    ],
    outerHeight: 400,
  },
};

const viz4 = {
  type: 'QdtFilter',
  props: {
    cols: ['Case Owner Group'],
    placeholder: 'Select Case Owner Group',
    single: true,
    showStateInDropdown: true,
  },
};

const disCode = {
  template: `  
    <div className="row">
        <div className="col-md-12 text-left">
            <QdtComponent type={viz1.type} props={viz1.props} />
        </div>
        </div>
        <div className="row">
        <div className="col-md-3 text-left">
            <QdtComponent type={viz4.type} props={viz4.props} />
        </div>
        </div>
        <div className="row">
        <div className="col-md-3">
            <h5>Vertical Bar Gauge</h5>
            <QdtComponent type={viz2.type} props={viz2.props} />
        </div>
        <div className="col-md-3">
            <h5>Vertical Bar Gauge with Range limits</h5>
            <QdtComponent type={viz3.type} props={viz3.props} />
        </div>
    </div>
  `,
  code: `
    const viz2 = {
        type: 'QdtPicasso',
        props: {
        type: 'verticalGauge',
        cols: ['=Avg([Case Duration Time])'],
        options: { min: 10, max: 40 },
        outerHeight: 400,
        },
    };
    const viz3 = {
      type: 'QdtPicasso',
      props: {
        type: 'verticalRangeGauge',
        cols: [
          '=Avg([Case Duration Time])', // Current
          "=Min({<Priority={'High'}>}[Case Duration Time] )", // Range Min
          "=Max({<Priority={'High'}>}[Case Duration Time] )", // Range Max
          '=Min({1}[Case Duration Time])', // Min
          '=Max({1}[Case Duration Time])', // Max
        ],
        outerHeight: 400,
      },
    };    
    const viz4 = {
      type: 'QdtFilter',
      props: {
        cols: ['Case Owner Group'],
        placeholder: 'Select Case Owner Group for testing',
      },
    };  
      `,
};

const PicassoLinechart = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Gauge chart</h2>
    <div className="row">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz1.type} props={viz1.props} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 text-left">
        <QdtComponent type={viz4.type} props={viz4.props} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 text-center">
        <h5>
Vertical
          <br />
Bar Gauge
        </h5>
        <QdtComponent type={viz2.type} props={viz2.props} />
      </div>
      <div className="col-md-3 text-center">
        <h5>
Vertical Bar Gauge
          <br />
with Range limits
        </h5>
        <QdtComponent type={viz3.type} props={viz3.props} />
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

export default PicassoLinechart;
