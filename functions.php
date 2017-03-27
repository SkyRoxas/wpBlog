<?php

//add post-thumbnails

add_theme_support( 'post-thumbnails', array( 'post' ) );


//article excerpt

function excerpt_more() {
  return '....';
}

function wpdocs_custom_excerpt_length( $length ) {
  return 120;
}

add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length' );
add_filter( 'excerpt_more', 'excerpt_more' );


//add js File

function add_scripts() {
  wp_register_script('scrollFixed', get_template_directory_uri() . '/js/scrollFixed.js', array('jquery'),'1.7');
  wp_register_script('scrollState', get_template_directory_uri() . '/js/scrollState.js',array('jquery'),'1.7');
  wp_register_script('ScrollbarFaker', get_template_directory_uri() . '/js/scrollbarFaker.js',array('jquery'),'1.7');
  wp_register_script('script', get_template_directory_uri() . '/js/script.js', array('jquery'),'1.7');

  wp_enqueue_script('scrollFixed');
  wp_enqueue_script('scrollState');
  wp_enqueue_script('ScrollbarFaker');
  wp_enqueue_script('script');
}

add_action( 'wp_enqueue_scripts', 'add_scripts' );


?>
