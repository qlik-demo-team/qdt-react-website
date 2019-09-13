import React, { useEffect } from 'react';
import { getTreeData, getHCPivot, getHC } from '../components/QdtApi';
import QdtComponent from '../components/QdtComponent';

const viz1 = {
  type: 'QdtSelectionToolbar',
  props: {
    type: 'QdtSelectionToolbar', height: '300px',
  },
};
const viz2 = {
  type: 'QdtCurrentSelections',
  props: { height: '40px' },
};
const viz3 = {
  type: 'QdtFilter',
  props: {
    cols: ['Status'],
    placeholder: 'Status',
    single: true,
    autoSortByState: 0,
    showStateInDropdown: true,
  },
};

function Table() {
  useEffect(() => {
    getTreeData();
    getHCPivot();
    getHC();
  });
  return (
    <div>
      <div className="row pb50">
        <div className="col-md-12 text-left">
          <QdtComponent type={viz1.type} props={viz1.props} />
        </div>
      </div>
      <div className="row pb50">
        <div className="col-md-12 text-left">
          <QdtComponent type={viz2.type} props={viz2.props} />
        </div>
      </div>
      <div className="row pb50">
        <div className="col-md-12 text-left">
          <QdtComponent type={viz3.type} props={viz3.props} />
        </div>
      </div>
      <div className="row pb50">
        <div className="col-md-12">
          test
        </div>
      </div>
    </div>
  );
}

export default Table;
