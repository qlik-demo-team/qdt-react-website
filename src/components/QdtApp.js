import QdtComponents from 'qdt-components';

const useUniqueSessionID = Math.random().toString(32).substr(2, 8);

const options = {
  config: {
    host: 'sense-demo.qlik.com',
    secure: true,
    port: 443,
    prefix: '',
    // appId: '45841fc2-ae9c-490c-9bc4-55592fc62afb', // NP DONATIONS with millions of rows for testing
    appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde', // Helpdesk
  },
  connections: {
    vizApi: true,
    engineApi: true,
    useUniqueSessionID,
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
    useUniqueSessionID,
  },
};

const options3 = {
  config: {
    host: 'sense-demo.qlik.com',
    secure: true,
    port: 443,
    prefix: '',
    appId: '4052680c-fd97-4f49-ac83-e026cdd26d65', // Swipe Night
  },
  connections: {
    vizApi: false,
    engineApi: true,
    useUniqueSessionID,
  },
};

const options4 = {
  config: {
    host: 'sense-demo.qlik.com',
    secure: true,
    port: 443,
    prefix: '',
    appId: '61b83b90-3fa2-4fac-a771-c534100a6005', // MLS Salaries
  },
  connections: {
    vizApi: false,
    engineApi: true,
    useUniqueSessionID,
  },
};

const qdtComponents = new QdtComponents(options.config, options.connections, options.auth);
const qdtComponents2 = new QdtComponents(options2.config, options2.connections);
const qdtComponents3 = new QdtComponents(options3.config, options3.connections);
const qdtComponents4 = new QdtComponents(options4.config, options3.connections);
const { picasso } = QdtComponents;

export {
  qdtComponents, qdtComponents2, qdtComponents3, qdtComponents4, picasso,
};
