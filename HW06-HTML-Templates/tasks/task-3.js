function solve(){
  return function(){
    $.fn.listview = function(data){
      //console.log(this);
      var $this = this;
      //console.log($this);
      var template = $("#" + $this.attr('data-template')).html();

      var compiledTemplate = handlebars.compile(template);

      for(var i = 0, len = data.length; i < len; i+=1){
        $this.append(compiledTemplate(data[i]))
      }

      return this;
    };
  };
}

module.exports = solve;