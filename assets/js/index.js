
(function($) {

    $('a').hover(function(event){
        $(this).find('.image-title').hide();
    },function(){
        $(this).find('.image-title').show();
    });

    $('#project').click(function toprojectDetail(pName) {
        pName = $(this).find('.image-title').html();
        $('.project-detail').show();
        $('.project-detail h2').html(pName);
    });

    //NASCONDO DI NUOVO DIV QUANDO CLICCO SU X
    $('.project-detail .cross').click(function(event) {
        $('.project-detail').hide();
    });

})(jQuery);