import type { JestConfigWithTsJest } from 'ts-jest';

import { configWithResolvedModulePaths } from './jest.config.base';
import { compilerOptions } from './tsconfig.json';

const jestConfig: JestConfigWithTsJest = configWithResolvedModulePaths(compilerOptions);

export default jestConfig;
