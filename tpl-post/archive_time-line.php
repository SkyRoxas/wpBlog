<div class ="article archive_time-line">
  <div class ="row">

  <?php

  $classWrapper_1;

  if ($wp_query->current_post % 2 == 0):
      //odd class
      $classWrapper_1 = 'first-lg first-md end-xs';
  else:
      //even class
      $classWrapper_1 = 'last-lg last-md';
  endif

  ?>


  <div class ="wrapper col-xs row middle-xs <?php echo $classWrapper_1?>">

    <div class ="article-field avatar">
      <?php  echo get_avatar(); ?>
    </div>

  </div>


  <div class ="wrapper row middle-xs">
    <div class ="article-field postdate calendar_mode-1">
      <div class ="wrapper">
        <div class ="year" style ="display:none"><?php the_time('Y'); ?></div>
        <div class ="month"><?php the_time('F'); ?></div>
        <div class ="date"><?php the_time('j'); ?></div>
      </div>
    </div>
  </div>


  <?php
    $classWrapper_2;
    if ($wp_query->current_post % 2 == 0):
      //odd class
      $classWrapper_2 = 'last-lg last-md';
    else:
      //even class
      $classWrapper_2 = 'first-lg first-md';
    endif
  ?>

  <div class ="wrapper col-xs border-mode-1 <?php echo $classWrapper_2?>">
    <div>
      <div class ="article-field title">
        <a href ="<?php the_permalink() ?>">
          <h3><?php the_title(); ?></h3>
        </a>
      </div>
      <div class ="article-field excerpt">
        <hr>
        <?php the_excerpt(); ?>
        <hr>
      </div>
    </div>
  </div>

  <!--
    <?php if ( has_post_thumbnail()):?>
      <div class ="article-field post-thumbnails">
        <?php  the_post_thumbnail();?>
      </div>
    <?php endif; ?>
  -->

  </div>
</div>
