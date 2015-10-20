'use strict';

var path = require('path');
var commands = [
    'compare',
    'composite',
    'conjure',
    'convert',
    'dcraw',
    'ffmpeg',
    'hp2xx',
    'identify',
    'IMDisplay',
    'mogrify',
    'montage',
    'stream',
];
var paths = { };
commands.forEach(function (command) {
  paths[command] = path.resolve(__dirname, 'imagemagick/' + command + '.exe');
});

module.exports.paths = paths;
