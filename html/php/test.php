<?php
  require_once('connMySQL.php');  //連線 MySQL 的 "inquire_e-invoice" 資料庫
?>

<!doctype html>
<html>
<head>
  <!-- 這裡是 HTML 語法的 header 頁首引用宣告區 -->
  <!-- 這裡是 HTML 語法的 header 頁首引用宣告區 -->
  <!-- 這裡是 HTML 語法的 header 頁首引用宣告區 -->

</head>
<body>
  <!-- 這裡是 HTML 語法的 主要資料區 -->
  放上首頁介紹的資料</br></br>

  <?php 
  //sql語法語句     //變數引用方法：     '".$sql_1."'
  $sql_id = 49754552;    
  $sql_month_num = "SELECT `month` , `num_of_e-invoice` 
                    FROM `data_of_e-invoice` 
                    WHERE `company_compilation` =   '".$sql_id."'   " ;
                 // WHERE `company_compilation` =      49754552     " ;    // 將數字以變數的形式替換，替換方法為：     '".$sql_1."'
  $sql_compyName = "SELECT DISTINCT `company_name`	
                    FROM `data_of_e-invoice`
                    WHERE `company_compilation` =  '".$sql_id."'  " ; 

  // 用mysqli_query方法執行(sql語法)將結果存在變數中
  $result_month_num = mysqli_query($conn, $sql_month_num);
  $result_compyName = mysqli_query($conn, $sql_compyName);

  
    // mysqli_num_rows() 函数返回结果集中行的数量。
    // mysqli_fetch_assoc() 函数从结果集中取得一行作为关联数组。
  //表格製作
  echo "<table>";
        echo "<tr>公司名:" . mysqli_fetch_assoc($result_compyName)["company_name"]. "</tr>";  //!!!???該如何取出公司名?!!!!????!!!
  // 如果結果的row數大於0，表示有資料，將資料印出
  if (mysqli_num_rows($result_month_num) > 0) {          
    while ($row = mysqli_fetch_assoc($result_month_num)) {
		echo "<tr>";
            // echo "<td>公司名:" . $row["company_name"] . "</td><td>月份:" . $row["month"] . "</td><td>數量:" . $row["num_of_e-invoice"] . "</td>";
            echo "<td>月份:" . $row["month"] . "</td><td>數量:" . $row["num_of_e-invoice"] . "</td>";
		echo "</tr>";
	}
  }
  echo "</table>";
  

  echo "</br>放上首頁介紹的資料</br>";
  ?>

  <!-- 這裏通常會放 footer 頁尾的資料 -->
  <!-- 這裏通常會放 footer 頁尾的資料 -->
  <!-- 這裏通常會放 footer 頁尾的資料 -->
</body>
</html>


<!--  -->


