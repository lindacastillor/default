<?php


/*------------------------------------*\
Clickjacking protection
Add header to stop site loading in an iFrame.
\*------------------------------------*/


	function mwtsn_example_send_headers() {
		header( 'X-FRAME-OPTIONS: SAMEORIGIN' );
	}
	add_action( 'send_headers', 'mwtsn_example_send_headers', 10 );



/*------------------------------------*\
	External Modules/Files
\*------------------------------------*/



// Personalizar!
/* Proper way to enqueue scripts and styles */

	function change_here_with_your_name_enqueue() {
		wp_enqueue_style( 'Bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
		wp_enqueue_style( 'Reset', get_template_directory_uri() . '/css/reset.css');
		wp_enqueue_style( 'Index', get_template_directory_uri() . '/css/index.css');

		// GENERAL
		// wp_enqueue_script( 'GoogleMaps', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCG3l_pG-5BMKnGDpYenf_eUgVSy0wtPes' );
		wp_enqueue_script( 'google-map', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCG3l_pG-5BMKnGDpYenf_eUgVSy0wtPes', array(), '3', true );
		wp_enqueue_script( 'google-map-init', get_template_directory_uri() . '/js/google_map_acf.js', array('google-map', 'jquery'), '0.1', true );

		wp_enqueue_script( 'Popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', array('jquery'), '0.1', true );
		wp_enqueue_script( 'BootstrapJS', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', array('jquery'), '0.1', true );
		wp_enqueue_script( 'Scripts', get_template_directory_uri() . '/js/scripts.js',  array('jquery'), '', true  );

	}
	add_action( 'wp_enqueue_scripts', 'change_here_with_your_name_enqueue' );



// En caso de ser necesario, agregar hoja de estilos para editar admin
// Add custom styles to admin
// Update CSS within in Admin

	function admin_style() {
		wp_enqueue_style('admin-styles', get_template_directory_uri().'/css/admin.css');
	}
	add_action('admin_enqueue_scripts', 'admin_style');



// ACF: En caso de ser necesario, aquí se agrega página de Opciones
/* Add options pages */

	if( function_exists('acf_add_options_page') ) {
		acf_add_options_page(array(
			'page_title' 	=> 'Opciones Generales',
			'menu_title'	=> 'Opciones',
			'menu_slug' 	=> 'general-settings',
			'capability'	=> 'edit_posts',
			'redirect'		=> false
		));
	}



// Esta acción permite subir svgs al admin
/* Allow .SVG */

	function cc_mime_types($mimes) {
		$mimes['svg'] = 'image/svg+xml';
		return $mimes;
	}
	add_filter('upload_mimes', 'cc_mime_types');



// Personalizar!
/* Cambiar Entradas a Descubre */

		function change_post_label() {
			global $menu;
			global $submenu;
			$menu[5][0] = 'Blog';
		}
		add_action( 'admin_menu', 'change_post_label' );



// Personalizar!
// Esta acción permite agregar campo de imagen destacada si se crea un custom post type
/* Add theme support for Featured Images */

	add_theme_support('post-thumbnails', array( 'post', 'proyectos', 'page', 'productos', 'colaboradores'));



// Esta acción oculta menus de side bar dentro del admin
/* Hide Menu Items for Editors */

	function hide_menu() {
		global $current_user;
		$user_id = get_current_user_id();

		if($user_id != '1') {
			remove_menu_page( 'index.php' );                    //Dashboard
			//remove_menu_page( 'upload.php' );                   //Media
			remove_menu_page( 'edit-comments.php' );            //Comments
			remove_menu_page( 'plugins.php' );                  //Plugins
			remove_menu_page( 'options-general.php' );          //Settings
			remove_menu_page( 'index.php?page=simple_history_page' );           //History Log
			remove_menu_page( 'tools.php' );                    //Tools
			remove_menu_page( 'options-general.php' );          //Settings
			remove_menu_page( 'admin.php?page=wpcf7' );          //CONTACTO
		}
	}
	add_action('admin_head', 'hide_menu');
