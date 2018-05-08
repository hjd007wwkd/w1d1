var args = process.argv;
var rWords = [];
for(var i = 2; i < args.length; i++){
  var word = "";
  for(var ii = args[i].length-1; ii >=0; ii--){
    word += args[i][ii];
  }
  rWords.push(word);
}

for(var i = 0; i < rWords.length; i++) {
  console.log(rWords[i]);
}