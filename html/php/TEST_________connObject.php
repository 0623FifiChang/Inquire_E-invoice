<?php

function conn_mysql_database($servername, $username, $password, $database){
// $servername = "localhost";
// $username = "root";     //使用者名稱
// $password = "123456";   //使用者密碼
// $database = "inquire_e-invoice";        //選擇資料庫
echo "開始連線</br>";

//與MySQL連結
$conn = new mysqli($servername, $username, $password); 
// 检测连接
if ($conn->connect_error) {
    die("MySQL连接失败: " . $conn->connect_error);// die()：終止程序
} 
echo "MySQL连接成功</br>";


//選擇資料庫
$select_db = mysqli_select_db($conn, $database);   //選擇資料庫
if(!$select_db){
    die ("無法開啟資料庫");
}
echo "資料庫".$database."已經選擇，可以使用該資料庫了</br>";
}


?>