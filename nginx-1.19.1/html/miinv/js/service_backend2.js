$(function() {
    var ldata;
    var str = window.location.search;
    var taxid;
    if (str.indexOf(name) != -1) {
        var pos_start = str.indexOf(name) + name.length + 1;
        var pos_end = str.indexOf("&", pos_start);
        if (pos_end == -1) {
            taxid = str.substring(pos_start);
            console.log(taxid)
        } else {}
    }


    $.ajax({
        url: "http://localhost:8080/Test/miinv/frontend?method=get(TaxID:" + taxid + ")",
    }).done(function(response) {
        ldata = "{" + (response[0].content).replace(/"!"/g, "\",\"") + "}"
        console.log(ldata)
        ldata = JSON.parse(ldata);

        $("#t1-contactemail").text(ldata["accounting_email"])
        $("#t1-contactphone").text(ldata["accounting_phone"])
        $("#t1-contactname").text(ldata["accounting_name"])
        $("#t1-managername").text(ldata["manager_name"])
        $("#t1-taxid").text(response[0]["taxID"])
        $("#t1-companyname").text(response[0]["corpName"])
        $("#t1-taxnumber").text(ldata["c_taxnumber"])

        $("#step5-1-taxid").text(ldata["step5-1-taxid"])
        $("#step5-1-name").text(ldata["step5-1-name"])
        $("#step5-1-city").text(ldata["step5-1-city"])
        $("#step5-1-taxnumber").text(ldata["step5-1-taxnumber"])
        if (ldata["step5-1-ncount"] != "undefined") {
            $("#step5-1-ncount").text(ldata["step5-1-ncount"])
        } else {
            $("#step5-1-ncount").text("0")
        }
        if (ldata["step5-1-scount"] != "undefined") {
            $("#step5-1-scount").text(ldata["step5-1-scount"])
        } else {
            $("#step5-1-scount").text("0")
        }

        $("#step5-2-taxid").text(ldata["step5-2-taxid"])
        $("#step5-2-name").text(ldata["step5-2-name"])
        $("#step5-2-city").text(ldata["step5-2-city"])
        $("#step5-2-taxnumber").text(ldata["step5-2-taxnumber"])
        if (ldata["step5-2-ncount"] != "undefined") {
            $("#step5-2-ncount").text(ldata["step5-2-ncount"])
        } else {
            $("#step5-2-ncount").text("0")
        }
        if (ldata["step5-2-scount"] != "undefined") {
            $("#step5-2-scount").text(ldata["step5-2-scount"])
        } else {
            $("#step5-2-scount").text("0")
        }

        $("#step5-3-taxid").text(ldata["step5-3-taxid"])
        $("#step5-3-name").text(ldata["step5-3-name"])
        $("#step5-3-city").text(ldata["step5-3-city"])
        $("#step5-3-taxnumber").text(ldata["step5-3-taxnumber"])
        if (ldata["step5-3-ncount"] != "undefined") {
            $("#step5-3-ncount").text(ldata["step5-3-ncount"])
        } else {
            $("#step5-3-ncount").text("0")
        }
        if (ldata["step5-3-scount"] != "undefined") {
            $("#step5-3-scount").text(ldata["step5-3-scount"])
        } else {
            $("#step5-3-scount").text("0")
        }

        $("#step5-total-ncount").text(ldata["step5-total-ncount"])
        $("#step5-total-scount").text(ldata["step5-total-scount"])
    })
})