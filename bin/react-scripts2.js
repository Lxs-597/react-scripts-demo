#!/usr/bin/env node

const spawn = require('cross-spawn')
const args = process.argv.slice(2)
const script = args[0]

// 执行scripts下的build.js
spawn.sync(
  process.execPath, // node可执行文件路径
  [require.resolve('../scripts/' + script)],
  { stdio: 'inherit' }
)