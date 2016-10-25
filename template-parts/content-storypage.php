<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Adventurous
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
		$file = get_field('audio_file');
		if( $file ): ?>
			<audio autoplay>
				<source src="<?php echo $file; ?>" type="audio/mpeg">
				Your browser does not support the audio element.
			</audio>

		<?php endif; ?>


		<?php
		$content = get_field('content');
		if ($content ):
			echo $content;
		endif;
		?>
		
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'adventurous' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->


	<ul class="choices">
	<?php

	// check if the repeater field has rows of data
	if( have_rows('choices') ):

	 	// loop through the rows of data
	    while ( have_rows('choices') ) : the_row();

	    ?>
	    
		    <!--<a href="<?php the_sub_field('choice_link'); ?>">-->
		        <!--<a href="#"><?php the_sub_field('choice_text'); ?></a>-->
		    <!--</a>-->
		
	    <?php
	    endwhile;

	else :

	    // no rows found

	endif;

	?>
	</ul>

	<footer class="entry-footer">
		<a id="mute" href="#"><i class="fa fa-volume-up" aria-hidden="true"></i></a>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->

