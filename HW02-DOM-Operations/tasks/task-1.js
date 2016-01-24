/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neither `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

function solve() {

  return function (element, contents) {

      // The provided first parameter is neither string or existing DOM element
      if(typeof element !== 'string' && element.nodeType !== 1){ //element node or 1
          throw new Error('Parameter must be string or existing DOM element');
      }

      // Any of the function params is missing
      if(element === 'undefined' || contents === 'undefined'){
          throw new Error('Parameter or array of contents is undefined')
      }

      // Any of the function params is not as described
      //

      // Any of the contents is neither `string` or `number`
      contents.forEach(function(content){
          if(typeof content !== 'string' && typeof content !== 'number'){
              throw new Error('Each element of the array of contents must be string or number');
          }
      });

      if(typeof element === 'string'){
          var node = document.getElementById(element);

          // The provided id does not select anything (there is no element that has such an id)
          if(node === null || node === 'undefined'){
              throw new Error('There is no element with such id');
          }
          addDivs(node);
      }else{
          addDivs(element);
      }

      function addDivs(node){

          // The function must remove all previous content from the DOM element provided
          node.innerHTML = '';

          // first variant

          var fragment = document.createDocumentFragment();

          for(var i = 0, len = contents.length; i < len; i+=1){
              var divElement = document.createElement('div');
              divElement.innerHTML = contents[i];
              fragment.appendChild(divElement);
          }

          // second variant with cloneNode

          /*var divElement = document.createElement('div');
          var fragment = document.createDocumentFragment();

          for(var i = 0, len = contents.length; i < len; i+=1){
              var clonedDivElement = divElement.cloneNode(true);
              clonedDivElement.innerHTML = contents[i];
              fragment.appendChild(clonedDivElement);
          }*/

          node.appendChild(fragment);
      }
  };
}

module.exports = solve;


