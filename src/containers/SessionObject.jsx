import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';

const viz1 = {
  type: 'QdtButton',
  props: {
    type: 'clearSelections', title: 'Clear Selections',
  },
};
const viz2Options = {
  showTitles: true,
  title: 'Custom title',
  subtitle: 'Custom Subtitle',
  footnote: 'Custom Footnote',
  scrollStartPos: 0,
  orientation: 'horizontal',
  dataPoint: {
    showLabels: true,
  },
  qHyperCubeDef: {
    qDimensions: [{
      qDef: {
        qGrouping: 'N',
        qFieldDefs: ['Case Owner Group'],
        qSortCriterias: [{
          qSortByState: 0,
          qSortByFrequency: 0,
          qSortByNumeric: 0,
          qSortByAscii: 1,
          qSortByLoadOrder: 1,
          qSortByExpression: 0,
          qExpression: {
            qv: '',
          },
          qSortByGreyness: 0,
        }],
      },
    }],
    qMeasures: [{
      qDef: {
        qDef: '=Avg([Case Duration Time])',
        qLabel: 'Custom Measure Label',
      },
      qSortBy: {
        qSortByState: 0,
        qSortByFrequency: 0,
        qSortByNumeric: -1,
        qSortByAscii: 0,
        qSortByLoadOrder: 0,
        qSortByExpression: 0,
        qExpression: {
          qv: '',
        },
      },
      qAttributeExpressions: [{
        qExpression: "If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Low', rgb(39,110,39),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Medium', rgb(255,207,2),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='High', rgb(249,63,23))))",
        id: 'colorByExpression',
      }],
    }],
    qInterColumnSortOrder: [
      1,
      0,
    ],
    qSuppressZero: true,
    qSuppressMissing: false,
  },
  color: {
    auto: false,
    mode: 'byExpression',
    expressionIsColor: true,
  },
  legend: {
    show: true,
  },
  dimensionAxis: {
    show: 'labels',
  },
  measureAxis: {
    show: 'labels',
    spacing: 2,
  },
};
const viz2 = {
  type: 'QdtViz',
  props: {
    type: 'barchart', options: viz2Options, height: '300px',
  },
};

const disCode = {
  template: '<QdtComponent type={viz2.type} props={viz2.props} />',
  code: `
    const viz2 = {
        type: 'QdtViz',
        props: {
        type: 'barchart', options: viz2Options, height: '300px',
        },
    };`,
  code2: `const viz2Options = {
    showTitles: true,
    title: 'Custom title',
    subtitle: 'Custom Subtitle',
    footnote: 'Custom Footnote',
    scrollStartPos: 0,
    orientation: 'horizontal',
    dataPoint: {
      showLabels: true,
    },
    qHyperCubeDef: {
      qDimensions: [{
        qDef: {
          qGrouping: 'N',
          qFieldDefs: ['Case Owner Group'],
          qSortCriterias: [{
            qSortByState: 0,
            qSortByFrequency: 0,
            qSortByNumeric: 0,
            qSortByAscii: 1,
            qSortByLoadOrder: 1,
            qSortByExpression: 0,
            qExpression: {
              qv: '',
            },
            qSortByGreyness: 0,
          }],
        },
      }],
      qMeasures: [{
        qDef: {
          qDef: '=Avg([Case Duration Time])',
          qLabel: 'Custom Measure Label',
        },
        qSortBy: {
          qSortByState: 0,
          qSortByFrequency: 0,
          qSortByNumeric: -1,
          qSortByAscii: 0,
          qSortByLoadOrder: 1,
          qSortByExpression: 0,
          qExpression: {
            qv: '',
          },
        },
        qAttributeExpressions: [{
          qExpression: "If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Low', rgb(39,110,39),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='Medium', rgb(255,207,2),  If(firstsortedvalue( Priority, -Aggr(Count({<[Cases Open/Closed]={'Open Cases'}>}Distinct [%CaseId] ),[Case Owner Group],Priority))='High', rgb(249,63,23))))",
          id: 'colorByExpression',
        }],
      }],
      qInterColumnSortOrder: [
        1,
        0,
      ],
      qSuppressZero: false,
      qSuppressMissing: true,
    },
    color: {
      auto: false,
      mode: 'byExpression',
      expressionIsColor: true,
    },
    legend: {
      show: true,
    },
    dimensionAxis: {
      show: 'labels',
    },
    measureAxis: {
      show: 'labels',
      spacing: 2,
    },
  };
  const viz2 = {
    type: 'QdtViz',
    props: {
      type: 'barchart', options: viz2Options, height: '300px',
    },
  };`,
};

const SessionObject = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Session Object</h2>
    <div className="">Create an object programatically by defining its properties</div>
    <div className="row">
      <div className="col-md-12 text-right">
        <QdtComponent type={viz1.type} props={viz1.props} />
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
          {disCode.code2}
        </Highlight>
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

export default SessionObject;
