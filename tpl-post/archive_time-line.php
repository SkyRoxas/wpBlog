<div class ="article archive_time-line">
  <div class ="row">


    <?php

    $calendar_sort;
    $calendar_layout;
    $calendar_column;

    $calendar_column = 'row';
    $calendar_layout = 'middle-xs';
    $calendar_sort;

    if ($wp_query->current_post % 2 == 0):
        //odd class
    else:
        //even class
    endif

    ?>

    <div class ="article-wrapper postdate <?php echo $calendar_column.' '.$calendar_sort.' '.$calendar_layout?>">
      <div class ="article-field postdate calendar_mode-1">
        <div class ="wrapper">
          <div class ="year" style ="display:none"><?php the_time('Y'); ?></div>
          <div class ="month"><?php the_time('F'); ?></div>
          <div class ="date"><?php the_time('j'); ?></div>
        </div>
      </div>
    </div>


  <?php

  $another_sort;
  $another_layout;
  $another_column;

  $another_column = 'row col-xs';
  $another_layout = 'middle-xs';

  if ($wp_query->current_post % 2 == 0):
      //odd class
      $another_sort = 'first-lg';
      $another_layout = 'end-lg middle-xs';
  else:
      //even class
      $another_sort = 'last-lg';
      $another_layout = 'middle-xs';
  endif

  ?>

  <div class ="article-wrapper avatar <?php echo $another_column.' '.$another_sort.' '.$another_layout?>">

    <div class ="article-field avatar">
      <?php echo get_avatar(get_the_author_meta('ID'), 165);?>
    </div>

  </div>



  <?php

  $content_sort;
  $content_layout;
  $content_column;

  $content_column = 'row col-lg col-xs-12';
  $content_layout = 'middle-xs';

  if ($wp_query->current_post % 2 == 0):
      //odd class
      $content_sort;
      $content_layout = 'middle-xs start-xs';
  else:
      //even class
      $content_sort = 'first-lg';
      $content_layout;
  endif

  ?>

  <div class ="article-wrapper body border-mode-1 <?php echo $content_column.' '.$content_sort.' '.$content_layout?>">
    <div>
      <div class ="article-field title">
        <h3>
          <a href ="<?php the_permalink() ?>">
            <?php the_title(); ?>
          </a>
        </h3>
      </div>
      <div class ="article-field excerpt">
        <hr>
        <?php the_excerpt(); ?>
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
