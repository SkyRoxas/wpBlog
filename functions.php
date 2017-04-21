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

  //jquery plugins
  wp_register_script('scrollFixed', get_template_directory_uri() . '/js/plugins/scrollFixed.js', array('jquery'),'1.7');
  wp_register_script('scrollState', get_template_directory_uri() . '/js/plugins/scrollState.js',array('jquery'),'1.7');
  wp_register_script('ScrollbarFaker', get_template_directory_uri() . '/js/plugins/scrollbarFaker.js',array('jquery'),'1.7');
  wp_register_script('lineAnimate', get_template_directory_uri() . '/js/plugins/lineAnimate.js',array('jquery'),'1.7');
  wp_register_script('topAnimate', get_template_directory_uri() . '/js/plugins/topAnimate.js',array('jquery'),'1.7');
  wp_register_script('scrollClass', get_template_directory_uri() . '/js/plugins/scrollClass.js',array('jquery'),'1.7');

  wp_enqueue_script('scrollFixed');
  wp_enqueue_script('scrollState');
  wp_enqueue_script('ScrollbarFaker');
  wp_enqueue_script('lineAnimate');
  wp_enqueue_script('topAnimate');
  wp_enqueue_script('scrollClass');

  //scripts
  wp_register_script('script', get_template_directory_uri() . '/js/script.js', array('jquery'),'1.7');
  wp_enqueue_script('script');
}

  add_action( 'wp_enqueue_scripts', 'add_scripts' );

  // 建立外觀頁首
  add_theme_support( 'custom-header' );
  add_theme_support('custom-background');


  //註冊選單區域
  function register_my_menu() {

    register_nav_menus(
      array(
        'header-menu' => __( 'Header Menu' ),
        'extra-menu' => __( 'Footer Menu' )
      )
    );
  }
  add_action( 'init', 'register_my_menu' );




?>
