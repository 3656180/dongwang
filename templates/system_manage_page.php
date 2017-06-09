<?php /* Template Name: Admin page */ ?>
<?php get_header(); ?>
<?php get_template_part( 'database/load_database_to_xml' ); ?>
<meta http-equiv="Content-Type" content="text/html; charset=utf8" />


<div id="system_manage_page">
   <div class="row" id ="main_smp_div">
       <div class="col-5" id="recent_send_smp">
           <div id="recent_send_smp_title">
                <label class="title_label">已提醒但未完成的支付事件</label>
           </div>
           <div class="smp_list_div" id="recent_send_smp_list">
               <ul id=recent_send_smp_list_titles">
                   <li id="recent_send_smp_list_title">
                       <div class='row' >
                           <div class='col-2'>
                               支付ID
                           </div>
                           <div class='col-2'>
                               姓名
                           </div>
                           <div class='col-3'>
                               邮箱
                           </div>
                           <div class='col-2'>
                               付款日期
                           </div>
                           <div class='col-3'>
                               已发送次数
                           </div>
                       </div>
                   </li>
               </ul>
               <div class="smp_list_show_div">
                   <?php get_template_part( 'templates/Admin_page/recent_sent_smp_list' ); ?>
               </div>


           </div>
       </div>
       <div class="col-5" id="sent_plan_smp">
           <div id="sent_plan_smp_title">
               <label class="title_label">本月待发邮件</label>
           </div>
           <div class="smp_list_div" id="sent_plan_smp_list">
               <ul id=send_plan_smp_list_titles">
                   <li id="send_plan_smp_list_title">
                       <div class='row' >
                           <div class='col-3'>
                               姓名
                           </div>
                           <div class='col-6'>
                               邮箱
                           </div>
                           <div class='col-3'>
                               发送日
                           </div>
                       </div>
                   </li>
               </ul>
               <div class="smp_list_show_div">
                   <?php get_template_part( 'templates/Admin_page/send_plan_smp_list' ); ?>
               </div>
           </div>
       </div>
       <div class="col-2" id="menu_smp">
           <button class="buttons" id="main_page_smp">主页</button>
           <button class="buttons" id="send_history_smp">查看发送历史</button>
           <button class="buttons" id="send_plan_smp">查看发送计划</button>
           <button class="buttons" id="set_email_smp">添加提醒计划</button>
           <button class="buttons" id="manage_payment_event_smp">管理支付事件</button>
           <button class="buttons" id="manage_insurance_smp">管理保单</button>

       </div>
   </div>
    <?php get_template_part( 'templates/Admin_page/email_send_history' ); ?>
    <?php get_template_part( 'templates/Admin_page/email_send_plan' ); ?>
    <?php get_template_part( 'templates/Admin_page/add_email_sned_plan' ); ?>
    <?php get_template_part( 'templates/Admin_page/manage_payment_event_page' ); ?>
    <?php get_template_part( 'templates/Admin_page/manage_insurance_page' ); ?>

    <div class="pop_up_div_frame" id="pop_up_div_frame_smp">
        <div class="close_button_bud" id="close_button_puds">X</div>
        <div class="pop_up_div" id="pop_up_div_smp">

        </div>
    </div>



</div>
<?php
get_footer();
?>