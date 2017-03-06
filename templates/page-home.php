<?php /* Template Name: Home Page */ ?>
<?php //get_template_part( 'cron/cron_job' ); ?>
<?php get_header();?>
<?php include 'menus.php';?>



    <!-- homepage  -->
    <!-- homepage  -->
    <!-- homepage  -->
<div class="page-home" id="home_page">
	<div class="main_container" id="main_container_0" >
        <div class="row" id="homepage_items_containers">
            <div class="col-xl-3 col-12" id="homepage_div_0"> <!-- 1st or top left div-->
                <div class="background_containers" id="background_container_0" style="background-image:
                        url('<?php the_field('background_container_0');?>')"></div>
                <div class="item_container" id="item_container_0">
                    <div class="sub_titles" id="sub_title_0">
                        <ul class="unordered_list_without_bullet" >
                            <li >保险估价</li>
                        </ul>
                    </div>
                    <div class="sub_title_back" id="sub_title_0_back">
                        <ul class="unordered_list_without_bullet" id="sub_titles_1">
                            <li >我们专业的保险顾问</li>
                            <li >会为您提供优惠的保</li>
                            <li >险报价</li>
                        </ul>
                    </div>

                </div>

            </div>
            <div class="col-xl-3 col-12 " id="homepage_div_1"><!-- 2nd or top right div-->
                <div class="background_containers" id="background_container_1" style="background-image:
                        url('<?php the_field('background_container_1');?>')"></div>
                <div class="item_container" id="item_container_1">
                    <div class="sub_titles" id="sub_title_1">
                        <ul class="unordered_list_without_bullet" >
                            <li >自助查询</li>
                        </ul>
                    </div>
                    <div class="sub_title_back" id="sub_title_1_back">
                        <ul class="unordered_list_without_bullet" id="sub_titles_1">
                            <li >使用自助查询系统在</li>
                            <li >线查询您的保险信息</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="col-xl-3 col-12 "><!-- 3rd or bottom left div-->
                <div class="background_containers" id="background_container_2" style="background-image:
                        url('<?php the_field('background_container_2');?>')"></div>
                <div class="item_container" id="item_container_2">
                    <div class="sub_titles" id="sub_title_2">
                        <ul class="unordered_list_without_bullet" >
                            <li >税务讲座</li>
                        </ul>
                    </div>
                    <div class="sub_title_back" id="sub_title_2_back">
                        <ul class="unordered_list_without_bullet" id="sub_titles_1">
                            <li >在线观看我们的为您</li>
                            <li >精心准备的税务讲座</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="col-xl-3 col-12 "><!-- 4th or bottom right div-->
                <div class="background_containers" id="background_container_3" style="background-image:
                        url('<?php the_field('background_container_3');?>')"></div>
                <div class="item_container" id="item_container_3">
                    <div class="sub_titles" id="sub_title_3">
                        <ul class="unordered_list_without_bullet" >
                            <li >理财顾问</li>
                        </ul>
                    </div>
                    <div class="sub_title_back" id="sub_title_3_back">
                        <ul class="unordered_list_without_bullet" id="sub_titles_1">
                            <li >这里有最专业的理财</li>
                            <li >顾问为您解答最热点</li>
                            <li >理财问题</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
	</div>
    <!-- homepage  -->
    <!-- homepage  -->
    <!-- homepage  -->

    <!-- insurance quote divs -->
    <!-- insurance quote divs -->
    <!-- insurance quote divs -->
    <?php include 'insurance_quote.php';?>
    <!-- insurance quote divs -->
    <!-- insurance quote divs -->
    <!-- insurance quote divs -->


    <!-- self service divs -->
    <!-- self service divs -->
    <!-- self service divs -->
    <?php include 'self_service.php';?>

    <!-- self service divs -->
    <!-- self service divs -->
    <!-- self service divs -->

    <?php include 'tax_lecture.php';?>


    <?php include 'financial_advisor.php';?>

</div>



<?php
get_footer();
?>