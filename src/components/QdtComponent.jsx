import React from 'react';
import PropTypes from 'prop-types';
import QdtComponents from 'qdt-components';

const options = {
  config: {
    host: 'sense-demo.qlik.com',
    secure: true,
    port: 443,
    prefix: '',
    appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde', // Helpdesk
  },
  connections: {
    vizApi: true,
    engineApi: true,
  },
};
const options2 = {
  config: {
    host: 'sense-demo.qlik.com',
    secure: true,
    port: 443,
    prefix: '',
    appId: '372cbc85-f7fb-4db6-a620-9a5367845dce', // Consumer Sales
  },
  connections: {
    vizApi: true,
    engineApi: false,
  },
};


const qdtComponents = new QdtComponents(options.config, options.connections);

export default class QdtComponent extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired,
    app2: PropTypes.bool,
    // customSettings: PropTypes.object,
  }
    static defaultProps = {
      app2: false,
    }
    componentDidMount() {
      const { type, props, app2 } = this.props;
      // if (props.type === 'multiLineChart') {
      //   props.type = null;
      //   props.settings = settings.lineChart;
      //   props.settings.components[4].settings.layers.line.stroke = '#4477AA';
      //   props.settings.components[5].settings.fill = '#4477AA';

      //   const secondChart = [
      //     props.settings.components[4],
      //     // point: props.settings.components[5],
      //   ];
      //   secondChart[0].key = 'line2';
      //   secondChart[0].data.extract.props.v.field = 'qMeasureInfo/1';
      //   secondChart[0].settings.layers.line.stroke = '#CC6677';
      // const secondLine = props.settings.components[4];
      // secondLine.key = 'line2';
      // secondLine.data.extract.props.v.field = 'qMeasureInfo/1';
      // secondLine.settings.layers.line.stroke = '#CC6677';
      //   const secondScale = {
      //     y1: {
      //       data: { field: 'qMeasureInfo/1' },
      //       expand: 0.1,
      //       min: 0,
      //       invert: true,
      //     },
      //   };
      //   const secondLine = {
      //     key: 'line2',
      //     type: 'line',
      //     data: {
      //       extract: {
      //         field: 'qDimensionInfo/0',
      //         props: {
      //           v: { field: 'qMeasureInfo/1' },
      //         },
      //       },
      //     },
      //     settings: {
      //       coordinates: {
      //         major: { scale: 'x' },
      //         minor: { scale: 'y1', ref: 'v' },
      //       },
      //       orientation: 'horizontal',
      //       layers: {
      //         curve: 'linear',
      //         show: true,
      //         line: {
      //           opacity: 1,
      //           stroke: '#CC6677',
      //           strokeWidth: 2,
      //         },
      //       },
      //     },
      //   };
      //   const secondPoint = props.settings.components[5];
      //   secondPoint.key = 'point2';
      //   secondPoint.data.extract.props.y.field = 'qMeasureInfo/1';
      //   secondPoint.data.extract.props.y.qMeasure = 'qMeasureInfo/1';
      //   secondPoint.settings.fill = '#CC6677';
      //   const secondPoint = {
      //     key: 'p',
      //     type: 'point',
      //     data: {
      //       extract: {
      //         field: 'qDimensionInfo/0',
      //         props: {
      //           y: { field: 'qMeasureInfo/1' },
      //           x: { field: 'qDimensionInfo/0' },
      //           qDimension: { field: 'qDimensionInfo/0' },
      //           qMeasure: { field: 'qMeasureInfo/1' },
      //         },
      //       },
      //     },
      //     settings: {
      //       x: { scale: 'x' },
      //       y: { scale: 'y' },
      //       shape: 'circle',
      //       size: 0.2,
      //       fill: '#CC6677',
      //     },
      //     brush: {
      //       trigger: [{
      //         on: 'tap',
      //         contexts: ['select'],
      //       }],
      //       consume: [{
      //         context: 'select',
      //         style: {
      //           active: {
      //             opacity: 1,
      //           },
      //           inactive: {
      //             opacity: 0.5,
      //           },
      //         },
      //       }],
      //     },
      //   };
      //   props.settings.scales = [...props.settings.scales, secondScale];
      //   props.settings.components = [...props.settings.components, secondLine];
      //   console.log(settings);
      //   console.log(secondScale);
      //   console.log(props);
      // }
      if (app2) {
        Promise.all([qdtComponents.qAppPromise]).then(() => {
          const qdtComponents2 = new QdtComponents(options2.config, options2.connections);
          qdtComponents2.render(type, props, this.node);
        });
      } else {
        qdtComponents.render(type, props, this.node);
      }
    }

    render() {
      return (
        <div ref={(node) => { this.node = node; }} />
      );
    }
}
