	var DBURL = "/miinv_jdbc/miinv"
	//alert(DBURL)
	if (location.hostname == "localhost") {
		DBURL = "http://" + location.hostname + ":8080/miinv_jdbc/miinv"
	}
	$(function () {

		var manager_name;
		$("#step-2").hide()
		$("#step-3").hide()
		$("#step-4").hide()
		$("#step-5").hide()
		$("#step-6").hide()
		$("#step-7").hide()

		service_change();

		$("select").focus(function () {
			$(this).removeClass("is-invalid")
		})
		//解除紅框
		$("input").focus(function () {
			$(this).removeClass("is-invalid")
		})

		//總金額
		$(document).on('click', '[name="che-cke"]', function () {
			//        console.log("Hi")
			alert("Hi")
			//        console.log($('input[type=radio][name=e_cke]').val())
		})

		$("#add-1c").change(function () {
			$("#add-1").text(Number($("#add-1c").val()) * 9800);
			$("#total-count").val(Number($("#add-3").text()) + Number($("#add-2").text()) + Number($("#add-1").text()) + Number($("#service_customer_fee").val()) + Number($('input[name=che-cke]:checked').val()))
		})
		$("#add-2c").change(function () {
			$("#add-2").text(Number($("#add-2c").val()) * 1500);
			$("#total-count").val(Number($("#add-3").text()) + Number($("#add-2").text()) + Number($("#add-1").text()) + Number($("#service_customer_fee").val()) + Number($('input[name=che-cke]:checked').val()))
		})
		$("#add-3c").change(function () {
			$("#add-3").text(Number($("#add-3c").val()) * 6800);
			$("#total-count").val(Number($("#add-3").text()) + Number($("#add-2").text()) + Number($("#add-1").text()) + Number($("#service_customer_fee").val()) + Number($('input[name=che-cke]:checked').val()))
		})
		$("#service_customer_fee").change(function () {
			$("#total-count").val(Number($("#add-3").text()) + Number($("#add-2").text()) + Number($("#add-1").text()) + Number($("#service_customer_fee").val()) + Number($('input[name=che-cke]:checked').val()))

		})
		$('input[type=radio][name=address-eq-address]').change(function () {
			if (this.value == '1') {
				$("#address-eq-address-ans").hide();

				$("#address-eq-address-ans").val("?????");
			} else if (this.value == '2') {
				$("#address-eq-address-ans").hide();

				$("#address-eq-address-ans").val("?????");
			} else if (this.value == '3') {
				$("#address-eq-address-ans").val("");
				$("#address-eq-address-ans").show();
			}
		});
		$('input[type=radio][name=receiver-eq-receiver]').change(function () {
			if (this.value == '1') {
				$("#receiver-eq-receiver-ans").hide();
				$("#receiver-eq-receiver-ans").val($("#mis_name").val());
			} else if (this.value == '2') {
				$("#receiver-eq-receiver-ans").hide();
				$("#receiver-eq-receiver-ans").val($("#accounting_name").val());
			} else if (this.value == '3') {
				$("#receiver-eq-receiver-ans").val("");
				$("#receiver-eq-receiver-ans").show();
			}
		});

		$('input[type=radio][name=phonenum-eq-phonenum]').change(function () {
			if (this.value == '1') {
				$("#phonenum-eq-phonenum-ans").hide();
				$("#phonenum-eq-phonenum-ans").val($("#mis_phone").val());
			} else if (this.value == '2') {
				$("#phonenum-eq-phonenum-ans").hide();
				$("#phonenum-eq-phonenum-ans").val($("#accounting_phone").val());
			} else if (this.value == '3') {
				$("#phonenum-eq-phonenum-ans").val("");
				$("#phonenum-eq-phonenum-ans").show();
			}
		});
		//步驟一

		$("#c_type2").change(function () {
			if ($("#c_type2").prop("checked")) {
				$("#is_pos").prop("checked", true)
				$("#is_pos").attr("disabled", true);
			} else {
				$("#is_pos").prop("checked", false)
				$("#is_pos").attr("disabled", false);

			}

		})

		$("#submit").click(function () {
			$("input").removeClass("is-invalid")
			var check = 0;

			//判斷地址空白
			if ($(".city").val() != "" && $(".town").val() != "" && $("#address").val() != "") {
				$("#c_address").val($(".city").val() + $(".town").val() + $("#address").val())
				check++
			} else {
				$(".city").addClass("is-invalid")
				$(".town").addClass("is-invalid")
				$("#address").addClass("is-invalid")

			}

			if ($(".city2").val() != "" && $(".town2").val() != "" && $("#address2").val() != "") {
				$("#c_address2").val($(".city2").val() + $(".town2").val() + $("#address2").val())
				check++
			} else {
				$(".city2").addClass("is-invalid")
				$(".town2").addClass("is-invalid")
				$("#address2").addClass("is-invalid")
			}

			if ($("#c_taxid").val() == "") {
				$("#c_taxid").addClass("is-invalid")
			} else {
				check++
			}
			//公司稅籍編號
			if ($("#c_taxnumber").val() == "") {
				$("#c_taxnumber").addClass("is-invalid")
			} else {
				check++
			}
			//公司中文全名
			if ($("#c_fullname").val() == "") {
				$("#c_fullname").addClass("is-invalid")
			} else {
				check++
			}
			//所屬國稅局
			if ($("#c_group").val() == "") {
				$("#c_group").addClass("is-invalid")
			} else {
				check++
			}
			//分局/稽徵所
			if ($("#c_group2").val() == "") {
				$("#c_group2").addClass("is-invalid")
			} else {
				check++
			}

			//公司負責人姓名
			if ($("#manager_name").val() == "") {
				$("#manager_name").addClass("is-invalid")
			} else {
				check++
			}
			//公司負責人電話/分機
			//    	if($("#manager_phone").val()==""){
			//    		$("#manager_phone").addClass("is-invalid")
			//    	}else{check++}
			//公司負責人傳真
			//    	if($("#manager_fax").val()==""){
			//    		$("#manager_fax").addClass("is-invalid")
			//    	}else{check++}
			//公司負責人手機
			//    	if($("#manager_cellphone").val()==""){
			//    		$("#manager_cellphone").addClass("is-invalid")
			//    	}else{check++}
			//公司負責人電子郵件帳號
			//    	if($("#manager_email").val()==""){
			//    		$("#manager_email").addClass("is-invalid")
			//    	}else{check++}
			//系統管理員姓名
			if ($("#mis_name").val() == "") {
				$("#mis_name").addClass("is-invalid")
			} else {
				check++
			}
			//系統管理員電話/分機
			if ($("#mis_phone").val() == "") {
				$("#mis_phone").addClass("is-invalid")
			} else {
				check++
			}
			//系統管理員傳真
			//    	if($("#mis_fax").val()==""){
			//    		$("#mis_fax").addClass("is-invalid")
			//    	}else{check++}
			//系統管理員手機
			//    	if($("#mis_cellphone").val()==""){
			//    		$("#mis_cellphone").addClass("is-invalid")
			//    	}else{check++}
			//系統管理員電子郵件帳號
			if ($("#mis_email").val() == "") {
				$("#mis_email").addClass("is-invalid")
			} else {
				check++
			}
			//財會部門聯絡人姓名
			if ($("#accounting_name").val() == "") {
				$("#accounting_name").addClass("is-invalid")
			} else {
				check++
			}
			//財會部門聯絡人電話/分機
			if ($("#accounting_phone").val() == "") {
				$("#accounting_phone").addClass("is-invalid")
			} else {
				check++
			}
			//財會部門聯絡人傳真
			//    	if($("#accounting_fax").val()==""){
			//    		$("#accounting_fax").addClass("is-invalid")
			//    	}else{check++}
			//財會部門聯絡人電子郵件帳號
			if ($("#accounting_email").val() == "") {
				$("#accounting_email").addClass("is-invalid")
			} else {
				check++
			}
			//step-1 
			if ($("#datepicker1").val() == "") {
				$("#datepicker1").addClass("is-invalid")
			} else {
				check++
			}
			if ($("#datepicker2").val() == "") {
				$("#datepicker2").addClass("is-invalid")
			} else {
				check++
			}
			if ($("#service_total_month").val() == "") {
				$("#service_total_month").addClass("is-invalid")
			} else {
				check++
			}

			//b2b or b2c
			var cbxVehicle = new Array();
			$('input:checkbox:checked[name="c_type"]').each(function (i) {
				cbxVehicle[i] = this.value;
			});

			$('input:checkbox[name="c_type"]').click(function () {
				$("#error-c-type").hide()

			})

			if (cbxVehicle[0] == undefined) {
				$("#error-c-type").show()
			} else {
				check++
			}

			if (check == 18) {
				$(".progressbar li:nth-child(2)").addClass("active")

				$('html, body').scrollTop(0);
				p2_showdata();

				if (cbxVehicle[0] == "B2B" && cbxVehicle[1] == "B2C") {
					b2c_check();
				} else if (cbxVehicle[0] == "B2B") {
					b2b_check();
				} else if (cbxVehicle[0] == "B2C") {
					b2c_check();
				}

				$("#step-1").hide()
				$("#step-2").show()
			} else {
				$('html, body').scrollTop(0);

			}
		})

		$("#next2").click(function () {
			var step2_check = 0;
			if ($("#step2-3").val() == "") {
				$("#step2-3").addClass("is-invalid")
			} else {
				step2_check++
			}

			//    	console.log($( "#p2_select3 option:selected" ).text())
			if ($("#p2_select3").val() == 0) {
				$("#p2_select3").addClass("is-invalid")
			} else {
				step2_check++
			}
			//        if($("#e-platform").prop( "checked" )==true){console.log("pro is true")}

			if (step2_check == 2) {
				$(".progressbar li:nth-child(3)").addClass("active")
				p3_showdata();
				$("#step-2").hide()
				$("#step-3").show()
				$('html, body').scrollTop(0)
			} else {
				$('html, body').scrollTop(0);
			}
		})
		$("#back2").click(function () {
			$(".progressbar li:nth-child(2)").removeClass("active")

			$("#step-2").hide()
			$("#step-1").show()
			$('html, body').scrollTop(0);
		})
		$("#next3").click(function () {
			$(".progressbar li:nth-child(4)").addClass("active")
			p4_showdata()
			$("#step-3").hide()
			$("#step-4").show()
			$('html, body').scrollTop(0);
		})
		$("#back3").click(function () {
			$(".progressbar li:nth-child(3)").removeClass("active")

			$("#step-3").hide()
			$("#step-2").show()
			$('html, body').scrollTop(0);
		})
		$("#next4").click(function () {
			$(".progressbar li:nth-child(5)").addClass("active")
			p5_showdata();
			$("#step-4").hide()
			$("#step-5").show()
			$('html, body').scrollTop(0);
		})
		$("#back4").click(function () {
			$(".progressbar li:nth-child(4)").removeClass("active")

			$("#step-4").hide()
			$("#step-3").show()
			$('html, body').scrollTop(0);
		})
		$("#next5").click(function () {
			$(".progressbar li:nth-child(6)").addClass("active")

			$("#step-5").hide()
			$("#step-6").show()
			p6_showdata()
			$('html, body').scrollTop(0);
		})
		$("#back5").click(function () {
			$(".progressbar li:nth-child(5)").removeClass("active")
			$("#step-5").hide()
			$("#step-4").show()
			$('html, body').scrollTop(0);
		})
		$("#next6").click(function () {
			$(".progressbar li:nth-child(7)").addClass("active")
			$("#step-6").hide()
			$("#step-7").show()
			p7_showdata()
			$('html, body').scrollTop(0);
		})
		$("#back6").click(function () {
			$(".progressbar li:nth-child(6)").removeClass("active")

			$("#step-6").hide()
			$("#step-5").show()
			$('html, body').scrollTop(0);
		})

		$("#next7").click(function () {
			if (document.getElementById('test1').checked) {
				$("#error-c-type1").hide();
				postdata();
			} else {

				$("#error-c-type1").show();

			}
		})

		//2018-11-07增加日期判斷
		// $("#service_total_month").change(function () {
		// 	var $input = $(this);

		// 	if ($("#datepicker1").val() != "") {

		// 		var str1 = $("#datepicker1").val();
		// 		var year = str1.substr(0, 4);
		// 		var month = str1.substr(5, 2);
		// 		var day = str1.substr(8, 2);


		// 		var addm = $("#service_total_month").val();


		// 		var y = Math.floor((parseInt(addm) + parseInt(month)) / 12);

		// 		var m = ((parseInt(addm) + parseInt(month)) % 12);
		// 		if (m == 0) {
		// 			m = 12;
		// 			y = y - 1;
		// 		}
		// 		var Fy = 0;
		// 		var Fm = 0;
		// 		Fy = parseInt(year) + y;
		// 		Fm = m;
		// 		if (Fm == 2 && day > 28) {
		// 			day = 28;
		// 		} else if ((Fm == 4 || Fm == 6 || Fm == 9 || Fm == 11)) {
		// 			if (day > 30) {
		// 				day = 30;
		// 			}
		// 		}
		// 		if (Fm < 10) {
		// 			Fm = "0" + Fm;
		// 		}
		// 		var date2 = Fy + "-" + Fm + "-" + day;
		// 		$("#datepicker2").val(date2)
		// 	} else {
		// 		$("#service_total_month").val("");
		// 	}
		// }).change();


		$("#get_misdata").change(function () {
			var $input = $(this);
			if ($input.prop("checked") == true) {
				$("#accounting_name").val($("#mis_name").val())
				$("#accounting_phone").val($("#mis_phone").val())
				$("#accounting_fax").val($("#mis_fax").val())
				$("#accounting_email").val($("#mis_email").val())
			}
			if ($input.prop("checked") == false) {
				$("#accounting_name").val("")
				$("#accounting_phone").val("")
				$("#accounting_fax").val("")
				$("#accounting_email").val("")
			}
		}).change();

		$("#e-platform").change(function () {
			var $input = $(this);
			if ($input.prop("checked") == true) {
				//            console.log(true)
				$("#e-platform2").show()
			}
			if ($input.prop("checked") == false) {
				$("#e-platform2").hide()
			}
		}).change();

	})

	function noFue(obj) {
		obj.value = obj.value.replace(/\D/g, '')
	}

	function service_change() {
		$("#total-count").val(Number($("#add-3").text()) + Number($("#add-2").text()) + Number($("#add-1").text()) + Number($("#service_customer_fee").val()) + Number($('input[name=che-cke]:checked').val()))


	}

	function b2b_check() {
		$("#p2-b-1").show();
		$("#p2-c1").prop('checked', true);
		$("#p2-c2").prop('checked', true);
		$("#p2-c3").prop('checked', true);
		$("#p2-c4").prop('checked', true);
		$("#p2-c6").prop('checked', true);
		$("#p2-c8").prop('checked', true);
		$("#p2-c15").prop('checked', true);

	}

	function b2c_check() {
		$("#b2-c-1").show();
		$("#b2-c-2").show();
		$("#b2-c-3").show();
		$("#p2-c-7").show();
		$("#p2-c1").prop('checked', true);
		$("#p2-c2").prop('checked', true);
		$("#p2-c3").prop('checked', true);
		$("#p2-c4").prop('checked', true);
		$("#p2-c6").prop('checked', true);
		$("#p2-c8").prop('checked', true);
		$("#p2-c9").prop('checked', true);
		$("#p2-c10").prop('checked', true);
		$("#p2-c11").prop('checked', true);
		$("#p2-c12").prop('checked', true);
		$("#p2-c15").prop('checked', true);

	}

	function p2_showdata() {
		$("#p2-group").val($("#c_group").val())
		$("#p2-group2").val($("#c_group2").val())
		$("#p2_c_accounting_email").val($("#accounting_email").val())
		$("#p2_c_address2").val($("#c_address2").val())
		$("#p2_c_accounting_fax").val($("#accounting_fax").val())
		$("#p2_c_accounting_phone").val($("#accounting_phone").val())
		$("#p2_c_accounting_name").val($("#accounting_name").val())
		$("#p2_c_manager_name").val($("#manager_name").val())
		$("#p2_c_address3").val($("#c_address2").val())
		$("#p2_c_taxnumber").val($("#c_taxnumber").val())
		$("#p2_c_taxid").val($("#c_taxid").val())
		$("#p2_c_fullname").val($("#c_fullname").val())

	}

	function p3_showdata() {
		$("#p3_group").val($("#c_group").val())
		$("#p3_group2").val($("#c_group2").val())
		$("#p3_c_taxid").val($("#c_taxid").val())
		$("#p3_c_fullname").val($("#c_fullname").val())
		$("#p3_c_manager_name").val($("#manager_name").val())
		var p3date = newdate();
		$(".getdate").text(p3date)

	}

	function p4_showdata() {
		$("#p4_c_group").val($("#c_group").val())
		$("#p4_c_group2").val($("#c_group2").val())
		$("#p4_c_taxid").val($("#c_taxid").val())
		$("#p4_c_fullname").val($("#c_fullname").val())
		$("#p4_c_manager_name").val($("#manager_name").val())


	}

	function p5_showdata() {
		$("#p5_c_fullname").val($("#c_fullname").val())
		$("#p5_c_taxnumber").val($("#c_taxnumber").val())
		$("#p5_c_taxid").val($("#c_taxid").val())
		$("#p5_c_manager_name").val($("#manager_name").val())
		$("#p5_c_accounting_name").val($("#accounting_name").val())
		$("#p5_c_accounting_phone").val($("#accounting_phone").val())
		$("#p5_c_accounting_email").val($("#accounting_email").val())

	}

	function p6_showdata() {
		$("#sdate").text($("#datepicker1").val())
		$("#edate").text($("#datepicker2").val())
		$("#p6_c_fullname").text("營業人名稱：" + $("#c_fullname").val())
		$("#p6_c_taxid").text("統一編號：" + $("#c_taxid").val())
		$("#p6_c_manager-name").text("負 責 人：" + $("#manager_name").val())
	}

	function p7_showdata() {
		$("#p7_c_taxid").val($("#c_taxid").val())
		$("#p7_c_accounting_name").val($("#accounting_name").val())
		$("#p7_c_fullname").val($("#c_fullname").val())
		$("#p7_c_accounting_phone").val($("#accounting_phone").val())
		$("#p7_c_accounting_email").val($("#accounting_email").val())



	}

	function newdate() {
		var d = new Date();
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

	function st_fd() {
		return (/[\d.]/.test(String.fromCharCode(event.keyCode)))
	}

	function postdata() {
		var data;
		var contents;
		var cbxVehicle = new Array();
		$('input:checkbox:checked[name="c_type"]').each(function (i) {
			cbxVehicle[i] = this.value;
		});
		cbxVehicle = String(cbxVehicle).replace(/,/g, "!")
		contents = '\"c_type\"' + ":" + "\"" + cbxVehicle + "\""
		contents += "!"
		contents += '\"c_taxnumber\"' + ":" + "\"" + $("#c_taxnumber").val() + "\""
		contents += "!"
		contents += '\"c_group\"' + ":" + "\"" + $("#c_group").val() + "\""
		contents += "!"
		contents += '\"c_group2\"' + ":" + "\"" + $("#c_group2").val() + "\""
		contents += "!"
		contents += '\"c_address\"' + ":" + "\"" + $("#c_address").val() + "\""
		contents += "!"
		contents += '\"c_address2\"' + ":" + "\"" + $("#c_address2").val() + "\""
		contents += "!"
		contents += '\"manager_name\"' + ":" + "\"" + $("#manager_name").val() + "\""
		contents += "!"
		contents += '\"manager_phone\"' + ":" + "\"" + $("#manager_phone").val() + "\""
		contents += "!"
		contents += '\"manager_fax\"' + ":" + "\"" + $("#manager_fax").val() + "\""
		contents += "!"
		contents += '\"manager_cellphone\"' + ":" + "\"" + $("#manager_cellphone").val() + "\""
		contents += "!"
		contents += '\"manager_email\"' + ":" + "\"" + $("#manager_email").val() + "\""
		contents += "!"
		contents += '\"mis_name\"' + ":" + "\"" + $("#mis_name").val() + "\""
		contents += "!"
		contents += '\"mis_phone\"' + ":" + "\"" + $("#mis_phone").val() + "\""
		contents += "!"
		contents += '\"mis_fax\"' + ":" + "\"" + $("#mis_fax").val() + "\""
		contents += "!"
		contents += '\"mis_cellphone\"' + ":" + "\"" + $("#mis_cellphone").val() + "\""
		contents += "!"
		contents += '\"mis_email\"' + ":" + "\"" + $("#mis_email").val() + "\""
		contents += "!"
		contents += '\"accounting_name\"' + ":" + "\"" + $("#accounting_name").val() + "\""
		contents += "!"
		contents += '\"accounting_phone\"' + ":" + "\"" + $("#accounting_phone").val() + "\""
		contents += "!"
		contents += '\"accounting_fax\"' + ":" + "\"" + $("#accounting_fax").val() + "\""
		contents += "!"
		contents += '\"accounting_email\"' + ":" + "\"" + $("#accounting_email").val() + "\""

		//service type
		contents += "!"
		contents += '\"service_thermal_printer\"' + ":" + "\"" + $("#add-1c").val() + "\""
		contents += "!"
		contents += '\"service_thermal_paper\"' + ":" + "\"" + $("#add-2c").val() + "\""
		contents += "!"
		contents += '\"service_qrcode_scanner\"' + ":" + "\"" + $("#add-3c").val() + "\""
		contents += "!"
		contents += '\"service_address\"' + ":" + "\"" + $("address-eq-address-ans").val() + "\""
		contents += "!"
		contents += '\"service_address2\"' + ":" + "\"" + $("#receiver-eq-receiver-ans").val() + "\""
		contents += "!"
		contents += '\"service_phone\"' + ":" + "\"" + $("#phonenum-eq-phonenum-ans").val() + "\""
		contents += "!"
		contents += '\"service_customer_fee\"' + ":" + "\"" + $("#service_customer_fee").val() + "\""
		contents += "!"
		contents += '\"service_total_cost\"' + ":" + "\"" + $("#total-count").val() + "\""
		contents += "!"
		contents += '\"service_total_month\"' + ":" + "\"" + $("#service_total_month").val() + "\""
		contents += "!"
		contents += '\"service_type\"' + ":" + "\"" + Number($('input[name=che-cke]:checked').val()) + "\""


		//step2
		var step_2_5 = null;
		if ($("#e-platform").prop("checked") == true) {
			step_2_5 = $("#p2_select5 option:selected").text()
		}

		contents += "!"
		contents += '\"step-2-1\"' + ":" + "\"" + $("#p2_select1 option:selected").text() + "\""
		contents += "!"
		contents += '\"step-2-2\"' + ":" + "\"" + $("#p2_select2 option:selected").text() + "\""
		contents += "!"
		contents += '\"step-2-3\"' + ":" + "\"" + $("#step2-3").val() + "\""
		contents += "!"
		contents += '\"step-2-4\"' + ":" + "\"" + $("#p2_select3 option:selected").text() + "\""
		contents += "!"
		contents += '\"step-2-5\"' + ":" + "\"" + step_2_5 + "\""
		contents += "!"
		contents += '\"step-2-6\"' + ":" + "\"" + $("#step2-6").prop("checked") + "\""
		contents += "!"
		contents += '\"step-2-7\"' + ":" + "\"" + $("#step2-office-name").val() + "\""
		contents += "!"
		contents += '\"step-2-8\"' + ":" + "\"" + $("#step2-office-taxid").val() + "\""
		contents += "!"
		contents += '\"step-ac3\"' + ":" + "\"" + $("#step2-ct-name").val() + "\""
		contents += "!"
		contents += '\"step-ac4\"' + ":" + "\"" + $("#step2-ct-phone").val() + "\""
		contents += "!"
		contents += '\"step-ap1\"' + ":" + "\"" + $("#datepicker3").val() + "\""
		contents += "!"
		contents += '\"step-ap2\"' + ":" + "\"" + $("#datepicker4").val() + "\""
		contents += "!"
		contents += '\"step-ap3\"' + ":" + "\"" + $("#datepicker5").val() + "\""
		contents += "!"
		contents += '\"step-ap4\"' + ":" + "\"" + $("#datepicker6").val() + "\""
		contents += "!"
		contents += '\"step-ap5\"' + ":" + "\"" + $("#datepicker7").val() + "\""

		//step5
		contents += "!"
		contents += '\"step5-1-taxid\"' + ":" + "\"" + $("#step5-1-taxid").val() + "\""
		contents += "!"
		contents += '\"step5-1-name\"' + ":" + "\"" + $("#step5-1-name").val() + "\""
		contents += "!"
		contents += '\"step5-1-city\"' + ":" + "\"" + $("#step5-1-city").val() + "\""
		contents += "!"
		contents += '\"step5-1-taxnumber\"' + ":" + "\"" + $("#step5-1-taxnumber").val() + "\""
		contents += "!"
		contents += '\"step5-1-ncount\"' + ":" + "\"" + $("#step5-1-ncoun").val() + "\""
		contents += "!"
		contents += '\"step5-1-scount\"' + ":" + "\"" + $("#step5-1-scount").val() + "\""
		contents += "!"
		contents += '\"step5-2-taxid\"' + ":" + "\"" + $("#step5-2-taxid").val() + "\""
		contents += "!"
		contents += '\"step5-2-name\"' + ":" + "\"" + $("#step5-2-name").val() + "\""
		contents += "!"
		contents += '\"step5-2-city\"' + ":" + "\"" + $("#step5-2-city").val() + "\""
		contents += "!"
		contents += '\"step5-2-taxnumber\"' + ":" + "\"" + $("#step5-2-taxnumber").val() + "\""
		contents += "!"
		contents += '\"step5-2-ncount\"' + ":" + "\"" + $("#step5-2-ncount").val() + "\""
		contents += "!"
		contents += '\"step5-2-scount\"' + ":" + "\"" + $("#step5-2-scount").val() + "\""
		contents += "!"
		contents += '\"step5-3-taxid\"' + ":" + "\"" + $("#step5-3-taxid").val() + "\""
		contents += "!"
		contents += '\"step5-3-name\"' + ":" + "\"" + $("#step5-3-name").val() + "\""
		contents += "!"
		contents += '\"step5-3-city\"' + ":" + "\"" + $("#step5-3-city").val() + "\""
		contents += "!"
		contents += '\"step5-3-taxnumber\"' + ":" + "\"" + $("#step5-3-taxnumber").val() + "\""
		contents += "!"
		contents += '\"step5-3-ncount\"' + ":" + "\"" + $("#step5-3-ncount").val() + "\""
		contents += "!"
		contents += '\"step5-3-scount\"' + ":" + "\"" + $("#step5-3-scount").val() + "\""
		contents += "!"
		contents += '\"step5-total-ncount\"' + ":" + "\"" + $("#step5-total-ncount").val() + "\""
		contents += "!"
		contents += '\"step5-total-scount\"' + ":" + "\"" + $("#step5-total-scount").val() + "\""
		//step7
		contents += "!"
		contents += '\"step7-title\"' + ":" + "\"" + $("#step7-inspector-title").val() + "\""
		contents += "!"
		contents += '\"step7-name\"' + ":" + "\"" + $("#step7-inspector-name").val() + "\""
		contents += "!"
		contents += '\"nowtime\"' + ":" + "\"" + newdate() + "\""
		contents += "!"
		contents += '\"step7-0\"' + ":" + "\"" + $("#step7-0").val() + "\""


		data = "" + $("#c_taxid").val() + "," + $("#c_fullname").val() + "," + $("#datepicker1").val() + "," + $("#datepicker2").val() + "," + contents + ""
		$.ajax({
			url: DBURL + "/frontend?method=create(" + data + ")",
			contentType: "charset=utf-8",
			method: "POST"
		}).done(function () {})
		document.location.href = "./11.1_successpage.html";

	}