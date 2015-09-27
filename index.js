var onKeyPress = require("on-key-press");

module.exports = read;

function read (options, callback) {
  if (arguments.length == 1) {
    callback = options;
    options = undefined;
  }

  options = normalizeOptions(options);

  var input = '';
  var lines = options.lines;

  onKeyPress(options.stdin, each, function () {
    callback(rows(input));
  });

  if (options.prefix) options.prefix(options.lines - lines);

  function each (ch, key, done) {
    input += ch;

    if (key && key.name == 'enter') {
      if (--lines <= 0) {
        return done();
      }

      if (options.prefix) options.prefix(options.lines - lines);
    }

    if (/(^|\n)\n\n$/.test(input)) {
      done();
    }
  }
}

function rows (input) {
  return input
    .trim()
    .split(/\s*\n+/)
    .map(function (row) {
      return row.trim();
    })
    .filter(function (row) {
      return row && row.length;
    });
}

function normalizeOptions (options) {
  if (!options) {
    options = {
      lines: 1
    };
  }

  if (typeof options == 'number') {
    options = {
      lines: options
    };
  }

  options.stdin || (options.stdin = process.stdin);

  return options;
}
