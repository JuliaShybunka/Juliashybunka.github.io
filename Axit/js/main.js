$(function(){
    $('.feature__tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.feature__inner').find('.feature__content-item ').removeClass('active-tab').hide();
            $('.feature__tabs').find('.feature__tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
})