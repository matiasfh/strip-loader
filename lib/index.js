/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

"use strict";

var loaderUtils = require('loader-utils');
class StripLoaderError extends Error {
  constructor(messages) {
    super()
    this.name = "StripLoaderError"
    this.message = messages
    this.stack = ""
  }

  inspect() {
    return this.message
  }
}

module.exports = function(input, map) {
  var webpack = this;
  var userOptions = loaderUtils.getOptions(webpack)
  if(!userOptions || !userOptions.query) return;

  webpack.cacheable()
  var toStrip = query.strip.join('|')
  var regexPattern = new RegExp('(?:^|\\n)[ \\t]*(' + toStrip + ')\\(((\\"[^\\"]*\\")|(\\\'[^\\\']*\\\')|[^\\);]|\\([^\\);]*\\))*\\)[ \\t]*(?:$|[;\\n])', 'g');

  var transformed = source.replace(regexPattern, '\n');
  webpack.callback(null, transformed, map)
}

