const spawn = require('child_process').spawn

module.exports = function cloner () {
  var argv = arguments,
      length = argv.length

  if (length < 2) {
    console.error('Please provide at least owner and repository')
    return
  }

  var owner = argv[length - 2],
      repo = argv[length - 1]
  var url = 'https://github.com/' + owner + '/' + repo + '.git'

  var command = (length === 2) ? ['clone'] : Array.prototype.slice.call(argv, 0, length
    - 2)
  command.push(url)

  var git = spawn('git', command)

  console.log('running...', 'git', command, url)

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
