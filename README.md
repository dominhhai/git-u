# git-u

Short github command line by auto-building github url.

[![npm version](https://badge.fury.io/js/git-u.svg)](http://badge.fury.io/js/git-u) [![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# Installation

This command will be required the [node.js](http://nodejs.org/) or [io.js](https://iojs.org/en/index.html) environment. So, please install one of them into your computer before installing this command.

```
$ npm install -g git-u
```

# How to use

```
$ git-u [command] owner repository [local]
```

where:

1. `command` is the git's command. Default is `clone`.
2. `owner` is the repository's owner name.
3. `repository` is the repository's name.
4. `local` is the clone local dir. This option is only available with the `clone` command.

`git-u` builds the github's clone url by using your `owner` and `repository` option.

# Examples

1. `git-u dominhhai git-u` runs the `git clone https://github.com/dominhhai/git-u.git` command.
2. `git-u clone dominhhai git-u gitu` runs the `git clone https://github.com/dominhhai/git-u.git gitu` command.
3. `git-u remote add origin dominhhai git-u` runs the `git remote add origin https://github.com/dominhhai/git-u.git` command.



