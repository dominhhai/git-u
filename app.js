const spawn = require('child_process').spawn
const CLONE = 'clone'

module.exports = function cloner () {
  var argv = arguments,
      length = argv.length

  if (length < 2) {
    console.error('Please provide at least owner and repository')
    return
  }

  // clone owner repo local
  var optNum = (length === 4 && argv[0] === CLONE) ? 3 : 2
  var command = (length === 2) ? [CLONE] : Array.prototype.slice.call(argv, 0, length - optNum)
  var owner = argv[length - optNum],
      repo = argv[length - optNum + 1]
  var url = 'https://github.com/' + owner + '/' + repo + '.git'
  command.push(url)
  // add local dir option to command
  if (optNum === 3) {
    command.push(argv[length - 1])
  }

  var git = spawn('git', command)

  console.log('running...', 'git', command.join(' '))

  git.stdout.on('data', function (data) {
    console.log(data.toString())
  })

  git.stderr.on('data', function (data) {
    console.error(data.toString())
  })

  git.on('close', function (code) {
    console.log('task done with code ' + code)
  })
}
