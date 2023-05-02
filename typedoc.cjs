const { name: packageName } = require('./package.json');

module.exports = {
  extends: ['./typedoc.base.json'],
  name: packageName,
  entryPointStrategy: 'packages',
  entryPoints: ['packages/*'],
  exclude: '**/*.spec.ts',
  out: 'docs',
  readme: 'README.md',
};
