<!doctype html>
<html>
<head>
  <!-- 這裡是 HTML 語法的 header 頁首引用宣告區 -->
  <!-- 這裡是 HTML 語法的 header 頁首引用宣告區 -->
  <!-- 這裡是 HTML 語法的 header 頁首引用宣告區 -->
  <link rel="stylesheet" href="table-Style.css">
</head>
<body>
  <!-- 這裡是 HTML 語法的 主要資料區 -->
  放上首頁介紹的資料</br></br>

  <?php 
  include 'connMySQL__dB.php';
  include "getData.php";
  $getData = new getData(49754552);
  $CompanyName = $getData->getCompanyName();
  $EInvoiceData = $getData->getEInvoiceData();

  
  $sum = 0;//計算發票總量
  
  // mysqli_num_rows() 函数返回结果集中行的数量。
  // mysqli_fetch_assoc() 函数从结果集中取得一行作为关联数组。
  //表格製作
  echo "<table>";
    echo "<caption>" .$CompanyName. "</caption>";  //!!!???該如何取出公司名?!!!!????!!!
    echo "<th class="."column1".">西元年</th><th class="."column2".">月份</th><th class="."column3".">發票數量</th>";
  // 如果結果的row數大於0，表示有資料，將資料印出
  if (mysqli_num_rows($EInvoiceData) > 0) {          
    while ($row = mysqli_fetch_assoc($EInvoiceData)) {
    echo "<tr>";
            // echo "<td>" . $row["year"] . "</td><td>" . $row["month"] . "</td><td>" . $row["num_of_e-invoice"] . "</td>";
            echo "<td class="."column1".">" . $row["year"] . "</td><td class="."column2".">" . $row["month"] . "</td><td class="."column3".">" . $row["num_of_e-invoice"] . "</td>";
            $sum = $sum + $row["num_of_e-invoice"];
    echo "</tr>";
    }
  }
  echo "<tr>"."<td class="."column1"."></td><td class="."column2"."></td><td class="."column3".">" ."Total = ". $sum . "</td>"."</tr>";
  echo "</table>";


  ?>

  <!-- 這裏通常會放 footer 頁尾的資料 -->
  <!-- 這裏通常會放 footer 頁尾的資料 -->
  <!-- 這裏通常會放 footer 頁尾的資料 -->
</body>
</html>


<!--  -->


