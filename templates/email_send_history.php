<div class="menu" id="email_send_history_page">
    <div id="main_div_eshp">
        <ul>
            <li>
                <div class='row'>
                    <div class='col-1'>
                        姓名
                    </div>
                    <div class='col-3'>
                        邮箱
                    </div>
                    <div class='col-1'>
                        发送日
                    </div>
                    <div class='col-7'>
                        邮件内容
                    </div>
                </div>
            </li>
        </ul>
        <div id="show_list_div_espp">
            <?php get_template_part( 'database/selectSentEmails' ); ?>
        </div>
    </div>

</div>
