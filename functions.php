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


function wpjam_add_scripts() {
  wp_register_script('plugin_script', get_template_directory_uri() . '/js/script.js', array('jquery'),'1.7');
  wp_enqueue_script('plugin_script');
}

add_action( 'wp_enqueue_scripts', 'wpjam_add_scripts' );

// function load_external_jQuery() { // load external file
//     wp_register_script('blur', get_template_directory_uri() . '/js/script.js', array('jquery') );
//     wp_enqueue_script('blur');
// }
// add_action('wp_enqueue_scripts', 'load_external_jQuery');


?>
