// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var retArray = [];
  
  function recurseAddNodes(nodeCollection){
    for (var i = 0; i < nodeCollection.length; i++){
      if (nodeCollection[i].nodeType === 1) {
        if (nodeCollection[i].childNodes.length === 0){
          if (nodeCollection[i].classList.contains(className)){
            retArray.push(nodeCollection[i]);
          }
        } else { //recursive case
          if (nodeCollection[i].classList.contains(className)){
            retArray.push(nodeCollection[i]);
          }
          recurseAddNodes(nodeCollection[i].childNodes);
        }
      }
    }
  }

  recurseAddNodes(document.childNodes);

  return retArray;
};
