const { name: packageName } = require('./package.json');

module.exports = {
  extends: ['../../typedoc.base.json'],
  name: packageName,
  entryPoints: ['src', 'generated'],
  exclude: '**/*.spec.ts',
  out: 'docs',
  readme: 'README.md',
};
