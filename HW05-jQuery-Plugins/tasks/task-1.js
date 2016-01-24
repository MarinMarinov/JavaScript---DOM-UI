function solve(){
  return function(selector){
    var $selectList = $(selector).hide(); // TODO DIFFERENCE FROM THE HTML SOLUTION

    var $dropDownListDiv = $('<div>').addClass('dropdown-list').append($selectList);
    $dropDownListDiv.appendTo('body');

    var $currentDiv = $('<div>').addClass('current').attr('data-value', '').text('Select value');
    $dropDownListDiv.append($currentDiv);

    var $optionsContainerDiv = $('<div>').addClass('options-container').css({
      position: 'absolute',
      display: 'none'
    });

    $dropDownListDiv.append($optionsContainerDiv);

    //var $options = $('option'); // or...
    //var $options = $selectList.find('option'); // or
    //var $options = $selectList.children('option'); // or
    var $options = $selectList.children(); // or
    //var $options = $selectList.children().filter('option'); // or

    for(var i = 0, len = $options.length; i < len; i+=1){
      var $dropDownItemDiv = $('<div>').addClass('dropdown-item');
      //$dropDownItemDiv.attr('data-value', ('value-' + (i + 1))); // or
      $dropDownItemDiv.attr('data-value', $($options[i]).val()); // TODO .val() special function for select, or input or textarea to get value attribute
      $dropDownItemDiv.attr('data-index', i); // TODO - check it out
      $dropDownItemDiv.text($($options[i]).text()); // TODO - check it out

      $optionsContainerDiv.append($dropDownItemDiv);
    }

    $currentDiv.on('click', function(){
      /*var $container = $('.options-container');
       $container.css('display', 'inline-block');*/
      $optionsContainerDiv.css('display', 'inline-block');
    });

    $optionsContainerDiv.on('click', function(event){
      var $target = $(event.target);
      //alert($target.text());
      $currentDiv.text($target.text()); //TODO what is the difference
      //$currentDiv.text($target.html());
      $selectList.val($target.attr('data-value'));

      $(this).css('display', 'none');

    })
  };
}

module.exports = solve;