#!/usr/bin/env node

if (process.argv.length < 4) {
	console.error("usage: git-u [command] owner repository [local]\n\nwhere:")
	console.error("    command        the gits command. Default is `clone`")
	console.error("    owner          the repository's owner name")
	console.error("    repository     the repository's name")
	console.error("    local          the clone local dir. This option is only available with the `clone` command")
} else {
	require('./app').apply(null, process.argv.slice(2))
}
