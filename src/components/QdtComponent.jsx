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
  }
    static defaultProps = {
      app2: false,
    }

    componentWillMount() {
      const { props } = this.props;
      const { settings, components, interactions } = QdtComponents.picasso;
      if (props.type === 'custom1') {
        props.type = null;
        props.settings = settings.verticalBarchart;
        props.settings.scales.y = { data: { fields: ['qMeasureInfo/0', 'qMeasureInfo/1', 'qMeasureInfo/2'] }, invert: true, expand: 0.04 };
        props.settings.components.push(components.line({
          displayOrder: 3, y: { field: 'qMeasureInfo/1' }, stroke: '#960000',
        }));
        props.settings.components.push(components.point({ displayOrder: 4, y: { field: 'qMeasureInfo/1' }, fill: '#960000' }));
        props.settings.components.push(components.line({
          displayOrder: 5, y: { field: 'qMeasureInfo/2' }, stroke: '#99cc66',
        }));
        props.settings.components.push(components.point({ displayOrder: 6, y: { field: 'qMeasureInfo/2' }, fill: '#99cc66' }));
        props.settings.components.push(components.point({ displayOrder: 7, y: { field: 'qMeasureInfo/3' }, fill: '#275378' }));
      } else if (props.type === 'custom2') {
        props.type = null;
        props.settings = {
          scales: {
            x: { data: { extract: { field: 'qDimensionInfo/0' } }, padding: 0.3 },
            y: { data: { fields: ['qMeasureInfo/0', 'qMeasureInfo/1'] }, invert: true, expand: 0.2 },
            c: { data: { field: 'qMeasureInfo/0' }, type: 'color' },
          },
          components: [
            { type: 'grid-line', y: 'y' },
            components.axis(),
            components.axis({ scale: 'y' }),
            components.tooltip,
            components.box({ fill: '#3399CC', stroke: '#275378' }),
            components.labels(),
            components.line({
              key: 'line2', displayOrder: 3, y: { field: 'qMeasureInfo/1' }, stroke: '#CC6666',
            }),
            components.point({
              key: 'point2', displayOrder: 4, y: { field: 'qMeasureInfo/1' }, fill: '#CC6666', stroke: '#B35A01',
            }),
            components.range(),
          ],
          interactions: [
            interactions.itooltip,
            interactions.pan(),
          ],
        };
      }
    }

    componentDidMount() {
      const { type, props, app2 } = this.props;
      //   console.log(type, props);
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
