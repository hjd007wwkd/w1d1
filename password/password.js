function obfuscate(password){
  var lookup = {
    'a': 4,
    'e': 3,
    'o': 0,
    'l': 1
  };

  var words = password.split("");
  for(var i = 0; i < words.length; i++) {
    if(lookup[words[i]] !== undefined) {
      words[i] = lookup[words[i]];
    }
  }
  return words.join("");
}

console.log(obfuscate(process.argv[2]));