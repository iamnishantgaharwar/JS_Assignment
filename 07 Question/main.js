// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

var storage = [1,2,3,4,"pw skills",5,"pw skills", "ineuron"];
var fisrtOccurrence = storage.indexOf("pw skills");
var lastOccurrence = storage.lastIndexOf("pw skills");

console.log(fisrtOccurrence,lastOccurrence);