## read-cli-input

Read user input from CLI for specified amount of lines.

## Install

```bash
$ npm install read-cli-input
```

## Usage

```js
var read = require('read-cli-input')

console.log("What are your most favorite 3 food ?");

read(3, function (input) {
  console.log('Answer was: ', input.join(', '));
  // => Answer was Falafel, ramen, babi guling
})
```

By default, it reads from `process.stdin`. You can specify custom stdin, and a function to generate a prefix for multi-line inputs.

```js
read({ stdin: process.stdin, lines: 3, prefix: prefix }, console.log);

function prefix (line) {
  process.stdout.write(line + 1 + '.'); // It'll output "1." "2." "3." ...
}
```

If you'll read just one line from process.stdin, you can just pass a callback:

```
read(console.log);
```
