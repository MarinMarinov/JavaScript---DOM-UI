/* globals $ */

/* 

Create a function that takes an id or DOM element and:
 * If an id is provided, select the element
 * Finds all elements with class `button` or `content` within the provided element
 * Change the content of all `.button` elements with "hide"
 * When a `.button` is clicked:
 * Find the topmost `.content` element, that is before another `.button` and:
 * If the `.content` is visible:
 * Hide the `.content`
 * Change the content of the `.button` to "show"
 * If the `.content` is hidden:
 * Show the `.content`
 * Change the content of the `.button` to "hide"
 * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
 * Throws if:
 * The provided DOM element is non-existant
 * The id is either not a string or does not select any DOM element

*/

function solve(){
  return function (selector) {
      // The provided first parameter is neither string or existing DOM element
      if(typeof selector !== 'string' && selector.nodeType !== 1){ //element node or 1
          throw new Error('Parameter must be string or existing DOM element');
      }

      // Function parameter is missing
      if(selector === 'undefined'){
          throw new Error('Parameter is undefined')
      }

      if(typeof selector === 'string'){
          //var element = document.getElementById(selector);

          // The provided id does not select anything (there is no element that has such an id)
          if(selector === null || selector === 'undefined'){
              throw new Error('There is no element with such id');
          }
          findElements(selector);
      }else{
          //findElements(selector);
      }

      function findElements(selector){
          var buttons = document.getElementsByClassName('button');
          var contentDivs = document.getElementsByClassName('content');
          var rootDiv = document.getElementById(selector);

          for(var i = 0, len = buttons.length; i < len; i+=1){
              buttons[i].innerHTML = 'hide';
          }

          rootDiv.addEventListener('click', showOrHide);
      }

      function showOrHide(event){
          var target = event.target;
          var nextElement = target.nextSibling;
          var contentDiv;

          while(nextElement){
              if(nextElement.className === 'content'){
                  contentDiv = nextElement;
                  break;
              }else{
                  nextElement = nextElement.nextSibling;
              }
          }

          if(contentDiv.style.display === ''){
              target.innerHTML = 'show';
              contentDiv.style.display = 'none';
          }else{
              target.innerHTML = 'hide';
              contentDiv.style.display = '';
          }
      }
  };
}

module.exports = solve;