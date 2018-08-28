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
  type: 'QdtFilter',
  props: {
    cols: ['Case Owner Group'],
  },
};
const viz3 = {
  type: 'QdtFilter',
  props: {
    cols: ['Case Owner Group'],
    placeholder: 'Expanded',
    expanded: true,
  },
};

const viz4 = {
  type: 'QdtFilter',
  props: {
    cols: ['Case Owner Group'],
    placeholder: 'Expanded',
    single: true,
    expandedHorizontal: true,
    expandedHorizontalSense: false,
    autoSortByState: 0,
  },
};

const disCode = {
  template: `
<QdtComponent type={viz1.type} props={viz1.props} />
<QdtComponent type={viz2.type} props={viz2.props} />
<QdtComponent type={viz3.type} props={viz3.props} />
<QdtComponent type={viz4.type} props={viz4.props} />
    `,
  code: `    
const viz1 = {
    type: 'QdtSelectionToolbar',
    props: {
      type: 'QdtSelectionToolbar', height: '300px',
    },
  };
  const viz2 = {
    type: 'QdtFilter',
    props: {
      cols: ['Case Owner'],
    },
  };
  const viz3 = {
    type: 'QdtFilter',
    props: {
      cols: ['Case Owner'],
      placeholder: 'Expanded',
      expanded: true,
    },
  };
  const viz4 = {
    type: 'QdtFilter',
    props: {
      cols: ['Case Owner Group'],
      placeholder: 'Expanded',
      single: true,
      expandedHorizontal: true,
      expandedHorizontalSense: false,
      autoSortByState: 0,
    },
  };`,
};

const Table = () => (
  <div>
    <div className="row pb50">
      <div className="col-md-12 text-left">
        <QdtComponent type={viz1.type} props={viz1.props} />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-xs-6 col-sm-6 col-md-4 col-xl-3">
        <QdtComponent type={viz2.type} props={viz2.props} />
      </div>
      <div className="col-xs-6 col-sm-6 col-md-4 col-xl-3">
        <QdtComponent type={viz3.type} props={viz3.props} />
      </div>
      <div className="col-12">
        <QdtComponent type={viz4.type} props={viz4.props} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <h4>Define the props in your code</h4>
        <Highlight language="javascript">
          {disCode.code}
        </Highlight>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-left">
        <h4>Render in your Template</h4>
        <Highlight language="html">
          {disCode.template}
        </Highlight>
      </div>
    </div>
  </div>
);

export default Table;
