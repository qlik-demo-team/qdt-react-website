import QdtComponents from 'qdt-components';

// const array = new Uint32Array(1);
// window.crypto.getRandomValues(array);
// console.log(array);

// const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const alphabetArray = alphabet.split('');
// window.crypto.getRandomValues(alphabetArray);
const alphabetArray = Math.random().toString(32).substr(2, 8);
console.log(alphabetArray);
// const ID_LENGTH = (length) || 8;
// let rtn = '';
// for (let i = 0; i < ID_LENGTH; i += 1) {
//   rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
// }

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
    useUniqueSessionID: Math.random().toString(32).substr(2, 8),
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
    useUniqueSessionID: 'yianni',
  },
};

const qdtComponents = new QdtComponents(options.config, options.connections, options.auth);
const qdtComponents2 = new QdtComponents(options2.config, options2.connections);
const { picasso } = QdtComponents;

export {
  qdtComponents, qdtComponents2, picasso,
};
