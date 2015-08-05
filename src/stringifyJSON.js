// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var tmpString, reducedString;

  if (typeof obj === 'number' || typeof obj === 'boolean')
    return String(obj);
  else if (typeof obj === 'string')
    return '"'+obj+'"';
  else if (typeof obj === 'object') {
    if (obj === null)  // handle null objects
      return 'null';
    else if (Array.isArray(obj)) {  // handle arrays
      reducedString = _.reduce(obj,function(combine,item){
        tmpString = stringifyJSON(item);
        if (tmpString === undefined)  // skip functions and undefined values
          return combine;
        else
          return combine+tmpString+',';
      },'');
      return '['+reducedString.slice(0,reducedString.length-1)+']';  // trim end comma and add brackets
    }
    else {  // handle regular objects
      reducedString = _.reduce(obj,function(combine,item,key){
        tmpString = stringifyJSON(item);
        if (tmpString === undefined)  // skip functions and undefined values
          return combine;
        else
          return combine+'"'+key+'"'+':'+tmpString+',';
      },'');
      return '{'+reducedString.slice(0,reducedString.length-1)+'}';  // trim end comma and add curly braces
    }
  }
  else  // functions and undefined values
    return undefined;

};
