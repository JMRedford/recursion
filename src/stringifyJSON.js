// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var retString = "";
  if (obj === null) {
    return "null";
  }
  if (Array.isArray(obj)) {
    retString += "[";
    for (var i = 0; i < obj.length; i++) {
      retString += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        retString += ",";
      }
    }
    retString += "]";
    return retString;
  }
  else if (typeof obj === 'string') {
    return "\""+obj+"\"";
  }
  else if (typeof obj === 'number') {
    if (isNaN(obj)) {
      return 'null';
    }
    return obj.toString();
  }
  else if (typeof obj === 'boolean') {
    if (obj) {
      return 'true';
    }
    else {
      return 'false';
    }
  }
  else if (typeof obj === 'object') {
    retString += "{";
    for (var key in obj) {
      if (obj.hasOwnProperty(key)){
        if (!(typeof obj[key] === 'function' || typeof obj[key] === 'undefined')){
          retString += stringifyJSON(key);
          retString += ":";
          retString += stringifyJSON(obj[key]);
          retString += ",";
        }
      }
    }
    if (retString.length > 1) retString = retString.slice(0,-1);
    retString += "}";
    return retString;
  }
};
