<?php if(have_posts()) : ?>
  <?php while(have_posts()) : the_post(); ?>
    <article>
        <?php
if ( function_exists('yoast_breadcrumb') ) {
yoast_breadcrumb('
<p id="breadcrumbs">','</p>
');
}
?>
      <div class ="article-field title">
        <h1><?php the_title(); ?></h1>
      </div>
      <div class ="article-field content">
        <?php the_content(); ?>
      </div>
      <?php if (comments_open() || get_comments_number()) {
        comments_template();
      } ?>
    </article>
  <?php endwhile; ?>
<?php endif; ?>
