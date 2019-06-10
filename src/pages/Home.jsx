import React from 'react';

const Home = () => (
  <div>
    <div className="row">

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Embed Objects</div>
          <div className="card-body"><a href="#/embed-object"><img className="card-img-top" src="assets/embedded.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Embed any object from your Qvf with just the id (Visualization API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Embed Objects from 2 Apps</div>
          <div className="card-body"><a href="#/embed-object-multi-app"><img className="card-img-top" src="assets/embedded.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Embed any object from 2 Qvfs with just the id (Visualization API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Create Session Objects</div>
          <div className="card-body"><a href="#/session-object"><img className="card-img-top" src="assets/embedded.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Create a session Object with custom definition (Visualization API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Current Selections Toolbar</div>
          <div className="card-body"><a href="#/current-selections"><img className="card-img-top" src="assets/currentSelections.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">The Native Qlik Sense Selection Toolbar (Capability API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Table (Visualization Api)</div>
          <div className="card-body"><a href="#/table"><img className="card-img-top" src="assets/table.png" alt="Table" /></a></div>
          <div className="card-footer text-muted">Create a table via the Visualization API (Capability API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Table (Engine API)</div>
          <div className="card-body"><a href="#/table-engine"><img className="card-img-top" src="assets/table.png" alt="Table" /></a></div>
          <div className="card-footer text-muted">Create a table via the Engine API</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Custom Selections Toolbar</div>
          <div className="card-body"><a href="#/selection-toolbar"><img className="card-img-top" src="assets/selectionToolbar.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">A Custom Selections Toolbar (Selection API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Search</div>
          <div className="card-body"><a href="#/search"><img className="card-img-top" src="assets/search.png" alt="Search Fields" /></a></div>
          <div className="card-footer text-muted">Search any Field or Dimension from your Qvf</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Filters</div>
          <div className="card-body"><a href="#/filters"><img className="card-img-top" src="assets/filters.png" alt="Filters" /></a></div>
          <div className="card-footer text-muted">Create DropDown or Listbox filter from the Engine API</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Horizontal Barchart</div>
          <div className="card-body"><a href="#/picasso-horizontal-barchart"><img className="card-img-top" src="assets/picassoHorizontalBarchart.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Custom Horizontal Barchart with Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Vertical Barchart</div>
          <div className="card-body"><a href="#/picasso-vertical-barchart"><img className="card-img-top" src="assets/picassoVerticalBarchart.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Custom Vertical Barchart with Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Pie Chart</div>
          <div className="card-body"><a href="#/picasso-pie-chart"><img className="card-img-top" src="assets/picassoPie.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Custom Pie Chart with Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Scatterplot</div>
          <div className="card-body"><a href="#/picasso-scatterplot"><img className="card-img-top" src="assets/picassoScotterplot.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Scotterplot with Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Scatterplot - images</div>
          <div className="card-body"><a href="#/picasso-scatterplot-with-images"><img className="card-img-top" src="assets/picassoScotterplotImages.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Scotterplot with custom images,  Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Line Chart</div>
          <div className="card-body"><a href="#/picasso-line-chart"><img className="card-img-top" src="assets/picassoLinechart.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Custom Line Chart with Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Multi Line Chart</div>
          <div className="card-body"><a href="#/picasso-multi-line-chart"><img className="card-img-top" src="assets/picassoMultiLinechart.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Custom Multi Line Chart with Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Combo Line Barchart</div>
          <div className="card-body"><a href="#/picasso-combo-line-barchart"><img className="card-img-top" src="assets/picassoCombochart.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Scotterplot with Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Stacked Barchart</div>
          <div className="card-body"><a href="#/stacked-barchart"><img className="card-img-top" src="assets/picassoStackedBarchart.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Stacked barchart with Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Gauge</div>
          <div className="card-body"><a href="#/gauge"><img className="card-img-top" src="assets/gauge.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Gauge with Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Range Area Chart</div>
          <div className="card-body"><a href="#/picasso-range-area-chart"><img className="card-img-top" src="assets/picassoRangeAreaChart.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Range Area chart with Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Custom Combo Chart</div>
          <div className="card-body"><a href="#/picasso-custom-combo-chart"><img className="card-img-top" src="assets/picassoCustomChart.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">
Custom on-the-fly chart with Picasso.js & Enigma.js (Engine API)
            <br />
Start with a basic like Barchart and add as many components as you want.
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Vertical Group Barhart</div>
          <div className="card-body"><a href="#/picasso-vertical-group-barchart"><img className="card-img-top" src="assets/picassoGroupBarchart.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Vertical Group Barchart with Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-header text-center">Picasso Custom Group Barhart</div>
          <div className="card-body"><a href="#/picasso-custom-vertical-group-barchart"><img className="card-img-top" src="assets/picassoCustomGroupBarchart.png" alt="Embedded Native Object" /></a></div>
          <div className="card-footer text-muted">Custom Vertical Group Barchart with Picasso.js & Enigma.js (Engine API)</div>
        </div>
      </div>

    </div>
  </div>
);

export default Home;
