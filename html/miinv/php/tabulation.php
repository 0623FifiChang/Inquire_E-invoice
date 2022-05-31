<head>
  <link rel="stylesheet" href="../css/table-Style.css">
  <!-- 這裡是 HTML 語法的 header 頁首引用宣告區 -->
  <!-- 這裡是 HTML 語法的 header 頁首引用宣告區 -->
  <!-- 這裡是 HTML 語法的 header 頁首引用宣告區 --> 
</head>

<?php 
include "getData.php";
class tabulation extends getData{
    //private(私有成員)：僅在該物件本體可以使用，外部程式或繼承於本物件之子類別無法使用。
    // private $EInvoiceData, $CompanyName, 
    private $sum = 0;

    //建構子    【建立此物件時預設會先自動執行的C函式】 //物件class中，函數名稱為__construct()代表是建構子    
    function __construct($comyanyID){ 
        // 注意：php中，子類別繼承父類別後，父類別的建解構子都不會被執行
        // 子類別要執行父類別的建解構子，就要特別叫用，使用 parent:: 保留字
        parent::__construct($comyanyID);
        // $EInvoiceData、$CompanyName為父類別的protected(保護成員)，可被此子類別使用
    }

    //方法method 1
    function make_table(){
        //表格製作
        echo "<div>";
        echo "<table>";
            echo "<caption>" .$this->CompanyName. "</caption>";  
            echo "<th class="."column1".">西元年</th><th class="."column2".">月份</th><th class="."column3".">發票數量</th>";
        // 如果結果的row數大於0，表示有資料，將資料印出
        if (mysqli_num_rows($this->EInvoiceData) > 0) {  // mysqli_num_rows() 函数返回结果集中行的数量。     
            while ($row = mysqli_fetch_assoc($this->EInvoiceData)) {  //mysqli_fetch_assoc() 函数从结果集中取得一行作为关联数组。
            echo "<tr>";
                    // echo "<td>" . $row["year"] . "</td><td>" . $row["month"] . "</td><td>" . $row["num_of_e-invoice"] . "</td>";
                    echo "<td class="."column1".">" . $row["year"] . "</td><td class="."column2".">" . $row["month"] . "</td><td class="."column3".">" . $row["num_of_e-invoice"] . "</td>";
                    $this->sum = $this->sum + $row["num_of_e-invoice"];
            echo "</tr>";
            }
        }
        echo "<tr>"."<td class="."column1"."></td><td class="."column2"."></td><td class="."column3".">" ."Total = ". $this->sum . "</td>"."</tr>";        
        echo "</table>";
        echo "</div>";
    }
}


/*
echo "測試";
$ID = 49754552;
$tabulation = new tabulation($ID);

$tabulation->make_table();
*/

?>