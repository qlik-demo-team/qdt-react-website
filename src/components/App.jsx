import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../pages/Header';
import Home from '../pages/Home';
import EmbedObject from '../pages/EmbedObject';
import EmbedObjectMultiApp from '../pages/EmbedObjectMultiApp';
import SessionObject from '../pages/SessionObject';
import SelectionToolbar from '../pages/SelectionToolbar';
import PicassoHorizontalBarchart from '../pages/PicassoHorizontalBarchart';
import PicassoVerticalBarchart from '../pages/PicassoVerticalBarchart';
import PicassoPieChart from '../pages/PicassoPieChart';
import PicassoScatterplot from '../pages/PicassoScatterplot';
import PicassoScatterplotImages from '../pages/PicassoScatterplotImages';
import PicassoLinechart from '../pages/PicassoLinechart';
import PicassoMultiLinechart from '../pages/PicassoMultiLinechart';
import PicassoComboLineBarchart from '../pages/PicassoComboLineBarchart';
import Search from '../pages/Search';
import CurrentSelections from '../pages/CurrentSelections';
import PicassoStackedBarchart from '../pages/PicassoStackedBarchart';
import PicassoRangeAreaChart from '../pages/PicassoRangeAreaChart';
import D3 from '../pages/D3';
import Table from '../pages/Table';
import TableEngine from '../pages/TableEngine';
import Filters from '../pages/Filters';
import Gauge from '../pages/Gauge';

const App = () => (
  <div>
    <Header />
    <Router>
      <div className="row">
        <div className="col-md-12">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/embed-object" component={EmbedObject} />
            <Route exact path="/embed-object-multi-app" component={EmbedObjectMultiApp} />
            <Route exact path="/session-object" component={SessionObject} />
            <Route exact path="/selection-toolbar" component={SelectionToolbar} />
            <Route exact path="/picasso-horizontal-barchart" component={PicassoHorizontalBarchart} />
            <Route exact path="/picasso-vertical-barchart" component={PicassoVerticalBarchart} />
            <Route exact path="/picasso-pie-chart" component={PicassoPieChart} />
            <Route exact path="/picasso-scatterplot" component={PicassoScatterplot} />
            <Route exact path="/picasso-scatterplot-with-images" component={PicassoScatterplotImages} />
            <Route exact path="/picasso-line-chart" component={PicassoLinechart} />
            <Route exact path="/picasso-multi-line-chart" component={PicassoMultiLinechart} />
            <Route exact path="/picasso-combo-line-barchart" component={PicassoComboLineBarchart} />
            <Route exact path="/picasso-range-area-chart" component={PicassoRangeAreaChart} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/current-selections" component={CurrentSelections} />
            <Route exact path="/stacked-barchart" component={PicassoStackedBarchart} />
            <Route exact path="/d3e" component={D3} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/table-engine" component={TableEngine} />
            <Route exact path="/filters" component={Filters} />
            <Route exact path="/gauge" component={Gauge} />
          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default App;
