const { exec } = require('child_process')
const path = require('path')

const cmd = ['dist', 'lib', 'es']
cmd.map(item => {
  exec(`npm run build:${item}`, {
    cwd: path.resolve(__dirname, '..')
  }, (err, st) => {
    if (err) throw new Error(err)
    console.log(st);
  })
})
