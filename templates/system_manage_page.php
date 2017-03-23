<?php //get_template_part( 'database/load_database_to_xml' ); ?>
<?php get_template_part( 'database/load_database_to_xml' ); ?>



<div class="menu" id="system_manage_page">
   <div class="row" id ="main_smp_div">
       <div class="col-5" id="recent_send_smp">
           <div id="recent_send_smp_title">
                <label class="title_label">已发送</label>
           </div>
           <div class="smp_list_div" id="recent_send_smp_list">
               <ul id=recent_send_smp_list_titles">
                   <li id="recent_send_smp_list_title">
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
                   <?php include 'recent_sent_smp_list.php'?>

               </div>


           </div>
       </div>
       <div class="col-5" id="sent_plan_smp">
           <div id="sent_plan_smp_title">
               <label class="title_label">未发送</label>
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
                   <?php include 'send_plan_smp_list.php'?>

               </div>



           </div>
       </div>
       <div class="col-2" id="menu_smp">
           <button class="buttons" id="main_page_smp">主页</button>
           <button class="buttons" id="send_history_smp">查看发送历史</button>
           <button class="buttons" id="send_plan_smp">查看发送计划</button>
           <button class="buttons" id="set_email_smp">设置邮件内容</button>
           <button class="buttons" id="general_set_smp">通用设置</button>

       </div>
   </div>
    <?php include "email_send_history.php"; ?>
    <?php include "email_send_plan.php"; ?>
    <?php include "add_email_sned_plan.php"; ?>
    <?php include "general_set_page.php"; ?>

    <div class="pop_up_div_frame" id="pop_up_div_frame_smp">
        <div class="close_button_bud" id="close_button_puds">X</div>
        <div class="pop_up_div" id="pop_up_div_smp">

        </div>
        </div>



</div>