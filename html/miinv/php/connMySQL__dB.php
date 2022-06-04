<?php
class connnect{
    // public >> 可被外部改變預設值的
    public $servername = "localhost";   //host
    public $username = "root";     //使用者名稱
    public $password = "vIangr56";   //使用者密碼
    public $database = "inquire_e-invoice";        //選擇資料庫
    //私有成員，必須透過一個開放的函式去傳出一個私有成員的值
    // protected(保護成員)：僅外部程式無法叫用，但物件本體及繼承的子類別均可使用。
    protected $link_connMySQL;
    protected $link_connDatabase; 


    //建構子    【建立此物件時預設會先自動執行的C函式】
    function __construct(){ //__construct()此函示名稱為建構子
        //與MySQL連結
        $this->link_connMySQL = new mysqli($this->servername, $this->username, $this->password); 
        // 检测连接
        if ($this->link_connMySQL ->connect_error) {
            return "MySQL连接失败: " . $this->link_connMySQL ->connect_error;    // die()：終止程序
        } 
        echo "MySQL连接成功</br>";

        //選擇要使用的資料庫
        $this->link_connDatabase = mysqli_select_db($this->link_connMySQL, $this->database);   //選擇資料庫
        if(!$this->link_connDatabase){
            return "無法開啟資料庫";
        }
        echo "資料庫".$this->database."已經選擇，可以使用該資料庫了</br>";
    }
    
    /*  【將此類別變成被繼承的父類別，protected(保護成員)$link_connMySQL、$link_connDatabase就可直接被引用】
    //方法method 1
    function get_link_connMySQL(){
        return $this->link_connMySQL;       //私有成員，必須透過一個開放的函式去傳出一個私有成員的值
    }
    //方法method 2
    function get_link_connDatabase(){
        return $this->link_connDatabase;    //私有成員，必須透過一個開放的函式去傳出一個私有成員的值
    }
    */


    //解構子    【將已經用完不需要的物件release掉，會在unset($objectName)後被執行。】
    function __destruct() {             
    }
}

/*
//測試物件connnect
$conn = new connnect();
*/
?>




