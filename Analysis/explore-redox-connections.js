function fetch_posts_explore_redox_connections(){

    jQuery.ajax({
        url: ajx.ajaxUrl,
        type: 'post',
        data: { action: 'explore_redox_connections_post_fetch', keyword: jQuery('#keyword').val() },
        success: function(data) {
            jQuery('#datafetch').html( data );
        }
    });

}

jQuery( document ).ready(function($) {
    //search results only show when you have more than 2 characters on the search field
    $("input#keyword").keyup(function() {
    if ($(this).val().length > 1) {
        $("#datafetch").show();
    } else {
        $("#datafetch").hide();
    }
    });
  });

