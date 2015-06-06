#!/usr/bin/env node

if (process.argv.length < 4) {
	console.error("usage: git-u [command] owner repository\n\nwhere:")
	console.error("    command        the gits command. Default is clone")
	console.error("    owner          the repository's owner name")
	console.error("    repository     the repository's name")
} else {
	require('./app').apply(null, process.argv.slice(2))
}
