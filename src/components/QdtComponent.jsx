import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  qdtCompose, QdtViz, // QdtMapBox, // useHyperCube, qdtDoc, // QdtTheme, QdtKpi, // QdtMapBox, useListObject, QdtSlider,
} from 'qdt-components';
import { app1Promise, app2Promise, app3Promise } from './QdtApp';

function QdtComponent({
  component, properties, options, appIndex,
}) {
  const elementRef = useRef(null);

  const init = async () => {
    let _app = await app1Promise;
    if (appIndex === 2) _app = await app2Promise;
    if (appIndex === 3) _app = await app3Promise;
    const app = _app;
    if (appIndex === 3) {
      QdtViz({
        element: elementRef.current,
        app,
        options,
      });
    } else {
      qdtCompose({
        element: elementRef.current,
        component,
        app,
        properties,
        options,
      });
    }
  };

  useEffect(() => {
    if (elementRef) init();
  }, [init, component]);

  return (
    <div ref={elementRef} />
  );
}

QdtComponent.propTypes = {
  component: PropTypes.func,
  properties: PropTypes.object,
  options: PropTypes.object,
  appIndex: PropTypes.number,
};
QdtComponent.defaultProps = {
  component: null,
  properties: {},
  options: {},
  appIndex: 1,
};

export default QdtComponent;
