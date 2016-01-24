/* globals $ */

/* 

Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
*/

function solve() {
  return function(selector, count) {

      if (!count || Array.isArray(count)) {
          throw new Error('Count is missing, or null, or undefined, or is an Array');
      }
      if (isNaN(count)) {
          throw new Error('Count must to be number or to be convertible to number');
      }
      if (count < 0) {
          throw new Error('Count must not be less than 1');
      }

      if (!selector || Array.isArray(selector)) {
          throw new Error('Selector is invalid');
      }

      var $root = $(selector);

      var $ul = $('<ul>').addClass('items-list');

      for (var i = 0; i < count; i += 1) {
          var $li = $('<li>').text('List item #' + i);
          $li.addClass('list-item');
          $ul.append($li);
      }

      $root.append($ul);
  };
}

module.exports = solve;