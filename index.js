var onKeyPress = require("on-key-press");

module.exports = read;

function read (io, lines, callback) {
  if (arguments.length == 2) {
    callback = lines;
    lines = Number(io);
    io = process.stdin;
  } else if (arguments.length == 1) {
    callback = io;
    io = process.stdin;
    lines = 1;
  }

  var input = '';

  onKeyPress(io, each, function () {
    callback(rows(input));
  });

  function each (ch, key, done) {
    if (key && key.name == 'enter' && --lines <= 0) {
      return done();
    }

    input += ch;
  }
}

function rows (input) {
  return input.split(/\s*\n+/).map(function (row) {
    return row.trim();
  });
}
