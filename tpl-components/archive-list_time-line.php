<div class ="archive-list archive-list_time-line">
  <h1>最新消息</h1>
  <div class ="list-margin_column">
  <ul class = "item-list">
    <?php if(have_posts()) : ?>
      <?php while(have_posts()) : the_post(); ?>
        <li class ="item">
            <?php get_template_part('tpl-post/archive_time-line') ?>
        </li>
      <?php endwhile; ?>
    <?php endif; ?>
  </ul>
</div>
</div>
