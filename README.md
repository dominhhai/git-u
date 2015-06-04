# git-u

Short github command line by auto-building github url.

# Installation

This command will be required the [node.js](http://nodejs.org/) or [io.js](https://iojs.org/en/index.html) environment. So, please install one of them into your computer before installing this command.

```
$ npm install -g git-u
```

# How to use

```
$ git-u [command] owner repository
```

where:

1. `command` is the git`s command. Default is `clone`
2. `owner` is the repository's owner name
3. `repository` is the repository's name

`git-u` will be auto build the github's clone url by using your `owner` and `repository` option.

# Examples

1. `git-u dominhhai git-u` will be run the `git clone https://github.com/dominhhai/git-u.git` command.
2. `git-u remote add origin dominhhai git-u` will be run the `git remote add origin https://github.com/dominhhai/git-u.git` command.



