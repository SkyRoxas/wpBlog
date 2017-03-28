<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/style/css/style.css">
    <?php do_action('wp_head');?>
    <title></title>
  </head>
  <body class ="front">
    <?php  get_header(); ?>
    <?php get_template_part('tpl/banner') ?>
    <div id ="page" class ="region">
      <div class ="region-wrapper first-sidbar">
        <div class ="col col-1">
          <?php get_sidebar('first'); ?>
        </div>
        <div class ="col col-2">
          <?php get_template_part( 'tpl/content-single' ); ?>
        </div>
    </div>
    </div>
    <?php  get_footer(); ?>
    <?php do_action('wp_footer');?>
  </body>
</html>
