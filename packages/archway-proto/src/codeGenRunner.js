import telescope from '@osmonauts/telescope';
import { join } from 'path';
import pkg from 'rimraf';
const { sync: rimraf } = pkg;

const protoDirs = [join(__dirname, '/../../../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  // all options are totally optional ;)
  options: {
    prototypes: {
      includePackageVar: false,
      typingsFormat: {
        useDeepPartial: false,
        useExact: false,
        timestamp: 'timestamp',
        duration: 'duration'
      },
      methods: {
        toJSON: false,
        fromJSON: false
      }
    },
    aminoEncoding: {
      enabled: false
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    },
  }
}).then(() => {
  console.log('✨ all done!');
}).catch(e => {
  console.error(e);
  process.exit(1);
});