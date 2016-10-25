<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Adventurous
 */

?>


	</div><!-- #content -->

	<?php if( is_singular('storypage')) {
		// do nothing
	} else {
	?>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12">
					<div class="site-info">
						

						<?php
							printf( esc_html__( 'Copyright ' ));
							echo date('Y ');
							echo esc_html( do_action(call_displayClientName) );
							print( esc_html__( '. All Rights Reserved. '));
							print( esc_html( do_action(call_displayDesignerAttr) ));
							print( ' <a href="' );
							print( esc_url( do_action(call_displayDesignerSite) ) );
							print( ' " rel="designer" target="blank">' );
							print( esc_html( do_action(call_displayDesignerName)));
							print( '</a>');
							echo '<br>';
							echo '<br>';
						?>
					</div><!-- .site-info -->
				</div><!-- .col -->
			</div><!-- .row -->
		</div><!-- .container -->
	</footer><!-- #colophon -->
	<?php } ?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
