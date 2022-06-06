<!-- public(開放成員)：不論在物件本體，或是外部程式，都可以使接使用。
    protected(保護成員)：僅外部程式無法叫用，但物件本體及繼承的子類別均可使用。
    private(私有成員)：僅在該物件本體可以使用，外部程式或繼承於本物件之子類別無法使用。 -->

<?php
include 'connMySQL__dB.php';
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
