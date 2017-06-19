const fs = require('fs');
const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

module.exports = {
  entry: 'index.js',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  format: 'cjs',
  dest: 'dist/bundle.js'
}