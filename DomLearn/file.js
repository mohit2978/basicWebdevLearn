//query element
//var p_tag = document.getElementsByTagName('p');
//var title_class = document.getElementsByClassName('title');
//var question_id = document.getElementById('question');

//for(var i = 0; i < p_tag.length; i++) 
//    console.log(`p tag element: ${p_tag[i].nodeName}`);

//for(var i = 0; i < title_class.length; i++) 
 //   console.log(`title class element: ${title_class[i].nodeName}`);

//console.log(`question id element: ${question_id.nodeName}`);

//traverse
// get body node
var body = document.getElementsByTagName('body')[0];
console.log(body);
// h1 node
var first_child = body.firstChild;
console.log(first_child);
// script node
var last_child = body.lastChild;
console.log(last_child);
// get html node
var parent = body.parentNode;
console.log(parent);
// get head
var sibling = body.previousSibling;
console.log(sibling);


var h3 = document.getElementsByTagName('h3')[0];
console.log(h3.nodeName);
var first_child1 = h3.firstChild;
console.log(first_child1.nodeName);
var last_child1 = h3.lastChild;
console.log(last_child1.nodeName);
var parent1 = h3.parentNode;
console.log(parent1.nodeName);
var sibling1 = h3.previousSibling;
console.log(sibling1.nodeName);
