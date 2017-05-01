<div class="menu" id="manage_payment_event_page">
    <div id="main_div_mpep">
        <div class="row" id="search_div_mpep">
            <!--            <div class="col-1"></div>-->
            <div class="col-2">
                <input class="filter_inputs_espp" id="id_input_mpep" type="text" placeholder="ID">
            </div>
            <div class="col-2">
                <input class="filter_inputs_espp" id="name_input_mpep" type="text" placeholder="姓名">
            </div>
            <div class="col-2">
                <input class="filter_inputs_espp" id="email_input_mpep" type="text" placeholder="邮箱">
            </div>
            <div class="col-2">
                <input class="filter_inputs_espp" id="phone_number_input_mpep" type="text" placeholder="电话">
            </div>
            <div class="col-2">
                <input class="filter_inputs_espp" id="wechat_input_mpep" type="text" placeholder="微信">
            </div>
            <div class="col-1" id="search_button_mpep">搜索</div>
            <div class="col-1" ></div>
            <div class="col-2">
                <input class="filter_inputs_espp" id="paydate_start_input_mpep" type="text"
                       onfocus="(this.type='date')" placeholder="起始付款日期">
            </div>
            <div class="col-2">
                <input class="filter_inputs_espp" id="paydate_end_input_mpep" type="text"
                       onfocus="(this.type='date')" placeholder="结束付款日期">
            </div>
            <div class="col-2">
                <input class="filter_inputs_espp" id="insurance_number_input_mpep" type="text" placeholder="保单号">
            </div>
            <div class="col-2">
                <input class="filter_inputs_espp" id="insurance_type_input_mpep" type="text" placeholder="保险种类">
            </div>
            <div class="col-2">
                <input class="filter_inputs_espp" id="event_status_input_mpep" type="text" placeholder="状态">
            </div>
        </div>
        <ul id="mpep_title">
            <li>
                <div class='row'>
                    <div class='col-1' id="title_esp">
                        <b>ID</b>
                        <b class="sort_button" id="id_sort_up_mpep">⬆️</b>
                        <b class="sort_button"id="id_sort_down_mpep">⬇️</b>
                    </div>
                    <div class='col-1' id="title_esp">
                        <b>姓名</b>
                        <b class="sort_button" id="name_sort_up_mpep">⬆️</b>
                        <b class="sort_button"id="name_sort_down_mpep">⬇️</b>
                    </div>
                    <div class='col-2' id="title_esp">
                        <b>邮箱</b>
                        <b class="sort_button"id="email_sort_up_mpep">⬆️</b>
                        <b class="sort_button"id="email_sort_down_mpep">⬇️</b>
                    </div>
                    <div class='col-1' id="title_esp">
                        <b>电话</b>
                        <b class="sort_button"id="phone_number_up_mpep">⬆️</b>
                        <b class="sort_button"id="phone_number_down_mpep">⬇️</b>
                    </div>
                    <div class='col-1' id="title_esp">
                        <b>微信</b>
                        <b class="sort_button"id="wechat_up_mpep">⬆️</b>
                        <b class="sort_button"id="wechat_down_mpep">⬇️</b>
                    </div>
                    <div class='col-2' id="title_esp">
                        <b>支付日期</b>
                        <b class="sort_button"id="pay_date_sort_up_mpep">⬆️</b>
                        <b class="sort_button"id="pay_date_sort_down_mpep">⬇️</b>
                    </div>
                    <div class='col-1' id="title_esp">
                        <b>保单号</b>
                        <b class="sort_button"id="insurance_number_up_mpep">⬆️</b>
                        <b class="sort_button"id="insurance_number_down_mpep">⬇️</b>
                    </div>
                    <div class='col-1' id="title_esp">
                        <b>金额</b>
                        <b class="sort_button"id="payment_amount_up_mpep">⬆️</b>
                        <b class="sort_button"id="payment_amount_down_mpep">⬇️</b>
                    </div>
                    <div class='col-1' id="title_esp">
                        <b>种类</b>
                        <b class="sort_button"id="insurance_type_up_mpep">⬆️</b>
                        <b class="sort_button"id="insurance_type_down_mpep">⬇️</b>
                    </div>
                    <div class='col-1' id="title_esp">
                        <b>状态</b>
                        <b class="sort_button"id="event_status_up_mpep">⬆️</b>
                        <b class="sort_button"id="event_status_down_mpep">⬇️</b>
                    </div>
                </div>
            </li>
        </ul>
        <div id="show_list_div_mpep">
            <?php get_template_part( 'xml/load_xml/load_xml_to_manage_payment_event' ); ?>
        </div>
    </div>

    <?php get_template_part( 'templates/Admin_page/edit_payment_event' ); ?>
</div>
