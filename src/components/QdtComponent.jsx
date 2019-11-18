import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import QdtComponents from 'qdt-components';
import {
  qdtComponents, qdtComponents2, qdtComponents3, picasso,
} from './QdtApp';
import Globals from './Globals';

// const options = {
//   config: {
//     host: 'sense-demo.qlik.com',
//     secure: true,
//     port: 443,
//     prefix: '',
//     // appId: '45841fc2-ae9c-490c-9bc4-55592fc62afb', // NP DONATIONS with millions of rows for testing
//     appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde', // Helpdesk
//   },
//   connections: {
//     vizApi: true,
//     engineApi: true,
//     useUniqueSessionID: 'yianni',
//   },
// };
// const options2 = {
//   config: {
//     host: 'sense-demo.qlik.com',
//     secure: true,
//     port: 443,
//     prefix: '',
//     appId: '372cbc85-f7fb-4db6-a620-9a5367845dce', // Consumer Sales
//   },
//   connections: {
//     vizApi: true,
//     engineApi: false,
//     useUniqueSessionID: 'yianni',
//   },
// };

// const qdtComponents = new QdtComponents(options.config, options.connections, options.auth);
// const { picasso: { settings, components, interactions } } = QdtComponents;
const { settings, components, interactions } = picasso;
Globals.picasso = picasso;

function QdtComponent(props) {
  const node = useRef(null);
  const {
    type, props: qProps, app2, app3,
  } = props;

  useEffect(() => {
    if (qProps.type === 'custom1') {
      qProps.type = null;
      qProps.settings = settings.verticalBarchart;
      qProps.settings.scales.y = { data: { fields: ['qMeasureInfo/0', 'qMeasureInfo/1', 'qMeasureInfo/2'] }, invert: true, expand: 0.04 };
      qProps.settings.components.push(components.line({
        displayOrder: 3, y: { field: 'qMeasureInfo/1' }, stroke: '#960000',
      }));
      qProps.settings.components.push(components.point({ displayOrder: 4, y: { field: 'qMeasureInfo/1' }, fill: '#960000' }));
      qProps.settings.components.push(components.line({
        displayOrder: 5, y: { field: 'qMeasureInfo/2' }, stroke: '#99cc66',
      }));
      qProps.settings.components.push(components.point({ displayOrder: 6, y: { field: 'qMeasureInfo/2' }, fill: '#99cc66' }));
      qProps.settings.components.push(components.point({ displayOrder: 7, y: { field: 'qMeasureInfo/3' }, fill: '#275378' }));
    } else if (qProps.type === 'custom2') {
      qProps.type = null;
      qProps.settings = {
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
    } else if (qProps.type === 'custom3') {
      qProps.type = null;
      qProps.settings = {
        scales: {
          x: {
            data: { fields: ['qMeasureInfo/0', 'qMeasureInfo/1'] },
            expand: 0,
          },
          y: { data: { extract: { field: 'qDimensionInfo/0' } } },
        },
        components: [
          components.axis(),
          components.axis({ scale: 'y' }),
          components.box({
            orientation: 'horizontal',
            start: { field: 'qMeasureInfo/0' },
            end: { field: 'qMeasureInfo/1' },
          }),
          components.range({ scale: 'y' }),
          components.labels({ direction: 'right' }),
        ],
        interactions: [],
      };
    } else if (qProps.type === 'custom4') {
      qProps.type = null;
      qProps.settings = settings.verticalBarchart;
      qProps.settings.scales.y = { data: { fields: ['qMeasureInfo/0', 'qMeasureInfo/1', 'qMeasureInfo/2'] }, invert: true, expand: 0.04 };
      qProps.settings.components.push(components.box({
        key: 'bar2', displayOrder: 3, fill: '#960000', start: 0, end: { field: 'qMeasureInfo/1' },
      }));
    } else if (qProps.type === 'customVerticalGroupBarchart') {
      qProps.type = null;
      qProps.settings = settings.verticalGroupBarchart;
      qProps.settings.scales.y.data.fields = ['qMeasureInfo/0', 'qMeasureInfo/1', 'qMeasureInfo/2', 'qMeasureInfo/3'];
      qProps.settings.components = [
        components.axis(),
        components.axis({ scale: 'y' }),
        components.box({
          displayOrder: 0, measures: 3, end: { field: 1 }, fill: '#275378', stroke: '#3399CC',
        }),
        components.box({
          displayOrder: 1, measures: 3, end: { field: 2 }, fill: '#B35A01', stroke: '#CC6666',
        }),
        components.box({
          displayOrder: 2, measures: 3, end: { field: 3 }, fill: '#669933', stroke: '#99CC66',
        }),
        components.line({
          key: 'line', displayOrder: 3, y: { field: 'qMeasureInfo/3' }, stroke: '#B974FD',
        }),
        components.point({
          key: 'point', displayOrder: 4, y: { field: 'qMeasureInfo/3' }, fill: '#B974FD', stroke: '#B974FD', size: 0.2,
        }),
        components.range(),
        components.labels({ displayOrder: 3, direction: 'up' }),
        components.tooltip,
      ];
    }
    if (app2) {
      Promise.all([qdtComponents.qAppPromise]).then(() => {
        qdtComponents2.render(type, qProps, node.current);
      });
    } else if (app3) {
      qdtComponents3.render(type, qProps, node.current);
    } else {
      qdtComponents.render(type, qProps, node.current);
    }
  }, [type, qProps, app2, app3]);

  return (
    <div ref={node} />
  );
}

QdtComponent.propTypes = {
  type: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
  app2: PropTypes.bool,
  app3: PropTypes.bool,
};
QdtComponent.defaultProps = {
  app2: false,
  app3: false,
};

export default QdtComponent;
