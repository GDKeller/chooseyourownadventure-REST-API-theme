<?php
/**
 * Template: Story Page
 *
 * @package Adventurous
 */

get_header(); ?>

<div id="backgroundimagecontainer">
	<div id="backgroundimage"></div>
</div>

<div class="container">
	<div class="row">
		<div id="primary" class="col-lg-12 col-md-12">
			<main id="main" class="site-main" role="main">

				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'template-parts/content', 'storypage' ); ?>

				<?php endwhile; // End of the loop. ?>

			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!-- .row -->
</div><!-- .container -->

<?php get_footer(); ?>