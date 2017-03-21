<?php if(have_posts()) : ?>
  <?php while(have_posts()) : the_post(); ?>
    <article>
      <div class ="article-field title">
        <h1><?php the_title(); ?></h1>
      </div>
      <div class ="article-field content">
        <?php the_content(); ?>
      </div>
    </article>
  <?php endwhile; ?>
<?php endif; ?>
