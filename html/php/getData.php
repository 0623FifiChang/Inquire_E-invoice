<!-- 若要用此物件，需先include 'connMySQL__dB.php';  以取得資料庫連結 -->
<!-- 若要用此物件，需先include 'connMySQL__dB.php';  以取得資料庫連結 -->

<?php
class getData{
    // public(開放成員)：不論在物件本體，或是外部程式，都可以使接使用。
    // protected(保護成員)：僅外部程式無法叫用，但物件本體及繼承的子類別均可使用。
    //private(私有成員)：僅在該物件本體可以使用，外部程式或繼承於本物件之子類別無法使用。
    private $sql_EInvoiceData, $sql_CompanyName;
    private $EInvoiceData, $CompanyName;

    //建構子    【建立此物件時預設會先自動執行的C函式】 //物件class中，函數名稱為__construct()代表是建構子    
    function __construct($comyanyID){     
        echo "<h1>物件getData ->開啟MySQL的連線</h1>";
        $this->connDatabase = new connnect();   // 連線MySQL的並選擇資料庫
        $this->connMySQL_link = $this->connDatabase ->get_link_connMySQL() ;        //取得連線MySQL的link
        // $this->connDatabase_link = $this->connDatabase ->get_link_connDatabase() ;  //取得已被選擇的資料庫的link
        
        //取出公司名的sql語法        //【變數引用方法：     '".$sql_1."'】
        $this->sql_CompanyName = "SELECT DISTINCT `company_name`	
                                    FROM `data_of_e-invoice`
                                    WHERE `company_compilation` =  '".$comyanyID."'  " ; 
                                    // WHERE `company_compilation` =      49754552     " ; 
        $this->result = mysqli_query($this->connMySQL_link, $this->sql_CompanyName);    //取出符合的資料【公司名】
        $this->CompanyName = mysqli_fetch_assoc($this->result)["company_name"];       //取出符合的資料中"不重複"的資料

        //取出發票數量相關資料的語法
        $this->sql_EInvoiceData = "SELECT `year` ,`month` , `num_of_e-invoice` 
                                    FROM `data_of_e-invoice` 
                                    WHERE `company_compilation` =   '".$comyanyID."'   " ;
        $this->EInvoiceData = mysqli_query($this->connMySQL_link, $this->sql_EInvoiceData);  //取出發票數量相關資料                   
                
        //資料取得完畢，關閉資料庫
        mysqli_close($this->connMySQL_link);
        echo "<h1>物件getData ->關閉MySQL的連線</h1>";
        
    }

    //方法method 1
    function getCompanyName(){
        return $this ->CompanyName;   
    }
    //方法method 2
    function getEInvoiceData(){
        return $this->EInvoiceData;
    }

}

/* 
//測試物件getData
$getData = new getData(49754552);
$CompanyName = $getData->getCompanyName();
$EInvoiceData = $getData->getEInvoiceData();
//表格製作
echo "<table>";
echo "<tr>" .$CompanyName. "</tr>";  //!!!???該如何取出公司名?!!!!????!!!
echo "<td>西元年</td><td>月份</td><td>發票數量</td>";
// 如果結果的row數大於0，表示有資料，將資料印出
if (mysqli_num_rows($EInvoiceData) > 0) {          
while ($row = mysqli_fetch_assoc($EInvoiceData)) {
echo "<tr>";
        // echo "<td>公司名:" . $row["company_name"] . "</td><td>月份:" . $row["month"] . "</td><td>數量:" . $row["num_of_e-invoice"] . "</td>";
        echo "<td>" . $row["year"] . "</td><td>" . $row["month"] . "</td><td>" . $row["num_of_e-invoice"] . "</td>";
echo "</tr>";
}
}
echo "</table>";
*/
?>