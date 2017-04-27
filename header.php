<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,">
  <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/style/css/style.css">
  <?php do_action('wp_head');?>
  <title><?php wp_title(); ?></title>
</head>
<script src="https://use.typekit.net/znw8cer.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
<body class ="<?php is_home() ? print'front' : print 'not-front'; ?>">
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
<?php get_template_part('tpl/banner') ?>
