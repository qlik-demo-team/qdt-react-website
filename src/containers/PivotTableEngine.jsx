import React, { useState, useEffect } from 'react';
import {
  getTreeData, getHCPivot, getHC, getSelections,
} from '../components/QdtApi';
import QdtComponent from '../components/QdtComponent';

const viz1 = {
  type: 'QdtSelectionToolbar',
  props: {
    type: 'QdtSelectionToolbar', height: '300px',
  },
};
// const viz2 = {
//   type: 'QdtCurrentSelections',
//   props: { height: '40px' },
// };
const vizFilter1 = {
  type: 'QdtFilter',
  props: {
    cols: ['Status'],
    placeholder: 'Status',
    single: true,
    autoSortByState: 0,
    showStateInDropdown: true,
  },
};
const vizFilter2 = {
  type: 'QdtFilter',
  props: {
    cols: ['Case Owner Group'],
    placeholder: 'Case Owner Group',
    single: true,
    autoSortByState: 0,
    showStateInDropdown: true,
  },
};

function Container() {
  const [data, setData] = useState(null);
  // const [loaded, setLoaded] = useState(null);
  const [visibleRow, setVisibleRow] = useState(null);

  const PivotTable = () => (
    <>
      {data
        && (
          <div className="pivot-table">
            <div className="row">
              <div className="col-md-1">#</div>
              <div className="col-md-8">STATUS</div>
              <div className="col-md-3 text-right">TOTAL CASES</div>
            </div>
            {data.qNodes.map((level1) => (
              <div key={`${level1.qElemNo + 1}-0`}>
                <div className="row header" role="button" tabIndex={0} onClick={() => setVisibleRow(level1.qElemNo)}>
                  <div className="col-md-1">{level1.qElemNo + 1}</div>
                  <div className="col-md-8">{level1.qText}</div>
                  <div className="col-md-3 text-right">{level1.qValues[0].qText}</div>
                </div>
                {visibleRow === level1.qElemNo && level1.qNodes.map((level2) => (
                  <div className="row" key={`${level2.qParentNode}-${level2.qElemNo + 1}`}>
                    <div className="col-md-1">{`${level2.qParentNode}-${level2.qElemNo + 1}`}</div>
                    <div className="col-md-8">{level2.qText}</div>
                    <div className="col-md-3 text-right">{level2.qValues[0].qText}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
    </>
  );

  useEffect(() => {
    async function fetchData() {
      const dataTemp = await getTreeData();
      const qObjectSelections = await getSelections();

      qObjectSelections.on('changed', async () => {
        const dataAfterSelections = await getTreeData();
        setData(dataAfterSelections);
      });
      setData(dataTemp);
      getHCPivot();
      getHC();
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className="row pb50">
        <div className="col-md-12 text-left">
          <QdtComponent type={viz1.type} props={viz1.props} />
        </div>
      </div>
      {/* <div className="row pb50">
        <div className="col-md-12 text-left">
          <QdtComponent type={viz2.type} props={viz2.props} />
        </div>
      </div> */}
      <div className="row pb50">
        <div className="col-md-3 text-left">
          <QdtComponent type={vizFilter1.type} props={vizFilter1.props} />
        </div>
        <div className="col-md-3 text-left">
          <QdtComponent type={vizFilter2.type} props={vizFilter2.props} />
        </div>
      </div>
      <div className="row pb50">
        <div className="col-md-12">
          <PivotTable />
        </div>
      </div>
    </div>
  );
}

export default Container;
