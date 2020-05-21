import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header';
import Home from '../containers/Home';
import EmbedObject from '../containers/EmbedObject';
// import EmbedObjectMultiApp from '../containers/EmbedObjectMultiApp';
// import SessionObject from '../containers/SessionObject';
import SelectionToolbar from '../containers/SelectionToolbar';
// import PicassoHorizontalBarchart from '../containers/PicassoHorizontalBarchart';
// import PicassoVerticalBarchart from '../containers/PicassoVerticalBarchart';
// import PicassoPieChart from '../containers/PicassoPieChart';
// import PicassoScatterplot from '../containers/PicassoScatterplot';
// import PicassoScatterplotImages from '../containers/PicassoScatterplotImages';
// import PicassoLinechart from '../containers/PicassoLinechart';
// import PicassoMultiLinechart from '../containers/PicassoMultiLinechart';
// import PicassoComboLineBarchart from '../containers/PicassoComboLineBarchart';
// import Search from '../containers/Search';
// import CurrentSelections from '../containers/CurrentSelections';
// import PicassoStackedBarchart from '../containers/PicassoStackedBarchart';
// import PicassoRangeAreaChart from '../containers/PicassoRangeAreaChart';
// import PicassoCustomComboChart from '../containers/PicassoCustomComboChart';
// import PicassoCustomGroupBarChart from '../containers/PicassoCustomGroupBarChart';
// import PicassoCustomChart2 from '../containers/PicassoCustomChart2';
// import PicassoVerticalGroupBarchart from '../containers/PicassoVerticalGroupBarchart';
// import PicassoCustomVerticalGroupBarchart from '../containers/PicassoCustomVerticalGroupBarchart';
// import PicassoStackedGroupBarchart from '../containers/PicassoStackedGroupBarchart';
// import PicassoMekko from '../containers/PicassoMekko';
// import PicassoPointDistribution from '../containers/PicassoPointDistribution';
// import PicassoPyramid from '../containers/PicassoPyramid';
// import PicassoDumbbell from '../containers/PicassoDumbbell';
// import D3 from '../containers/D3';
// import Table from '../containers/Table';
// import TableEngine from '../containers/TableEngine';
// import PivotTableEngine from '../containers/PivotTableEngine';
import Filters from '../containers/Filters';
// import Gauge from '../containers/Gauge';
// import PicassoGantt from '../containers/PicassoGantt';
// import Kpi from '../containers/Kpi';
import MapBox from '../containers/MapBox';
// import Sequencer from '../containers/Sequencer';
// import Test from '../containers/Test';

const App = () => (
  <div>
    <Header />
    <Router>
      <div className="row">
        <div className="col-md-12">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/embed-object" component={EmbedObject} />
            {/* <Route exact path="/embed-object-multi-app" component={EmbedObjectMultiApp} /> */}
            {/* <Route exact path="/session-object" component={SessionObject} /> */}
            <Route exact path="/selection-toolbar" component={SelectionToolbar} />
            {/* <Route exact path="/picasso-horizontal-barchart" component={PicassoHorizontalBarchart} />
            <Route exact path="/picasso-vertical-barchart" component={PicassoVerticalBarchart} />
            <Route exact path="/picasso-pie-chart" component={PicassoPieChart} />
            <Route exact path="/picasso-scatterplot" component={PicassoScatterplot} />
            <Route exact path="/picasso-scatterplot-with-images" component={PicassoScatterplotImages} />
            <Route exact path="/picasso-line-chart" component={PicassoLinechart} />
            <Route exact path="/picasso-multi-line-chart" component={PicassoMultiLinechart} />
            <Route exact path="/picasso-combo-line-barchart" component={PicassoComboLineBarchart} />
            <Route exact path="/picasso-range-area-chart" component={PicassoRangeAreaChart} />
            <Route exact path="/picasso-custom-combo-chart" component={PicassoCustomComboChart} />
            <Route exact path="/picasso-custom-group-barchart" component={PicassoCustomGroupBarChart} />
            <Route exact path="/picasso-custom-chart2" component={PicassoCustomChart2} />
            <Route exact path="/picasso-vertical-group-barchart" component={PicassoVerticalGroupBarchart} />
            <Route exact path="/picasso-custom-vertical-group-barchart" component={PicassoCustomVerticalGroupBarchart} />
            <Route exact path="/picasso-stacked-group-barchart" component={PicassoStackedGroupBarchart} />
            <Route exact path="/picasso-point-distribution" component={PicassoPointDistribution} />
            <Route exact path="/picasso-gantt" component={PicassoGantt} />
            <Route exact path="/picasso-mekko" component={PicassoMekko} />
            <Route exact path="/picasso-pyramid" component={PicassoPyramid} />
            <Route exact path="/picasso-dumbbell" component={PicassoDumbbell} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/current-selections" component={CurrentSelections} />
            <Route exact path="/stacked-barchart" component={PicassoStackedBarchart} />
            <Route exact path="/d3" component={D3} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/table-engine" component={TableEngine} />
            <Route exact path="/pivot-table-engine" component={PivotTableEngine} /> */}
            <Route exact path="/filters" component={Filters} />
            {/* <Route exact path="/gauge" component={Gauge} />
            <Route exact path="/kpi" component={Kpi} />  */}
            <Route exact path="/mapbox" component={MapBox} />
            {/* <Route exact path="/sequencer" component={Sequencer} /> */}
            {/* <Route exact path="/test" component={Test} /> */}
            <Route component={Home} />

          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default App;
