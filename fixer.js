$(document).on("click","img", function(){
    var target_link = $(this).parent().attr('href');
    //console.log(target_link);
    var fixed_link = target_link.replace(target_link, 'https://www.jcu.edu.au');
    console.log(fixed_link);
    $(this).parent().attr('href', fixed_link);
})