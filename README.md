# 說明

此為物件導線軟體工程課程的小組作業:查詢電子發票</br>

作業說明：放在 Inquire_E-invoice\\[0]查詢電子發票__作業要求 </br>

# 使用環境
* Window 10
* nginx-1.21.6
* php-8.1.6
* MySQL 8.0

# 使用方法 
### 【僅適用於 本地端localhost】
## 1. 下載
```
法一：使用clone【複製】
$ git clone https://github.com/0623FifiChang/Inquire_E-invoice.git
```
```
法二：下載zip，再解壓縮
```
## 2. 補檔案
檢查是否有`contrib、docs、logs、temp`這幾個資料夾，有的話要`先刪除`，再解壓縮 **[2]【替換檔】nginx-1.21.6.zip**，取出裡面的所有資料(`contrib、docs、logs、temp和nginx.exe`)，移到Inquire_E-invoice資料夾底下
## 3. 修改路徑
打開剛剛載下來的檔案，進到Inquire_E-invoice\php，打開php.ini檔案
搜尋
```ini
extension_dir = "C:\Users\admin\Desktop\Inquire_E-invoice\php\ext"
```
將雙引號中間的路徑，改為自己的 <font color="red">**ext資料夾的絕對路徑**</font>
## 4.php-cgi啟動

1. 開命令提示符(cmd)進入Inquire_E-invoice底下的php資料夾</br>
    ```
    cd  C:\Users\admin\Desktop\Inquire_E-invoice\php
    ```
2. 在此位置執行以下命令，啟動php-cgi</br>
以下兩種指令二擇一，第二種方法的路徑須改為自己的php.ini檔的絕對路徑
    ```
    php-cgi.exe -b 127.0.0.1:9000
    ```
    ```
    php-cgi.exe -b 127.0.0.1:9000 -c C:\Users\admin\Desktop\Inquire_E-invoice\php\php.ini
    ```

## 5.  nginx、php運作確認
* 回到Inquire_E-invoice資料夾底下，點擊執行nginx.exe</br>
使用瀏覽器開啟 http://127.0.0.1/miinv ,畫面如果有顯示神通科技發票專網，表示nginx有成功運作
* 使用瀏覽器開啟 http://127.0.0.1/index.php ，如果有出現PHP Version 8.1.6的內容，表示php也可正常運作
## 6. 添加資料庫</br>
1. 先載好MySQL，MySQL安裝按照此網址去做：
https://clay-atlas.com/blog/2019/11/16/mysql-mysqlworkbench-tutorial-download-install-steps/

2. 在MySQL建置了一個資料庫inquire_e-invoice，並在此資料庫放入所需的data</br>

    1. 將 **Inquire_E-invoice\\[1]Nginx+php+MySQL結合過程**  資料夾內的 **將data放到MySQL的指令.txt** 開啟</br>
    1. Alt+A 複製所有指令，貼到MySQL上，一次執行所有指令，這將會建立置了一個資料庫inquire_e-invoice，並在此資料庫放入所需的data

3. 打開**Inquire_E-invoice\html\php** 資料夾內的**connMySQL.php**，將第五行和第六行的使用者名稱和使用者密碼變更為自己的設置
    ```php
    $username = "root";     //使用者名稱
    $password = "123456";   //使用者密碼
    ```
## 7. 連結MySQL的資料庫確認
使用瀏覽器開啟 http://localhost/php/test.php，如果畫面能正常顯示"正光雕刻工廠"的資料，表示成功連接資料庫

# 本次修改
1. 修改README說明
2. 增加網站內副標題
3. 使表格下端與底部空白處增加
4. 美化網站
5. 增加網站下方連結
</br>
