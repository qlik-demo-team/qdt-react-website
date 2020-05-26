import { qdtEnigma, qdtCapabilityApp } from 'qdt-components';

const identity = Math.random().toString(32).substr(2, 8);

const config1 = {
  host: 'sense-demo.qlik.com',
  secure: true,
  port: 443,
  prefix: '',
  appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde', // Helpdesk
  identity,
};

const config2 = {
  host: 'sense-demo.qlik.com',
  secure: true,
  port: 443,
  prefix: '',
  appId: '4052680c-fd97-4f49-ac83-e026cdd26d65', // Swipe Night
  // appId: 'b707d328-bb36-4a42-b7e4-129367244cda', // staging
  // appId: 'c6288f5a-cc82-4e1f-9303-148c3443f436',
  identity,
};

const config3 = {
  host: 'sense-demo.qlik.com',
  secure: true,
  port: 443,
  prefix: '',
  appId: '372cbc85-f7fb-4db6-a620-9a5367845dce', // Consumer Sales
  identity,
};


const engineApiApp1Promise = qdtEnigma(config1);
const engineApiApp2Promise = qdtEnigma(config2);
const capabilityApiApp1Promise = qdtCapabilityApp(config1);
const capabilityApiApp2Promise = qdtCapabilityApp(config3);

export {
  engineApiApp1Promise, engineApiApp2Promise, capabilityApiApp1Promise, capabilityApiApp2Promise,
};
