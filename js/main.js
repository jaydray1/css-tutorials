$('label').click(function() {
    var el = $(this).children('.circle');
    var newone = el.clone(true);
    el.before(newone);
    $("." + el.attr("class") + ":last").remove();
})

$('label').click(function() {
    var el = $(this).children('span:first-child');
    el.addClass('circle');
    var newone = el.clone(true);
    el.before(newone);
    $("." + el.attr("class") + ":last").remove();
})