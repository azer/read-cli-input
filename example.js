var read = require('./');

console.log('what up ?');
read(process.stdin, 1, function (answer) {
  print(answer);

  console.log("What are your most favorite 3 food ?");
  read(3, function (answer) {
    print(answer);
    console.log('last words before we close the program?');
    read(print);
  });
});

function print (input) {
  console.log('Answer was: ', input.join(', '));
}
