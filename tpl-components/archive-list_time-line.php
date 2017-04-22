<div class ="archive-list archive-list_time-line">
  <h1>最新消息</h1>
  <div class ="list-margin_column">
  <ul class = "item-list">
    <?php if(have_posts()) : $count = 0 ?>
      <?php while(have_posts()) : the_post(); $count++ ?>
        <li class ="item">
            <?php get_template_part('tpl-post/archive_time-line') ?>
        </li>
      <?php endwhile; ?>
        <?php  echo do_shortcode('[ajax_load_more container_type="ul" post_type="post" offset= '.$count.' transition_container="false" previous_post="true" posts_per_page="10"]');?>
    <?php endif; ?>
  </ul>
</div>
</div>
