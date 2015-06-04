#!/usr/bin/env node

const cloner = require('./app')

cloner.apply(null, process.argv.slice(2))
