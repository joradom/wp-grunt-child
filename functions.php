<?php

/**
 * Enqueues styles and scripts for WP Grunt Child Theme
 *
 * @return void
 */
function wp_grunt_child_theme_enqueue() {

	// Update variables accordingly.
	$parent_style     = 'twentyseventeen'; // This is style name for the parent theme.
	$child_style      = 'wp-grunt-child'; // This is style name for the child theme.
	$google_fonts_url = 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800|Lato:100,400,300,700';


	wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );

	if ( ! is_admin() ) {
		// set SCRIPT_DEBUG global to true to load unminified CSS and JS
		$is_min = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

		// Enqueue all styles
		if ( ! empty( $google_fonts_url ) ) {
			wp_enqueue_style( $child_style . '-google-fonts', $google_fonts_url );
		}

		wp_enqueue_style( $child_style . '-css-vendor',
			get_stylesheet_directory_uri() . "/assets/css/vendor{$is_min}.css",
			array( $parent_style ), wp_get_theme()->get( 'Version' ) );
		wp_enqueue_style( $child_style, get_stylesheet_directory_uri() . "/assets/css/main{$is_min}.css",
			array( $child_style . '-css-vendor' ) );

		// Enqueue all scripts
		wp_enqueue_script( $child_style, get_stylesheet_directory_uri() . "/assets/js/all{$is_min}.js",
			array( 'jquery' ),
			false, true );
		// TODO: Use the following localize_script line to pass PHP values to JS by adding them to the array.
		// wp_localize_script();
	}
}

add_action( 'wp_enqueue_scripts', 'wp_grunt_child_theme_enqueue' );
