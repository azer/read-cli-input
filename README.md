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

By default, it reads from `process.stdin`. You can specify custom IO if you pass
three arguments;

```js
read(process.stdin, 3, console.log);
```

If you'll read just one line from process.stdin, you can just pass a callback:

```
read(console.log);
```
