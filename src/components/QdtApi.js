import { qdtComponents } from './QdtApp';

// https://help.qlik.com/en-US/sense-developer/June2019/APIs/EngineAPI/definitions-TreeDataDef.html
// https://help.qlik.com/en-US/sense-developer/June2019/APIs/EngineAPI/definitions-NxTreeDimensionDef.html
const getTreeData = async () => {
  try {
    const qProp = {
      qInfo: { qType: 'data' },
      qTreeDataDef: {
        // qStateName: '$',
        qDimensions: [
          {
            qDef: {
              qFieldDefs: ['Status'],
              // qGrouping: 'GRP_NX_HIEARCHY',
              // qActiveField: 1,
              // qFieldLabels: [
              //   'Status Yianni',
              //   'Department Yianni',
              // ],
            },
            qSortCriterias: [{ qSortByAscii: -1 }],
            // qAttributeDimensions: [
            //   {
            //     qDef: '=Department',
            //     qAttribute: true,
            //   },
            // ],
            qValueExprs: [
              { qDef: { qDef: '=Count([Case Count])' } },
              // { qDef: { qDef: '=If(Count({$<[Case Is Closed]={\'True\'} >}  %CaseId)>0, Avg ([Case Duration Time]),0)+ If(Count({$<[Case Is Closed]={\'False\'} >}  %CaseId)>0, Avg([Case Aging]), 0)' } },
            ],
            // qNullSuppression: true,
            qShowAll: false,
            qTotalLabel: 'Totals',
          },
          {
            qDef: { qFieldDefs: ['Case Owner Group'] },
            qSortCriterias: [{ qSortByAscii: -1 }],
            qValueExprs: [
              { qDef: { qDef: '=Count([Case Count])' } },
              // { qDef: { qDef: '=If(Count({$<[Case Is Closed]={\'True\'} >}  %CaseId)>0, Avg ([Case Duration Time]),0)+ If(Count({$<[Case Is Closed]={\'False\'} >}  %CaseId)>0, Avg([Case Aging]), 0)' } },
            ],
            qNullSuppression: true,
            qShowAll: false,
            qTotalLabel: 'Totals',
          },
        ],
        qInterColumnSortOrder: [0, 1],
        // qSuppressZero: true,
        // qSuppressMissing: true,
        qOpenFullyExpanded: true,
        qTitle: 'Test Tree',
        // https://help.qlik.com/en-US/sense-developer/June2019/APIs/EngineAPI/definitions-NxTreeDataOption.html
        // qInitialDataFetch: [{
        //   qMaxNbrOfNodes: 3,
        // qTreeNodes: [{ qAllValues: true }, { qAllValues: true }],
        // }],
        // qInitialDataFetch: [
        //   {
        //     qTop: 0,
        //     qLeft: 0,
        //     qHeight: 5,
        //     qWidth: 100,
        //   },
        // ],
      },
    };
    const qDoc = await qdtComponents.qDocPromise;
    const qObject = await qDoc.createSessionObject(qProp);
    const qData = await qObject.getHyperCubeTreeData('/qTreeDataDef');
    // setTimeout(async () => {
    //   await qObject.selectHyperCubeValues('/qTreeDataDef', 1, [0], true);
    //   const qData2 = await qObject.getHyperCubeTreeData('/qTreeDataDef');
    //   console.log(qData2[0]);
    // }, 3000);

    console.warn('Tree Data');
    console.log(qData[0]);
    return qData[0];
  } catch (error) {
    console.log(error);
  }
  return false;
};

const getSelections = async () => {
  const qDoc = await qdtComponents.qDocPromise;
  const qPropSelections = { qInfo: { qType: 'SelectionObject' }, qSelectionObjectDef: {} };
  const qObjectSelections = await qDoc.createSessionObject(qPropSelections);
  const qObjectSelectionsLayout = await qObjectSelections.getLayout();
  console.log(qObjectSelectionsLayout);
  return qObjectSelections;
};

const getHCPivot = async () => {
  const qPage = {
    qTop: 0,
    qLeft: 0,
    qWidth: 5,
    qHeight: 100,
  };
  const qProp = {
    qInfo: { qType: 'data' },
    qHyperCubeDef: {
      qDimensions: [
        { qDef: { qFieldDefs: ['Status'] } },
        { qDef: { qFieldDefs: ['Department'] } },
      ],
      qMeasures: [{ qDef: { qDef: '=Count([Case Count])' } }],
      qSuppressZero: true,
      qSuppressMissing: false,
      qAlwaysFullyExpanded: true,
      // qMode: 'EQ_DATA_MODE_PIVOT',
      // qNoOfLeftDims: 1,
      // qInterColumnSortOrder: [ 1, 0 ],
      qMode: 'EQ_DATA_MODE_PIVOT_STACK',
      qNoOfLeftDims: -1,
      qInterColumnSortOrder: [],
      qSortPivotByYValue: [],
      qInitialDataFetch: [
        {
          qTop: 0,
          qLeft: 0,
          qHeight: 5,
          qWidth: 100,
        },
      ],
    },
  };
  const qDoc = await qdtComponents.qDocPromise;
  const qObject = await qDoc.createSessionObject(qProp);
  const qData = await qObject.getHyperCubePivotData('/qHyperCubeDef', [{ ...qPage, qTop: 0 }]);
  console.warn('Pivot Table Data');
  console.log(qData[0]);
  return qData;
};

const getHC = async () => {
  const qPage = {
    qTop: 0,
    qLeft: 0,
    qWidth: 5,
    qHeight: 100,
  };
  const qProp = {
    qInfo: { qType: 'data' },
    qHyperCubeDef: {
      qDimensions: [
        { qDef: { qFieldDefs: ['Status'] } },
        { qDef: { qFieldDefs: ['Department'] } },
      ],
      qMeasures: [
        { qDef: { qDef: '=Count([Case Count])' } },
        { qDef: { qDef: '=If(Count({$<[Case Is Closed]={\'True\'} >}  %CaseId)>0, Avg ([Case Duration Time]),0)+ If(Count({$<[Case Is Closed]={\'False\'} >}  %CaseId)>0, Avg([Case Aging]), 0)' } },
      ],
      qSuppressZero: true,
      qSuppressMissing: false,
      qAlwaysFullyExpanded: true,
    },
  };
  const qDoc = await qdtComponents.qDocPromise;
  const qObject = await qDoc.createSessionObject(qProp);
  const qData = await qObject.getHyperCubeData('/qHyperCubeDef', [{ ...qPage, qTop: 0 }]);
  console.warn('Simple HyperCube');
  console.log(qData[0].qMatrix);
  return qData;
};

export {
  getTreeData, getHCPivot, getHC, getSelections,
};
