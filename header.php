<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package dongwang
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<?php wp_head(); ?>


<body <?php body_class(); ?>>

<div id="page" class="site">

	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'dongwang' ); ?></a>

</head>
<!--    --><?php //get_template_part( 'templates/header/header' ); ?>
    <header id="masthead" class="site-header" role="banner">
        <div class="main_header" id="main_header">
            <div class="row">
                <div class=" col-3 ">

                </div>
                <div class ="col-6" >
                    <div id="_365_logo_div"
                         style="background-image: url('<?php the_field('365_logo_img');?>')">
                    </div>
                </div>
                <div class = "col-3">

                </div>
            </div>
        </div>
    </header><!-- #masthead -->


</div>

</body>