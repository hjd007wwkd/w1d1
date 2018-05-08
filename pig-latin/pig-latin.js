var args = process.argv;
var words = []
for(var i = 2; i < args.length; i++) {
  var word = args[i].split("");
  word.push(word.shift()+"ay");
  words.push(word.join(""));
}

console.log(words.join(" "));