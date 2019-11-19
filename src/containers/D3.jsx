import React from 'react';
import Highlight from 'react-highlight.js';
import QdtComponent from '../components/QdtComponent';

const disCode = {
  template: '<QdtComponent type={viz1.type} props={viz1.props} />',
  code: `const viz1 = {
    type: 'QdtSearch',
    props: {
        cols: ['Case Owner'], options: { placeholder: 'Search Case Owner' },
    },
};`,
};

const Search = () => (
  <div>
    <div className="row pb50">
      <div className="col-md-12 text-left">
        <QdtComponent type="QdtSelectionToolbar" props={{ height: '300px' }} />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-12">
        <QdtComponent
          type="QdtD3"
          props={{
            type: 'comboLineBarchart',
            // cols: [
            //   'Case Owner Group',
            //   '=Sum([Number of New Cases])',
            //   '=Num(Avg([Case Duration Time]), \'##.0\')',
            // ],
            cols: [
              'Case Owner Group',
              '=Count( {$<Priority={\'High\'}, Status -={\'Closed\'} >} Distinct %CaseId )',
              '=Count( {$<Priority={\'Medium\'}, Status -={\'Closed\'} >} Distinct %CaseId )',
            ],
            // cols: ['Case Owner Group', 'Priority', '=Count(Distinct [%CaseId])'],
            outerHeight: 300,
            qInterColumnSortOrder: [1, 0],
            qSuppressZero: true,
            qPage: {
              qTop: 0,
              qLeft: 0,
              qWidth: 3,
              qHeight: 10,
            },
          }}
        />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-12">
        <QdtComponent
          type="QdtD3"
          props={{
            type: 'barchart',
            cols: ['Case Owner Group', '=Sum([Number of New Cases])'],
            outerHeight: 300,
            qInterColumnSortOrder: [1, 0],
            qSuppressZero: true,
            qPage: {
              qTop: 0,
              qLeft: 0,
              qWidth: 2,
              qHeight: 10,
            },
            canvas: true,
          }}
        />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-12">
        <QdtComponent
          type="QdtD3"
          props={{
            type: 'barchart',
            cols: ['Case Owner Group', '=Sum([Number of New Cases])'],
            outerHeight: 300,
            qInterColumnSortOrder: [1, 0],
            qSuppressZero: true,
            qPage: {
              qTop: 0,
              qLeft: 0,
              qWidth: 2,
              qHeight: 10,
            },
          }}
        />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-12">
        <QdtComponent
          type="QdtD3"
          props={{
            type: 'linechart',
            cols: ['Case Owner Group', '=Sum([Number of New Cases])'],
            outerHeight: 300,
            qInterColumnSortOrder: [1, 0],
            qSuppressZero: true,
            qPage: {
              qTop: 0,
              qLeft: 0,
              qWidth: 2,
              qHeight: 10,
            },
          }}
        />
      </div>
    </div>
    <div className="row pb50">
      <div className="col-md-12">
        <QdtComponent
          type="QdtViz"
          props={{
            id: 'a5e0f12c-38f5-4da9-8f3f-0e4566b28398',
            height: '300px',
          }}
        />
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

export default Search;
