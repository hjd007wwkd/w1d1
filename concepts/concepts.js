/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

function joinList(list) {
  if (list === undefined || list.length == 0) {
    return ""
  }
  var words = list[0];
  for (var i = 1; i < list.length; i++) {
    words += ", "+list[i];
  }
  return words;
}

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...

console.log("Today I learned about " + concepts + ".");

