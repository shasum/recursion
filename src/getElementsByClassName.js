// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var classFilter = function(element, className) {

    if (typeof element.classList !== 'undefined' && element.classList.contains(className))
      elements.push(element);  // push element if class found

    // check if element has child elements
    if (typeof element.childNodes !== 'undefined' && element.childNodes.length > 0) {
      _.each(element.childNodes, function(element){  // recurse child elements
        classFilter(element, className);
      });
    }        
  }

  var elements = [];

  classFilter (document.body, className);

  return elements;

};
