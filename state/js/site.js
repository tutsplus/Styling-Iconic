$(document).ready(function () {

  $('.svg-inject').svgInject();

  prettyPrint();

  $('.style-stroke-rounded-toggle').on('change', function (e) {

    var newClass = '';
    if ($(this).is(':checked')) {
        newClass = "iconic-style-stroke-rounded";
    }

    $('.iconic').each(function() {
        var classes = $(this).attr("class").split(" ").filter(function(item) {
            return item.indexOf("iconic-style-stroke-rounded") === -1 ? item : "";
        });
        classes.push(newClass);
        $(this).attr("class", classes.join(" "));
    });
  });

  $('.style-hollow-toggle').on('change', function (e) {

    var newClass = '';
    if ($(this).is(':checked')) {
        newClass = "iconic-style-hollow";
    }

    $('.iconic').each(function() {
        var classes = $(this).attr("class").split(" ").filter(function(item) {
            return item.indexOf("iconic-style-hollow") === -1 ? item : "";
        });
        classes.push(newClass);
        $(this).attr("class", classes.join(" "));
    });
  });

  $('.theme-select').on('change', function (e) {

    var newClass = '';
    switch(e.target.value) {
      case 'slate':
        newClass = "iconic-theme-slate";
        break;
      case 'monochrome':
        newClass = "iconic-theme-monochrome";
        break;
      case 'sand':
        newClass = "iconic-theme-sand";
        break;
      case 'xray':
        newClass = "iconic-theme-xray";
        break;
    }
     $('.iconic').each(function() {
        var classes = $(this).attr("class").split(" ").filter(function(item) {
            return item.indexOf("iconic-theme") === -1 ? item : "";
        });
        classes.push(newClass);
        $(this).attr("class", classes.join(" "));
    });
  });

  $('.style-strokeweight-select').on('change', function (e) {

    var newClass = '';
    switch(e.target.value) {
      case 'light':
        newClass = "iconic-style-strokeweight-light";
        break;
      case 'thin':
        newClass = "iconic-style-strokeweight-thin";
        break;
      case 'hairline':
        newClass = "iconic-style-strokeweight-hairline";
        break;
      case 'thick':
        newClass = "iconic-style-strokeweight-thick";
        break;
    }
     $('.iconic').each(function() {
        var classes = $(this).attr("class").split(" ").filter(function(item) {
            return item.indexOf("iconic-style-strokeweight") === -1 ? item : "";
        });
        classes.push(newClass);
        $(this).attr("class", classes.join(" "));
    });
  });

});