'use strict'

const merge = require('merge')
const format = require('string-template')
const minimatch = require('minimatch')
const stream = require('readable-stream')
const Transform = stream.Transform

module.exports = class JSONStream extends Transform {
  constructor (opts) {
    super({objectMode: true})
    opts = opts || {}
    this.glob = opts.glob || '*.@(json|mcmeta|info)'
    this.processUnmarked = opts.processUnmarked || false
    this.out = {}
    this.variables = {}
  }

  initEnv (out) {
    this.out = out
  }

  supply (obj) {
    merge(this.variables, obj)
  }

  _transform (chunk, enc, done) {
    if (minimatch(chunk.relative, this.glob, {matchBase: true}) && (this.processUnmarked || this.out[chunk.relative])) {
      chunk.contents = new Buffer(format(chunk.contents.toString(), this.variables))
    }
    this.push(chunk)
    done()
  }
}
