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
    type: 'gantt',
    cols: ['%CaseId', '=["Case Created Date"]', '=["Case Closed Date"]'],
    outerHeight: 600,
    prio: 'svg',
    options: {
      bar: { height: 30 },
    },
    qSuppressZero: true,
    qSuppressMissing: true,
    // qInterColumnSortOrder: [2, 1],
    // qSortByExpression: -1,
    // qExpression: { qv: '=["Case Closed Date"]' },
    qPage: {
      qTop: 0,
      qLeft: 0,
      qWidth: 3,
      qHeight: 18,
    },
  },
};

const disCode = {
  template: '<QdtComponent type={viz2.type} props={viz2.props} />',
  code: `const viz2 = {
        type: 'QdtPicasso',
        props: {
          type: 'gantt',
          cols: ['%CaseId', '=["Case Created Date"]', '=["Case Closed Date"]'],
          outerHeight: 600,
          prio: 'svg',
          options: {
            bar: { height: 30 },
          },
          qSuppressZero: true,
          qSuppressMissing: true,
          qPage: {
            qTop: 0,
            qLeft: 0,
            qWidth: 3,
            qHeight: 18,
          },
        },
    };`,
};

const PicassoGantt = () => (
  <div className="singlepage">
    <a className="link" href="#/">🢐 back to gallery</a>
    <h2>Gantt Chart made with Picasso</h2>

    <div className="row">
      <div className="col-md-6 object">
        <QdtComponent type={viz2.type} props={viz2.props} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz1.type} props={viz1.props} />
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

export default PicassoGantt;
