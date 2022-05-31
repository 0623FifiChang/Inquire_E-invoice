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
  include "tabulation.php";
  $ID = 497545523;
  $tabulation = new tabulation($ID);

  if($tabulation->ID_notFond == 1){
    echo "此ID不存在，請重新輸入";
  }else{
      $tabulation->make_table();
  }
  


  ?>

  
  <!-- 這裏通常會放 footer 頁尾的資料 -->
  <!-- 這裏通常會放 footer 頁尾的資料 -->
  <!-- 這裏通常會放 footer 頁尾的資料 -->
</body>
</html>


<!--  -->


