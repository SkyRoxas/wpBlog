<?php

//add post-thumbnails

add_theme_support( 'post-thumbnails', array( 'post' ) );


//article excerpt

function excerpt_more_example() {
    return '....';
}

function wpdocs_custom_excerpt_length( $length ) {
    return 120;
}

add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length' );
add_filter( 'excerpt_more', 'excerpt_more_example' );


//add js File



function wpBlog_add_styles() {

wp_enqueue_script('pluginstylesheet', get_template_directory_uri() . '/js/script.js', array(),'1.0.0',true);

}
add_action( 'wp_enqueue_scripts', 'wpBlog_add_styles' );



?>
