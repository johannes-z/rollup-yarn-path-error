import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'

module.exports = {
  input: 'src/main.js',
  output: {
    name: 'test',
    file: 'dist/bundle.js',
    format: 'umd',
  },
  external: [],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      presets: [
        [
          '@vue/cli-plugin-babel/preset',
          {
            corejs: 3,
            useBuiltIns: 'usage',
          },
        ],
      ],
      runtimeHelpers: true,
    }),
    resolve(),
    commonjs(),
  ],
}
