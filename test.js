const launch = require('./packages/launch-editor/')

launch(
  'packages/launch-editor/index.js',
  'code',
  (fileName, errorMsg) => {
    console.log({
      fileName,
      errorMsg
    })
  }
)
