<?php
/**
 * Template: Story Page
 *
 * @package Adventurous
 */

get_header(); ?>

<div class="container">
	<div class="row">
		<div id="primary" class="col-lg-12 col-md-12">
			<main id="main" class="site-main" role="main">

				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'template-parts/content', 'page' ); ?>

					<?php

					// check if the repeater field has rows of data
					if( have_rows('choices') ):

					 	// loop through the rows of data
					    while ( have_rows('choices') ) : the_row();

					    ?>
					    <div class="choices">
						    <a href="<?php the_sub_field('choice_link'); ?>">
						        <?php the_sub_field('choice_text'); ?>
						    </a>
						</div>
					    <?php
					    endwhile;

					else :

					    // no rows found

					endif;

					?>

				<?php endwhile; // End of the loop. ?>

			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!-- .row -->
</div><!-- .container -->

<?php get_footer(); ?>