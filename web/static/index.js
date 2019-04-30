function setDescriptor(descriptorID, describedObject) {
    $('.descriptor').html('');
    $('.project-image').removeClass('project-image-highlighted');
    $('#' + descriptorID).html("<b>" + $(describedObject).attr('data-name') + "</b>: " + $(describedObject).attr('data-description'));
    if ($(describedObject).attr('data-link') !== "") {
        $('#' + descriptorID).html($('#' + descriptorID).html() + "<a class='read-more' href='" + $(describedObject).attr('data-link') + "' target='_blank'> (More)</a>" );
    }
    $(describedObject).addClass('project-image-highlighted');
}

var first_project = $('#PROJECTBLOCK').children('.descriptor-block').first().children('img').first();
setDescriptor('descriptor-a', first_project);

$(".page-button").click(function() {
    $('html, body').animate({
        scrollTop: $($( this ).attr("data-target")).offset().top
    }, 1000);
});

$(".project-image").click(function() {
    var nearest_descriptor = $(this).parent().find('.descriptor').first().attr('id');
    setDescriptor(nearest_descriptor, this);
    $(".language-icon-highlight").removeClass('language-icon-highlight');
    $(".language-icon:not(grayscaled)").addClass('grayscaled');
    var languages = $(this).attr('data-use-langs').split(',');
    for (var i = 0, len = languages.length; i < len; i++) {
        $('.language-icon[data-lang=' + languages[i] +']').removeClass('grayscaled');
        $('.language-icon[data-lang=' + languages[i] +']').addClass('language-icon-highlight');
    }
    
})