#!/usr/bin/env node

const { default: telescope } = require('@osmonauts/telescope');
const { join } = require('node:path');
const { sync: rimraf } = require('rimraf');

const protoDirs = [join(__dirname, '../proto')];
const outPath = join(__dirname, '../generated');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    logLevel: 0,
    useSDKTypes: false,
    eslintDisable: {
      disableAll: true,
    },
    prototypes: {
      excluded: {
        packages: [
          'cosmos_proto',
          'cosmos.auth.v1beta1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.capability.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.distribution.v1beta1',
          'cosmos.evidence.v1beta1',
          'cosmos.genutil.v1beta1',
          'cosmos.gov.v1beta1',
          'cosmos.mint.v1beta1',
          'cosmos.params.v1beta1',
          'cosmos.slashing.v1beta1',
          'cosmos.staking.v1beta1',
          'cosmos.upgrade.v1beta1',
          'cosmos.vesting.v1beta1',
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1'
        ]
      },
      includePackageVar: false,
      typingsFormat: {
        useDeepPartial: false,
        useExact: false,
        timestamp: 'timestamp',
        duration: 'duration'
      },
      methods: {
        toJSON: true,
        fromJSON: true
      }
    },
    aminoEncoding: {
      enabled: true
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
      bundle: false
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
