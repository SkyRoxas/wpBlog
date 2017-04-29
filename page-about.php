<?php  get_header(); ?>
    <div id ="page" class ="region">
      <div class ="region-wrapper first-sidbar">
        <div class ="col col-1">
          <?php get_sidebar('first'); ?>
        </div>
        <div class ="col col-2">
          <div class ='scrollFixed__nav'><a class ="nav-button_arrow-right" href ="javascrpt:;"></a></div>
              <article>
                  <?php
          if ( function_exists('yoast_breadcrumb') ) {
          yoast_breadcrumb('<div id="breadcrumbs">','</div>');
          }
          ?>
                <div class ="article-field title">
                  <h1><?php the_title(); ?></h1>
                </div>
                <div class ="article-field content">
                  <?php the_content(); ?>
                </div>
              </article>
        </div>
    </div>
    </div>
<?php  get_footer(); ?>
