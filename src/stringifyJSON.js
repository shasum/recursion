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
    if (obj === null)
      return 'null';
    else if (Array.isArray(obj)) {
      reducedString = _.reduce(obj,function(combine,item){
        tmpString = stringifyJSON(item);
        if (tmpString === undefined)
          return combine;
        else
          return combine+tmpString+',';
      },'');
      return '['+reducedString.slice(0,reducedString.length-1)+']';
    }
    else {
      reducedString = _.reduce(obj,function(combine,item,key){
        tmpString = stringifyJSON(item);
        if (tmpString === undefined)
          return combine;
        else
          return combine+'"'+key+'"'+':'+tmpString+',';
      },'');
      return '{'+reducedString.slice(0,reducedString.length-1)+'}';
    }
  }
  else
    return undefined;

};
