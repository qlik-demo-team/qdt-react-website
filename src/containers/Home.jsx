import React from 'react';

const Home = () => (
  <div>
    <div className="layout">

      <a href="#/embed-object">
        <div className="card">
          <div className="card-header ">Embed Objects</div>
          <div className="card-body"><img className="card-img-top" src="assets/embedded.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">
            Embed any object from your Qvf with just the id
          </div>
          <div className="badges">
            <span className="badge badge-dark">Capability API</span>
          </div>
        </div>
      </a>
      <a href="#/embed-object-multi-app">
        <div className="card">
          <div className="card-header ">Embed Objects from 2 Apps</div>
          <div className="card-body"><img className="card-img-top" src="assets/embedded.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Embed any object from 2 Qvfs with just the id</div>
          <div className="badges">
            <span className="badge badge-dark">Capability API</span>
          </div>
        </div>
      </a>
      <a href="#/session-object">
        <div className="card">
          <div className="card-header ">Create Session Objects</div>
          <div className="card-body"><img className="card-img-top" src="assets/embedded.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Create a session Object with custom definition </div>
          <div className="badges">
            <span className="badge badge-dark">Capability API</span>
          </div>
        </div>
      </a>
      <a href="#/current-selections">
        <div className="card">
          <div className="card-header ">Current Selections Toolbar</div>
          <div className="card-body"><img className="card-img-top" src="assets/currentSelections.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">The Native Qlik Sense Selection Toolbar </div>
          <div className="badges">
            <span className="badge badge-dark">Capability API</span>
          </div>
        </div>
      </a>
      <a href="#/table">
        <div className="card">
          <div className="card-header ">Table</div>
          <div className="card-body"><img className="card-img-top" src="assets/table.png" alt="Table" /></div>
          <div className="card-footer ">Create a table via the Capability API </div>
          <div className="badges">
            <span className="badge badge-dark">Capability API</span>
          </div>
        </div>
      </a>
      <a href="#/table-engine">
        <div className="card">
          <div className="card-header ">Table</div>
          <div className="card-body"><img className="card-img-top" src="assets/table.png" alt="Table" /></div>
          <div className="card-footer ">Create a table via the  Engine API</div>
          <div className="badges">
            <span className="badge badge-dark"> Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/selection-toolbar">
        <div className="card">
          <div className="card-header ">Custom Selections Toolbar</div>
          <div className="card-body"><img className="card-img-top" src="assets/selectionToolbar.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">A Custom Selections Toolbar</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/search">
        <div className="card">
          <div className="card-header ">Search</div>
          <div className="card-body"><img className="card-img-top" src="assets/search.png" alt="Search Fields" /></div>
          <div className="card-footer ">Search any Field or Dimension from your Qvf</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/filters">
        <div className="card">
          <div className="card-header ">Filters</div>
          <div className="card-body"><img className="card-img-top" src="assets/filters.png" alt="Filters" /></div>
          <div className="card-footer ">Create DropDown or Listbox filter from the Engine API</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/kpi">
        <div className="card">
          <div className="card-header ">KPIs</div>
          <div className="card-body"><img className="card-img-top" src="assets/kpis.png" alt="Kpis" /></div>
          <div className="card-footer ">Create KPIs from the Engine API</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/mapbox">
        <div className="card">
          <div className="card-header ">MAPBOX</div>
          <div className="card-body"><img className="card-img-top" src="assets/mapbox.png" alt="mapbox" /></div>
          <div className="card-footer ">Create a Map using Mapbox and Engine API</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>

      <a href="#/picasso-horizontal-barchart">
        <div className="card">
          <div className="card-header ">Picasso Horizontal Bar Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoHorizontalBarchart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Custom Horizontal Bar Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-vertical-barchart">
        <div className="card">
          <div className="card-header ">Picasso Vertical Bar Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoVerticalBarchart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Custom Vertical Bar Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-pie-chart">
        <div className="card">
          <div className="card-header ">Picasso Pie Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoPie.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Custom Pie Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-scatterplot">
        <div className="card">
          <div className="card-header ">Picasso Scatterplot</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoScotterplot.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Scotterplot with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-scatterplot-with-images">
        <div className="card">
          <div className="card-header ">Picasso Scatterplot - images</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoScotterplotImages.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Scotterplot with custom images,  Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-line-chart">
        <div className="card">
          <div className="card-header ">Picasso Line Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoLinechart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Custom Line Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-multi-line-chart">
        <div className="card">
          <div className="card-header ">Picasso Multi Line Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoMultiLinechart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Custom Multi Line Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-combo-line-barchart">
        <div className="card">
          <div className="card-header ">Picasso Combo Line Bar Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoCombochart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Scotterplot with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/stacked-barchart">
        <div className="card">
          <div className="card-header ">Picasso Stacked Bar Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoStackedBarchart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Stacked Bar Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/gauge">
        <div className="card">
          <div className="card-header ">Picasso Gauge</div>
          <div className="card-body"><img className="card-img-top" src="assets/gauge.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Gauge with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-range-area-chart">
        <div className="card">
          <div className="card-header ">Picasso Range Area Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoRangeAreaChart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Range Area chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-custom-combo-chart">
        <div className="card">
          <div className="card-header ">Picasso Custom Combo Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoCustomChart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">
          Custom on-the-fly chart with Picasso.js & Enigma.js
            <br />
Start with a basic like Bar Chart and add as many components as you want.
          </div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-vertical-group-barchart">
        <div className="card">
          <div className="card-header ">Picasso Vertical Group Bar Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoGroupBarchart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Vertical Group Bar Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-custom-vertical-group-barchart">
        <div className="card">
          <div className="card-header ">Picasso Custom Group Bar Chart</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoCustomGroupBarchart.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Custom Vertical Group Bar Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-gantt">
        <div className="card">
          <div className="card-header ">Picasso Gannt</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoGantt.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Gantt Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-mekko">
        <div className="card">
          <div className="card-header ">Picasso Mekko</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoMekko.png" alt="Embedded Native Object" /></div>
          <div className="card-footer ">Mekko Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-point-distribution">
        <div className="card">
          <div className="card-header ">Picasso Point Distribution</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoPointDistribution.png" alt="Picasso Point Distribution" /></div>
          <div className="card-footer ">Point Distributions Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-pyramid">
        <div className="card">
          <div className="card-header ">Picasso Pyramid</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoPyramid.png" alt="Picasso Pyramids" /></div>
          <div className="card-footer ">Pyramid Chart with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
      <a href="#/picasso-dumbbell">
        <div className="card">
          <div className="card-header ">Picasso Dumbbell plot</div>
          <div className="card-body"><img className="card-img-top" src="assets/picassoDumbbell.png" alt="Picasso Dumbbell" /></div>
          <div className="card-footer ">Dumbbell Plot with Picasso.js & Enigma.js</div>
          <div className="badges">
            <span className="badge badge-dark">Engine API</span>
          </div>
        </div>
      </a>
    </div>

  </div>

);

export default Home;
