<div class="main_container" id="main_container_3" >
    <!--     close button-->
    <!--     close button-->
    <!--     close button-->
    <div class="close_button"  id="tax_lecture_close_button">
        <div class="contact_us_close_button_front">
            <div class="rotated_icons" id="tax_lecture_close_button_cross_X" >
                <div class="X_in_close_button" id="X_in_close_button_0"></div>
                <div class="X_in_close_button" id="X_in_close_button_1"></div>
            </div>
        </div>
        <div class="close_button_back" id="tax_lecture_close_button_back">
            <div class="close_button_background" id="contact_us_close_button_back_background"></div>
            <label class="menu_text" id="tax_lecture_close_button_text">关闭</label>
        </div>
    </div>
    <!--     close button-->
    <!--     close button-->
    <!--     close button-->
    <div id="tl_main_div">
        <div id="tl_main_top_div">
            <div class="row" id="posts_row">
                <?php

                global $post;
                $args = array( 'posts_per_page' => 5, 'post_type'=>'post' );

                $myposts = get_posts( $args );
                foreach ( $myposts as $post ) : setup_postdata( $post ); ?>
                    <div class="col-md-4 col-3 " id="posts">
                        <div class="post_title"><?php the_title(); ?></div>
                        <div><?php the_content(); ?></div>
                    </div>
                <?php endforeach;
                wp_reset_postdata();?>

            </div>
        </div>
        <div id="tl_main_bottom_div">

        </div>
    </div>

</div>