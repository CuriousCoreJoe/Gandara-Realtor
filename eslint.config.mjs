import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const config = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    ignores: ['.next/**', 'out/**', 'next-env.d.ts', 'node_modules/**'],
  },
]);

export default config;
