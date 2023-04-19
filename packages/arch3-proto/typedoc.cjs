const { name: packageName } = require('./package.json');

module.exports = {
  entryPoints: ['./src'],
  entryPointStrategy: 'packages',
  out: 'docs',
  exclude: '**/*.spec.ts',
  name: packageName,
  readme: 'README.md',
  excludePrivate: true,
  githubPages: false,
  visibilityFilters: {
    protected: true,
    private: false,
    inherited: true,
    external: true
  }
};
