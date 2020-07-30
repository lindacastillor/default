<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="description" content="<?php the_excerpt(); ?>">
	<meta name="keywords" content="Cambiar Keywords">
	<meta name="author" content="Cambiar autor">
	<!-- FB CARD -->
	<meta property="og:url" content="<?php the_permalink(); ?>" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="<?php the_title(); ?>" />
	<meta property="og:description" content="<?php the_excerpt(); ?>" />
	<meta property="og:image" content="<?php the_post_thumbnail_url( 'large' ); ?>" />
	<!-- TW CARD -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:description" content="<?php the_excerpt(); ?>">
	<meta name="twitter:title" content="<?php the_title(); ?>">
	<meta name="twitter:image" content="<?php the_post_thumbnail_url( 'large' ); ?>">
	<!-- FAVICON -->
	<link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/img/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/img/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/img/favicon/favicon-16x16.png">
	<link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/img/favicon/site.webmanifest">
	<link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon/favicon.ico">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="msapplication-config" content="<?php echo get_template_directory_uri(); ?>/img/favicon/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">
	<!-- TITLE -->
	<title> | <?php the_title(); ?></title>
	<!-- WP HEADER! -->
	<?php wp_head(); ?>
</head>

<body>

	<!-- En caso de ser requerido, habilitar menú para mobile -->
	<!-- HERO NAV -->
	<!-- <aside class="hero-nav d-lg-none">
		<div class="row w-100 m-auto no-gutters align-items-center text-center h-100">
			<div class="has-menu col-12">
				<?php
				if( have_rows('st_menu', 'option') ):
					while ( have_rows('st_menu', 'option') ) : the_row(); ?>
						<a href="<?php the_sub_field('url'); ?>" class="c-dark-gray pl-3 pr-3 is-bold d-block w-100 pt-3 pb-3 pl-4 pr-4"><?php the_sub_field('name'); ?></a>
					<?php endwhile;
				endif;
				?>
			</div>
		</div>
	</aside> -->
