import type { JestConfigWithTsJest } from 'ts-jest';
import { baseConfig, packages } from './jest.config.base';

const jestConfig: JestConfigWithTsJest = {
  ...baseConfig,
  moduleNameMapper: {
    ...packages.reduce(
      (acc, name) => ({
        ...acc,
        [`@archwayhq/${name}/(.*)$`]: `<rootDir>/packages/${name}/$1`,
      }),
      {},
    ),
  },
};

export default jestConfig;
