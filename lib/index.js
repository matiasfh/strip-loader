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
  webpack.cacheable()
  console.log(userOptions)
  webpack.callback(null, input, map)
}

// function StripFnLoader(source) {
//     var query = loaderUtils.getOptions(this);

//     if (!query || !query.strip) return;

//     var toStrip = query.strip.join('|');

//     var regexPattern = new RegExp('(?:^|\\n)[ \\t]*(' + toStrip + ')\\(((\\"[^\\"]*\\")|(\\\'[^\\\']*\\\')|[^\\);]|\\([^\\);]*\\))*\\)[ \\t]*(?:$|[;\\n])', 'g');

//     var transformed = source.replace(regexPattern, '\n');

//     this.callback(null, transformed);
// }
// module.exports = StripFnLoader;

// module.exports.loader = function () {
//     return __filename + '?' + [].slice.call(arguments, 0).map(function (fn) {
//         return 'strip[]=' + fn;
//     }).join(',');
// };
