<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/style/css/style.css">
    <script src ="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src ="<?php bloginfo('template_url'); ?>/js/script.js"></script>
    <title></title>
  </head>
  <body class ="front">
    <?php  get_header(); ?>
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
  </body>
</html>
