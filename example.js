var read = require('./');

console.log('what up ?');
read(1, function (answer) {
  print(answer);

  console.log("Your 3 favorite food:");
  read({ lines: 3, prefix: prefix }, function (answer) {
    print(answer);
    console.log('last words before we close the program?');
    read(print);
  });
});

function prefix (line) {
  process.stdout.write('  ' + (line + 1) + '.');
}

function print (input) {
  console.log('Answer was: ', input.join(', '));
}
