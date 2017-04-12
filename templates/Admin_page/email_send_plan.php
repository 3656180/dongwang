<div class="menu" id="email_send_plan_page">

    <div id="main_div_espp">
        <div class="row" id="search_div_espp">
            <div class="col-1"></div>
            <div class="col-8">
                <input id="search_input_espp" type="text" placeholder="通过姓名，邮箱或发送日期搜索">
            </div>
            <div class="col-1" id="search_button_espp">搜索</div>
        </div>
        <ul id="espp_title">
            <li>
                <div class='row'>
                    <div class='col-1' id="title_esp">
                        <b>姓名</b>
                        <b class="sort_button" id="name_sort_up_espp">⬆️</b>
                        <b class="sort_button"id="name_sort_down_espp">⬇️</b>
                    </div>
                    <div class='col-2' id="title_esp">
                        <b>邮箱</b>
                        <b class="sort_button"id="email_sort_up_espp">⬆️</b>
                        <b class="sort_button"id="email_sort_down_espp">⬇️</b>
                    </div>
                    <div class='col-2' id="title_esp">
                        <b>发送日期</b>
                        <b class="sort_button"id="date_sort_up_espp">⬆️</b>
                        <b class="sort_button"id="date_sort_down_espp">⬇️</b>
                    </div>
                    <div class='col-2' id="title_esp">
                        <b>支付日期</b>
                        <b class="sort_button"id="pay_date_sort_up_espp">⬆️</b>
                        <b class="sort_button"id="pay_date_sort_down_espp">⬇️</b>
                    </div>
                    <div class='col-5' id="title_esp">
                        <b>邮件内容</b>
                    </div>
                </div>
            </li>
        </ul>
        <div id="show_list_div_espp">
            <?php get_template_part( 'xml/load_xml/load_send_plan_to_sendplan' ); ?>
        </div>
    </div>

</div>