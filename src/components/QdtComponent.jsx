import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  qdtCompose, QdtViz, // QdtMapBox, // useHyperCube, qdtDoc, // QdtTheme, QdtKpi, // QdtMapBox, useListObject, QdtSlider,
} from 'qdt-components';
import {
  engineApiApp1Promise, engineApiApp2Promise, capabilityApiApp1Promise, capabilityApiApp2Promise,
} from './QdtApp';

function QdtComponent({
  component, properties, options, appIndex,
}) {
  const elementRef = useRef(null);

  const init = async () => {
    let _app = await engineApiApp1Promise;
    if (appIndex === 2) _app = await engineApiApp2Promise;
    if (appIndex === 3) _app = await capabilityApiApp1Promise;
    if (appIndex === 4) _app = await capabilityApiApp2Promise;
    const app = _app;
    if (appIndex === 3 || appIndex === 4) {
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

  init();

  // useEffect(() => {
  //   if (elementRef) init();
  // }, [init, component]);

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
