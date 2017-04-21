<header id ="header">
  <div class ='web-info row center-xs middle-xs'>
    <img class ="logo" src="<?php bloginfo('template_url'); ?>/images/logo.png">
    <div class ='info-wrapper'>
      <a class ="name" href="<?php bloginfo("url"); ?>">Bonze</a>
      <div class = "description">一群棒子的技術 Blog</div>
    </div>
  </div>
  <div class ='region-wrapper'>
    <?php wp_nav_menu( array( 'theme_location' => 'header-menu','container_class' => 'header-menu' ) ); ?>
  </div>
</header>
