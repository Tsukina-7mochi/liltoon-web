import * as esbuild from 'esbuild';
import commonConfig from './esbuild.common.ts';

const config: esbuild.BuildOptions = {
  ...commonConfig,
  sourcemap: 'inline',
}

export default config;
