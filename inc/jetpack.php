<?php
/**
 * Jetpack Compatibility File.
 *
 * @link https://jetpack.me/
 *
 * @package Adventurous
 */

/**
 * Add theme support for Infinite Scroll.
 * See: https://jetpack.me/support/infinite-scroll/
 */
function adventurous_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'render'    => 'adventurous_infinite_scroll_render',
		'footer'    => 'page',
	) );
} // end function adventurous_jetpack_setup
add_action( 'after_setup_theme', 'adventurous_jetpack_setup' );

/**
 * Custom render function for Infinite Scroll.
 */
function adventurous_infinite_scroll_render() {
	while ( have_posts() ) {
		the_post();
		get_template_part( 'template-parts/content', get_post_format() );
	}
} // end function adventurous_infinite_scroll_render
