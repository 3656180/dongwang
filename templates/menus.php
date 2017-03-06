

<div id="content" class="site-content">
    <?php /* Main menu*/ ?>
    <div class="menu" id="menu">
        <div class="menu_container" id="menu_background_container"></div>
<!--        <div class="close-button" id="menu_close_button">X</div>-->



        <!--        close button-->
        <!--        close button-->
        <!--        close button-->
        <div class="close_button"  id="menu_close_button">
            <div class="close_button_front">
                <div class="rotated_icons" id="cross_X" >
                    <div class="X_in_close_button" id="X_in_close_button_0"></div>
                    <div class="X_in_close_button" id="X_in_close_button_1"></div>
                </div>
            </div>
            <div class="close_button_back" id="menu_close_button_back">
                <div class="close_button_background" id="menu_close_button_back_background"></div>
                <label class="menu_text" id="menu_close_text">Close</label>
            </div>
        </div>
        <!--        close button-->
        <!--        close button-->
        <!--        close button-->


        <div id="menu_items">
            <button class="buttons" id="add_customer_button">ADD CUSTOMER</button>
            <button class="buttons" id="manage_email_button">邮件系统管理</button>

        </div>
    </div>
    <?php /* Main menu*/ ?>
    <?php include 'add_customer.php'; ?>
    <?php include 'system_manage_page.php'; ?>


    <?php include 'login_page.php';?>

    <?php /*welcome page*/?>
    <div class="menu" id="welcome_page">
        <div class="menu_container" id="menu_background_container"></div>
        <div>
           welcome page
        </div>>
    </div>

    <?php /*welcome page*/?>
    <?php include 'contact_us.php';?>


</div>