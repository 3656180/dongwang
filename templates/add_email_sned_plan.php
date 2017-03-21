<div class="menu" id="add_email_sned_plan_page">
    <div class="row" id="main_div_aesp">
        <div class="col-6" id="left_sub_div_aesp">
            <div class="custom_div_0" id="recipient_aesp">
                <div class="row">
                    <div class="col-4">
                        <label class="custom_label_0">收件人: </label>
                    </div>
                    <div class="col-8">
                        <input class="custom_text_input_0" id="recipient_input_aesp"
                               type="text" placeholder="recipient">
                    </div>
                </div>
            </div>
            <div class="custom_div_0" id="email_address_aesp">
                <div class="row">
                    <div class="col-4">
                        <label class="custom_label_0">邮箱地址:</label>
                    </div>
                    <div class="col-8">
                        <input class="custom_text_input_0" id="email_address_input_asep"
                               type="text" placeholder="email address">
                    </div>
                </div>
            </div>
            <div class="custom_div_0" id="payment_amount_aesp">
                <div class="row">
                    <div class="col-4">
                        <label class="custom_label_0">缴费金额:</label>
                    </div>
                    <div class="col-8">
                        <input class="custom_text_input_0" id="payment_amount_input_asep"
                               type="text" placeholder="payment amount">
                    </div>
                </div>
            </div>
            <div class="custom_div_0" id="insurance_number_asep">
                <div class="row">
                    <div class="col-4">
                        <label class="custom_label_0">保单后四位:</label>
                    </div>
                    <div class="col-8">
                        <input class="custom_text_input_0" id="insurance_number_input_asep"
                               type="text" placeholder="insurance number">
                    </div>
                </div>
            </div>
            <div class="custom_div_0" id="send_period_aesp">
                <label class="custom_label_0">提醒发送周期</label>
                <div class="row">
                    <div class="col-6">
                       <label class="custom_label_0">起始日期</label>
                        <input type="date" id="send_period_start_aesp">
                    </div>
                    <div class="col-6">
                        <label class="custom_label_0">截止日期</label>
                        <input type="date" id="send_period_end_aesp">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6" id="right_sub_div_aesp">
            <div class="custom_div_0" id="pay_frequency">
               <div class="row">
                   <div class="col-4">
                       <label class="custom_label_0">缴费频率:</label>
                   </div>
                   <div class="col-5">
                       <div class="row">
                           <div class="col-6" id="pay_frequency_annually">
                               <label class="custom_label_0">每年</label>
                           </div>
                           <div class="col-6" id="pay_frequency_monthly">
                               <label class="custom_label_0">每月</label>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
            <div class="custom_div_0" id="pay_date_aesp">
                <div class="row">
                    <div class="col-4">
                        <label class="custom_label_0">支付日期:</label>
                    </div>
                    <div class="col-3" id="pay_date_month_div_aesp">
                        <select id="pay_date_month_aesp">
                            <option value="1">1月 </option>
                            <option value="2">2月 </option>
                            <option value="3">3月 </option>
                            <option value="4">4月 </option>
                            <option value="5">5月 </option>
                            <option value="6">6月 </option>
                            <option value="7">7月 </option>
                            <option value="8">8月 </option>
                            <option value="9">9月 </option>
                            <option value="10">10月 </option>
                            <option value="11">11月 </option>
                            <option value="12">12月 </option>
                        </select>
                    </div>
                    <div class="col-3" id="pay_date_day_div_aesp">
                        <select id="pay_date_day_aesp" >
                            <option value="1">1号</option>
                            <option value="2">2号</option>
                            <option value="3">3号</option>
                            <option value="4">4号</option>
                            <option value="5">5号</option>
                            <option value="6">6号</option>
                            <option value="7">7号</option>
                            <option value="8">8号</option>
                            <option value="9">9号</option>
                            <option value="10">10号</option>
                            <option value="11">11号</option>
                            <option value="12">12号</option>
                            <option value="13">13号</option>
                            <option value="14">14号</option>
                            <option value="15">15号</option>
                            <option value="16">16号</option>
                            <option value="17">17号</option>
                            <option value="18">18号</option>
                            <option value="19">19号</option>
                            <option value="20">20号</option>
                            <option value="21">21号</option>
                            <option value="22">22号</option>
                            <option value="23">23号</option>
                            <option value="24">24号</option>
                            <option value="25">25号</option>
                            <option value="26">26号</option>
                            <option value="27">27号</option>
                            <option value="28">28号</option>
                            <option value="29">29号</option>
                            <option value="30">30号</option>
                            <option value="31">31号</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="custom_div_0" id="send_time_aesp">
                <div class="row">
                    <div class="col-4">
                       <label class="custom_label_0">何时提醒</label>
                    </div>
                    <div class="col-4">
                        <div id="month_aesp" >
                            <input type="checkbox" class="input_checkbox"
                                  id="check_box_month" value="month"> 提前一个月<br>
                        </div>
                        <div id="twomonth_aesp" >
                            <input type="checkbox" class="input_checkbox"
                                   id="check_box_twoweeks" value="twoweeks"> 提前两星期<br>
                        </div>
                        <input type="checkbox" class="input_checkbox"
                               id="chesck_box_oneweek" value="oneweek"> 提前一星期<br>
                        <input type="checkbox" class="input_checkbox"
                               id="chesck_box_threedays" value="threedays"> 提前三天<br>
                        <input type="checkbox" class="input_checkbox"
                               id="chesck_box_twodays" value="twodays"> 提前两天<br>
                        <input type="checkbox" class="input_checkbox"
                               id="chesck_box_oneday" value="oneday"> 提前一天<br>
                    </div>
                </div>
            </div>
            <div id="submit_button_aesp">
                <label class="custom_label_0">提交</label>
            </div>
        </div>
    </div>
</div>