<?php  get_header(); ?>
    <div id ="page" class ="region">
      <div class ="region-wrapper first-sidbar">
        <div class ="col col-1">
          <?php get_sidebar('first'); ?>
        </div>
        <div class ="col col-2">
          <div class ='scrollFixed__nav'><a class ="nav-button_arrow-right" href ="javascrpt:;"></a></div>
          <?php get_template_part( 'tpl/content-archive' ); ?>
        </div>
    </div>
    </div>
<?php  get_footer(); ?>
