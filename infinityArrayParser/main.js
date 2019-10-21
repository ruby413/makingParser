const readline = require('readline');
const ArrayParser = require('./arrayParer');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const recursiveAsyncReadLine = function () {
  rl.question('Command: ', function (answer) {
    if (answer == 'exit') 
      return rl.close(); 
    const result = ArrayParser.parser(answer);
    JSON.stringify(result, null, 2)
    recursiveAsyncReadLine(); 
  });
};
recursiveAsyncReadLine()
