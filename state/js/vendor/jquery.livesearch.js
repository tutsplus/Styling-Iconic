'use strict';

$(document).ready(function ($) {

  // Reorder icon-list p tags
  /*$('.icon-list li > p').each(function() {
    $(this).prependTo(this.parentNode);
  });*/
});

jQuery.fn.liveUpdate = function(list){
  list = jQuery(list);


  function filter(){
    var term = jQuery.trim( jQuery(this).val().toLowerCase() ), scores = [];

    if ( !term ) {
      rows.show();
    } else {
      rows.hide();
      rows.removeClass('result');

      cache.each(function(i){
        var score = this.score(term);
        if (score > 0) { scores.push([score, i]); }
      });

      jQuery.each(scores.sort(function(a, b){return b[0] - a[0];}), function(){
        jQuery(rows[ this[1] ]).show();
        jQuery(rows[ this[1] ]).toggleClass('result');
      });
    }
  }

  if ( list.length ) {
    var rows = list.children('li'),
      cache = rows.map(function(){
        return this.innerHTML.toLowerCase();
      });

    this
      .keyup(filter).keyup()
      .parents('form').submit(function(){
        return false;
      });
  }

  return this;
};
