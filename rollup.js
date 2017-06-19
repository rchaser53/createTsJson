const fs = require('fs');

const rollup = require('rollup').rollup;
const babel = require('rollup-plugin-babel');

rollup({
  entry: 'index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}).then((ret) => {
  try {
    fs.writeFileSync('dist/bundle.js', ret.modules[0].code);
  } catch (err) {
    console.log(err)
  }
})
.catch((err) => {
  throw new Error(err);
})