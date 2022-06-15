<!-- public(開放成員)：不論在物件本體，或是外部程式，都可以使接使用。
    protected(保護成員)：僅外部程式無法叫用，但物件本體及繼承的子類別均可使用。
    private(私有成員)：僅在該物件本體可以使用，外部程式或繼承於本物件之子類別無法使用。 -->

<?php
include 'connMySQL__dB.php';
class getData extends connnect{

    protected $EInvoiceData;
    protected $CompanyName;
    public $ID_notFond = 0;

    //建構子    【建立此物件時預設會先自動執行的C函式】 //物件class中，函數名稱為__construct()代表是建構子    
    function __construct($comyanyID){     
        // echo "<h1>物件getData ->開啟MySQL的連線</h1>";
        
        // 注意：php中，子類別繼承父類別後，父類別的建解構子都不會被執行
        // 子類別要執行父類別的建解構子，就要特別叫用，使用 parent:: 保留字
        parent::__construct();  //呼叫執行父類別的建構子    
        // link_connMySQL為父類別的protected(保護成員)，可被此子類別使用
  
        //取出公司名的sql語法        //【變數引用方法：     '".$sql_1."'】
        $sql_CompanyName = "SELECT DISTINCT `company_name`	
                                    FROM `data_of_e-invoice`
                                    WHERE `company_compilation` =  '".$comyanyID."'  " ; //  DISTINCT ：從資料庫取出符合的資料中"不重複"的資料
        $result = mysqli_query($this->link_connMySQL, $sql_CompanyName);    //取出符合的資料【公司名】，【應只有一個符合】
        if (mysqli_num_rows($result) == 0){
            // echo "此ID不存在";            
            mysqli_close($this->link_connMySQL);//關閉資料庫
            // echo "<h1>物件getData ->關閉MySQL的連線</h1>";
            $this->ID_notFond = 1;
            return;
        }
        $this->CompanyName = mysqli_fetch_assoc($result)["company_name"];       // 取出第一列的資料【因為本來酒只有一個，取出這唯一一列】

        // if

        //取出發票數量相關資料的語法
        $sql_EInvoiceData = "SELECT `year` ,`month` , `num_of_e-invoice` 
                                    FROM `data_of_e-invoice` 
                                    WHERE `company_compilation` =   '".$comyanyID."'   " ;
        $this->EInvoiceData = mysqli_query($this->link_connMySQL, $sql_EInvoiceData);  //從資料庫取出發票數量相關資料【指定公司的：年、月、發票數量】                   
                
        //資料取得完畢，關閉資料庫
        mysqli_close($this->link_connMySQL);
        // echo "<h1>物件getData ->關閉MySQL的連線</h1>";
        
    }

    /*
    //  【將此類別變成被繼承的父類別，protected(保護成員)$CompanyName、$EInvoiceData就可直接被引用】
    // 為了使非繼承此getData的子類別(外部程式)也可使用CompanyName、EInvoiceData，添加以下兩個method
    //方法method 1
    function getCompanyName(){
        return $this ->CompanyName;   
    }
    //方法method 2
    function getEInvoiceData(){
        return $this->EInvoiceData;
    }
    */
    

}

/* 
//測試物件getData【需將method 1、method 2解註解】
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
class getAllCompanyID extends connnect{
    
    protected $AllCompanyID = array();
    
    //建構子    【建立此物件時預設會先自動執行的C函式】 //物件class中，函數名稱為__construct()代表是建構子    
    function __construct(){     
         echo "<h1>物件getData ->開啟MySQL的連線</h1>";        
        // 注意：php中，子類別繼承父類別後，父類別的建解構子都不會被執行
        // 子類別要執行父類別的建解構子，就要特別叫用，使用 parent:: 保留字
        parent::__construct();  //呼叫執行父類別的建構子    
        // link_connMySQL為父類別的protected(保護成員)，可被此子類別使用

        //取出所有公司的sql語法  
        $sql_AllCompanyID = "SELECT DISTINCT `company_compilation`	
                            FROM `data_of_e-invoice`";
        $AllID = mysqli_query($this->link_connMySQL, $sql_AllCompanyID);

        
        //資料取得完畢，關閉資料庫
        mysqli_close($this->link_connMySQL);
         echo "<h1>物件getData ->關閉MySQL的連線</h1>";   
        //將取得的資料轉存到>AllCompanyID陣列中儲存   
        $i = 0;
        if (mysqli_num_rows($AllID) > 0) {  // mysqli_num_rows() 函数返回结果集中行的数量。     
            while ($row = mysqli_fetch_assoc($AllID)) {  //mysqli_fetch_assoc() 函数从结果集中取得一行作为关联数组。
                $this->AllCompanyID[$i++] = $row["company_compilation"];
            }
        }
    }

    
    // 當此類別變成被繼承的父類別，protected(保護成員)$AllCompanyID可直接被引用
    // 為了使非getAllCompanyID的子類別(外部程式)也可使用AllCompanyID，可添加以下method
    //方法method 1
    function getAllID(){
        return $this->AllCompanyID;
    }
    
}


/*
//測試物件getAllCompanyID
$getAllCompanyID = new getAllCompanyID();
$AllCompanyID = $getAllCompanyID->getAllID();
echo ">>".$AllCompanyID[0]."</br>";
echo ">>".$AllCompanyID[1]."</br>";
echo ">>".$AllCompanyID[2]."</br>";
echo ">>".$AllCompanyID[3]."</br>";
*/
?>