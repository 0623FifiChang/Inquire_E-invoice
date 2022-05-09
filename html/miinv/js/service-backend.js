$(function() {
    //● ■ □
    var data;
    var ldata;
    var str = window.location.search;
    var taxid;
    if (str.indexOf(name) != -1) {
        var pos_start = str.indexOf(name) + name.length + 1;
        var pos_end = str.indexOf("&", pos_start);
        if (pos_end == -1) {
            taxid = str.substring(pos_start);
        } else {}
    }
    
    //back
	$.ajax({
		url:"http://localhost:8080/Test/miinv/backend?method=get("+taxid+")"
	}).done(function(respoonse){
		$("#contractid").text(respoonse[0]["contractID"])
		$("#dealerid").text(respoonse[0]["dealerID"])
		$("#orderid").text(respoonse[0]["orderID"])
		$("#customerid").text(respoonse[0]["customerID"])
		
		$("#completeddate").text(twdate(respoonse[0]["completedDate"]))
		$("#startdate").text(twdate(respoonse[0]["startDate"]))
		$("#creator").text(respoonse[0]["creator"])
		$("#dealdate").text(twdate(respoonse[0]["dealDate"]))

	})
	
	//front
    $.ajax({
        url: "http://localhost:8080/Test/miinv/frontend?method=get(TaxID:" + taxid + ")",
    }).done(function(response) {

        ldata = "{" + (response[0].content).replace(/"!"/g, "\",\"") + "}"
        ldata = JSON.parse(ldata);
        console.log(ldata)
        $("#step0-taxid").text(response[0]["taxID"])
        if(ldata["c_type"]=="B2B"){
        	$("#step0-type").text("■")	
        }else if(ldata["c_type"]=="B2C"){
        	$("#step0-type2").text("■")	
        }else{
        	$("#step0-type").text("■")
        	$("#step0-type2").text("■")	
        }
        
        $("#step0-fullname").text(response[0]["corpName"])	 	
        $("#step0-group").text(ldata["c_group"])	
        $("#step0-group2").text(ldata["c_group2"])	
        $("#step0-address").text(ldata["c_address"])	
        $("#step0-address2").text(ldata["c_address2"])	
        $("#step0-taxnumber").text(ldata["c_taxnumber"])	

        $("#step0-m-name").text(ldata["manager_name"])	
        $("#step0-m-phone").text(ldata["manager_phone"])
        $("#step0-m-cellphone").text(ldata["manager_cellphone"])
        $("#step0-m-email").text(ldata["manager_email"])
        $("#step0-m-fax").text(ldata["manager_fax"])
        $("#step0-s-name").text(ldata["mis_name"])
        $("#step0-s-phone").text(ldata["mis_phone"])
        $("#step0-s-fax").text(ldata["mis_fax"])
        $("#step0-s-cellphone").text(ldata["mis_cellphone"])
        $("#step0-s-email").text(ldata["mis_email"])
        $("#step0-a-name").text(ldata["c_taxnumber"])
        $("#step0-a-phone").text(ldata["c_taxnumber"])
        $("#step0-a-fax").text(ldata["c_taxnumber"])
        $("#step0-a-cellphone").text(ldata["c_taxnumber"])
        $("#step0-a-email").text(ldata["c_taxnumber"])
        $("#s-2").text(ldata["service_thermal_paper"])
        $("#s-3").text(ldata["service_qrcode_scanner"])
        $("#s-1").text(ldata["service_thermal_printer"])
        $("#s-1-count").text(Number(ldata["service_thermal_printer"])*9800)
        $("#s-2-count").text(Number(ldata["service_thermal_paper"])*1500)
        $("#s-3-count").text(Number(ldata["service_qrcode_scanner"])*6800)
        $("#service_customer_fee").text(Number(ldata["service_customer_fee"]))
        $("#service_total_month").text(Number(ldata["service_total_month"]))
        $("#service-time").text("自" + twdate(response[0]["startTime"]) + "至" + twdate(response[0]["endTime"]))


        $("#step2-0-1").text(ldata.c_group)
        $("#step2-0-2").text(ldata.c_group2)

        if (ldata["step-2-1"] == "一般稅額計算") {
            $("#step2-1-1").text("■")
            $("#step-2-3").text(ldata["step-2-3"])

            if (ldata["step-2-2"] == "首次申請") {
                $("#step2-2-1").text("●")
            } else if (ldata["step-2-2"] == "增加") {
                $("#step2-2-2").text("●")
            } else if (ldata["step-2-2"] == "減少") {
                $("#step2-2-3").text("●")
            } else if (ldata["step-2-2"] == "停止使用") {
                $("#step2-2-4").text("●")
            }

        } else if (ldata["step-2-1"] == "特種稅額計算") {
            $("#step-s2-3").text(ldata["step-2-3"])
            $("#step2-1-2").text("■")

            if (ldata["step-2-2"] == "首次申請") {
                $("#step2-s2-1").text("●")
            } else if (ldata["step-2-2"] == "增加") {
                $("#step2-s2-2").text("●")
            } else if (ldata["step-2-2"] == "減少") {
                $("#step2-s2-3").text("●")
            } else if (ldata["step-2-2"] == "停止使用") {
                $("#step2-s2-4").text("●")
            }
        }

        if (ldata["step-2-4"] == "年配") {
            $("#step-2-4-1").text("■")
        } else {
            $("#step-2-4-2").text("■")
        }

        if (ldata["step-2-5"] == "無工商憑證僅接收或查詢電子發票配") {
            $("#step2-5-check").text("■")
            $("#step2-5-2").text("●")

        } else if (ldata["step-2-5"] == "無工商憑證但需取用電子發票字軌號碼") {
            $("#step2-5-check").text("■")
            $("#step2-5-1").text("●")

        }
        if (ldata["step-2-6"] == "true") {
            $("#step2-6").text("■")
        }
        $("#step2-rf1").text(response[0]["corpName"])
        $("#step2-rf3").text(ldata["c_taxnumber"])
        $("#step2-rf2").text(response[0]["taxID"])
        $("#step2-rf4").text(ldata["c_address"])
        $("#step2-rf5").text(ldata["manager_name"])
        $("#step2-rf6").text(ldata["accounting_name"])
        $("#step2-rf7").text(ldata["mis_cellphone"])
        $("#step2-rf8").text(ldata["accounting_phone"])
        $("#step2-rf9").text(ldata["accounting_fax"])
        $("#step2-rf10").text(ldata["c_address"])
        $("#step2-rf11").text(ldata["accounting_email"])

        $("#step2-rf12").text(ldata["step-2-7"])
        $("#step2-rf13").text(response[0]["taxID"])
        $("#step2-rf15").text(ldata["accounting_phone"])
        $("#step2-rf14").text(ldata["accounting_name"])

        $("#step3-1").text(ldata["c_group"])
        $("#step3-2").text(ldata["c_group2"])
        $("#step3-3").text(response[0]["taxID"])

        $("#step4-1").text(ldata["c_group"])
        $("#step4-2").text(ldata["c_group2"])
        $("#step4-3").text(response[0]["corpName"])
        $("#step4-4").text(response[0]["taxID"])
        $("#step4-5").text(ldata["manager_name"])

        $("#step6-1").text(response[0]["corpName"])
        $("#step6-2").text(response[0]["taxID"])
        $("#step6-3").text(ldata["manager_name"])

        $("#step7-1-1").text(ldata["accounting_phone"])
        $("#step7-1-2").text(response[0]["taxID"])
        $("#step7-1-3").text(ldata["accounting_phone"])
        $("#step7-1-4").text(response[0]["corpName"])
        $("#step7-1-5").text(ldata["accounting_email"])

        $("#step7-1").text(ldata["step7-title"])
        $("#step7-2").text(ldata["step7-name"])
        $("#date1").text("自" + twdate(ldata["step-ap1"]) + "至" + twdate(ldata["step-ap4"]))
        $("#date2").text("自" + twdate(ldata["step-ap2"]) + "至" + twdate(ldata["step-ap5"]))
        $("#date3").text(twdate(ldata["step-ap3"]))
        $("#date4").text(ldata["nowtime"])
        $("#date5").text(ldata["nowtime"])
        $("#date6").text(ldata["nowtime"])
        $("#date7").text(ldata["nowtime"])
        $("#date7").text("自" + twdate(ldata["step-ap1"]) + "至" + twdate(ldata["step-ap4"]))

//        window.print();
    })
})

function twdate(date) {
//    console.log(date)
    var d = new Date(date);
//    console.log(d)
    var datestring = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    var newdate = datestring.split('/');
    //取得民國年
    var year = newdate[0] - 1911;
    //取得月份
    var month = newdate[1];
    //取得日期
    var date = newdate[2];
    return "中華民國" + year + "年" + month + "月" + date + "日"
}