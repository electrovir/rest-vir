import {join, resolve} from 'node:path';

export const monoRepoDirPath = resolve(import.meta.dirname, '..', '..', '..', '..', '..');
export const startServiceMocksDirPath = join(
    monoRepoDirPath,
    'packages',
    'host',
    'src',
    'server',
    'run-api',
    'examples',
);
