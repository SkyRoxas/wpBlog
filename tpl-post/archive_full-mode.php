<div class ="article post-mode_single-mode_01">
  <?php if ( has_post_thumbnail()):?>
    <div class ="article-field post-thumbnails">
      <?php  the_post_thumbnail();?>
    </div>
  <?php endif; ?>

  <div class ="article-field title">
    <a href ="<?php the_permalink() ?>"><h2># <?php the_title(); ?></h2></a>
  </div>

  <div class ="article-field excerpt">
    <hr>
      <?php the_excerpt(); ?>
    <hr>
  </div>
</div>
