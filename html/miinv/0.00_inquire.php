<!DOCTYPE html>
<html>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>MiINV神資電子發票加值中心</title>
    <script type="text/javascript" src="./js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="./js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="./js/bootstrap.js"></script>

    <link rel="stylesheet" href="./css/bootstrap-customize.css">
    <link rel="stylesheet" href="./css/bootstrap.min.css" />
    <link rel="stylesheet" href="./css/bootstrap-reboot.min.css" />
    <link rel="stylesheet" href="./css/bootstrap-grid.min.css" />
    <link rel="stylesheet" href="./css/bootstrap-customize.css" />
    <link rel="stylesheet" href="./css/headerstyle.css" />
    <link rel="stylesheet" href="./css/style.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
        crossorigin="anonymous">


    <link rel="stylesheet" href="./css/table-Style.css">
    <style>
        .front-images {

            /*       Header圖片高度 */
            min-height: 300px;
            /*       Header圖片URL  */
            background-image: url("./images/banner_bg_img/bg_img_3_charge.png");
        }

        .related_container {
            height: 100%;
            padding-top: 100px;
            padding-bottom: 100px
        }

        .related_button {
            font-size: 1.8rem;
            height: 200px;
            width: 100%;
            border-width: 5px;
            border-color: #C4E3E8;
            color: #177588;
        }

        .related_button:hover {
            background-color: #8AC5D1;
            border-color: #177588;
        }

        .related_row {
            height: 20%;
            padding-bottom: 10px;
        }

        .related_col {
            height: 100%;
        }

        .related_text {
            color: #434343;
        }
    </style>


    <script src="./js/jquery-3.3.1.min.js"></script>
    <script src="./js/bootstrap.js"></script>
    
</head>

<body>
    <!-- chatbot start -->
    <script src="./js/ChatBotController.js"></script>
    <!-- chatbot end -->
	
    <!--    Nav Bar -->
    <script src="./js/header_rwd.js"></script>
    <!--       Header標題名稱 -->
    <div class="front-images front-title">
        <hr class="hr_banner_title_top" />
        <span class="signin_title">
            電子發票查詢
        </span>
        <hr class="hr_banner_title_buttom" />
    </div>
    </br>
    <form action="" method="get" targe="submit">
        <p>請輸入統編: <input type="number" list="taxList" name="taxID" /></p>
            <datalist id="taxList">
                <option value="497545523">
                <option value="456">
                <option value="789">
                <option value="101112">
            </datalist>
        <!-- <p>請輸入公司名: <input type="text" list="companyList" name="comName" /></p>
            <datalist id="companyList">
                <option value="123">
                <option value="456">
                <option value="789">
                <option value="101112">
            </datalist> -->
        <input type="submit" value="Submit"/> 
    </form>

    <?php 
    include "php/tabulation.php";
    if($_GET["taxID"]){
        $ID = $_GET["taxID"];            
        $tabulation = new tabulation($ID);
        if($tabulation->ID_notFond == 1){
            echo "<h2>此ID不存在，請重新輸入</h2>";
        }else{
            $tabulation->make_table();
        }    
    }
    echo "<p></p>";//增加與底下的間距
    ?>    
    
    <!-- 網頁最下方的神通相關連結 -->
    <script type="text/javascript" src="./js/footer.js"></script>
</body>

</html>