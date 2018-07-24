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
    componentDidMount() {
      const { type, props, app2 } = this.props;
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
