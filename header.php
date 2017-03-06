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
    <header id="masthead" class="site-header" role="banner">
        <div class="main_header" id="main_header">
            <div class="row">
                <div class=" col-3 ">
                    <!--        menu button-->
                    <!--        menu button-->
                    <!--        menu button-->
                    <div class="circle_button"  id="Menu_button">
                        <div class="rotated_icons"id="hamburger" >
                            <div class="bar_in_circle_button"></div>
                            <div class="bar_in_circle_button"></div>
                            <div class="bar_in_circle_button"></div>
                        </div>
                        <div class="circle_button_back" id="Menu_button_menu">
                            <div class="circle_button_background" id="Menu_button_background"></div>
                            <label class="menu_text" id="menu_text">菜单</label>
                        </div>
                    </div>
                    <!--        menu button-->
                    <!--        menu button-->
                    <!--        menu button-->
                </div>
                <div class ="col-6" >
                    <div id="_365_logo_div"
                         style="background-image: url('<?php the_field('365_logo_img');?>')">

                    </div>
                    <!--        365 button-->
                    <!--        365 button-->
                    <!--        365 button-->
                    <div class="_365_financial_button"  id="365_financial_button">
                        <div class="rotated_icons"id="home_icon" >
                            <div class="first_dot"></div>
                            <div class="second_dot"></div>
                            <div class="third_dot"></div>
                            <div class="fourth_dot"></div>
                        </div>
                        <div class="circle_button_back" id="365_financial_icon">
                            <div class="circle_button_background" id="Menu_button_background"></div>
                            <label class="menu_text" id="365_financial_icon_text">365 Financial</label>
                        </div>
                    </div>
                    <!--        365 button-->
                    <!--        365 button-->
                    <!--        365 button-->
                </div>
                <div class = "col-3">
                    <!--        login button-->
                    <!--        login button-->
                    <!--        login button-->
                    <div class="circle_button"  id="login_button">
                        <div class="login_image" >
                            <div class="login_image_inner">
                            <img id="login_image_0" src="http://localhost/wp-content/themes/dongwang/images/login_image.png">
<!--                                <div class="head_part"></div>-->
<!--                                <div class="body_part"></div>-->
                            </div>
                        </div>
                        <div class="circle_button_back" id="login_button_back">
                            <div class="circle_button_background" id="login_button_back_background"></div>
                            <label class="menu_text" id="login_text">登陆</label>
                        </div>
                    </div>
                    <!--        login button-->
                    <!--        login button-->
                    <!--        login button-->
<!--                        <button class="buttons" id="login_button">Login</button>-->
                </div>

                <div class = "col-3">
                    <!--        contact_us button-->
                    <!--        contact_us button-->
                    <!--        contact_us button-->
                    <div class="contact_us_button"  id="contact_us_button">
                            <label class="contact_us_text" id="contact_us_text">联系我们</label>
                    </div>
                    <!--        contact_us button-->
                    <!--        contact_us button-->
                    <!--        contact_us button-->
                    <!--                        <button class="buttons" id="login_button">Login</button>-->
                </div>
            </div>
    </div>
    </header><!-- #masthead -->


</div>

</body>