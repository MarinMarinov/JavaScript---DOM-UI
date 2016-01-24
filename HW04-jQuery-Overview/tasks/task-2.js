/* globals $ */

/*
Create a function that takes a selector and:
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
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
    return function (selector) {
        // The provided first parameter is neither string or existing DOM element
        if(typeof selector !== 'string'){
            throw new Error('Parameter must be string');
        }

        var $selector = $(selector);

        if($selector.length === 0){
            throw new Error('The selector do not much valid node element');
        }

        var $buttons = $selector.children('.button').text('hide');
        var $contents = $selector.children('.content');

        for(var i = 0, len = $buttons.length; i < len; i+=1){
            $($buttons[i]).on('click', clickOnButton);
        }

        function clickOnButton(){
            var $this = $(this);

            //var $nextButton = $this.nextAll('.button').first();
            var $nextContent = $this.nextAll('.content').first();

            if($nextContent){
                if($nextContent.css('display') === 'none'){
                    $nextContent.css('display', '');
                    $this.text('hide');
                }else{
                    $nextContent.css('display', 'none');
                    $this.text('show');
                }
            }
        }
    };
}

module.exports = solve;