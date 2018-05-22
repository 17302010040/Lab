var content=document.getElementById("content");
var content2=document.getElementById("content2");
var commit=document.getElementById("commit");
var table1=document.getElementById("table");
var array1=new Array(3);
var ARRAY=new Array();
function function1() {
    var myselect=document.getElementById("select");
    var index=myselect.selectedIndex;
    content.innerHTML="";
    content2.innerHTML="";
    switch (index) {
        case 0:
            break;
        case 1:
            var tn1 =document.createElement("input") ;
            var tn =document.createElement("input") ;
            tn.setAttribute("type","text");
            tn.setAttribute("placeholder","Table Name");
            tn.setAttribute("id","tn");
            content.appendChild(tn);
            tn1.setAttribute("type","number");
            tn1.setAttribute("placeholder","Columns Numbers");
            tn1.setAttribute("id","tn1");
            content.appendChild(tn1);
            tn1.onchange=function() {
                function3();
            };
            break;
        case 2:
            commit.style.display="inline";
            for(let k =2;k < parseInt(ARRAY[0][1])+2;k++){
                var id = "tn"+k;
                var tn2 =document.createElement("input");
                tn2.setAttribute("type","text");
                tn2.setAttribute("id",id);
                content.appendChild(tn2);
            }
            // var tn2 =document.createElement("input");
            // var tn3 =document.createElement("input");
            // var tn4 =document.createElement("input");
            // tn2.setAttribute("type","text");
            // tn3.setAttribute("type","text");
            // tn4.setAttribute("type","text");
            // tn2.setAttribute("id","tn2");
            // tn3.setAttribute("id","tn3");
            // tn4.setAttribute("id","tn4");
            // content.appendChild(tn2);
            // content.appendChild(tn3);
            // content.appendChild(tn4);
            break;
        case 3:
            commit.style.display="inline";
            for(let k =2;k < parseInt(ARRAY[0][1])+2;k++){
                var id = "tn"+k;
                var tn2 =document.createElement("input");
                tn2.setAttribute("type","text");
                tn2.setAttribute("id",id);
                content.appendChild(tn2);
            }
            break;
        case 4:
            break;
        default:
            break;
    }
    function function3() {
        content2.innerHTML="";
        var num1 = tn1.value;
        if (num1 > 0) {
            for (var i=0;i<num1;i++){
                var tn2 =document.createElement("input") ;
                tn2.setAttribute("type","text");
                tn2.setAttribute("placeholder","Attribute");
                content2.appendChild(tn2);
            }
            commit.style.display="inline";
        }
    }
}
function function2( column,row) {
    var table=document.getElementById("table");
    var tr1=document.createElement("tr");
    table.appendChild(tr1);
    for (let k =1;k <parseInt(column)+1 ;k++){
        var th =document.createElement("th");
        th.innerHTML="Attr"+k;
        tr1.appendChild(th);
    }
    for (let k = 2; k < row + 2; k++) {
        // var TN2=document.getElementById("tn"+k);
        // var tnv2=TN2.value;
        var tr2=document.createElement("tr");
        table.appendChild(tr2);
        for (let k =1;k <parseInt(column)+1 ;k++){
            var td =document.createElement("td");
            td.innerHTML="";
            tr2.appendChild(td);
        }
    }
}
var i=-1;
//记录index==1时commit被点击的次数
var j=0;
function function4() {
    var select2=document.getElementById("nowTable");
    var table=document.getElementById("table");
    var myselect = document.getElementById("select");
    var index = myselect.selectedIndex;
    switch (index) {
        case 1:
            var TN=document.getElementById("tn");
            var TN1=document.getElementById("tn1");
            array1[0]=TN.value;
            array1[1]=TN1.value;
            var tr1=document.createElement("tr");
            table.appendChild(tr1);
            if (!(array1[0] == undefined || array1[0] == "" || array1[1] == undefined || array1[1] == "")) {
                ARRAY.push(array1);
                if (index == 1) {
                    i=i+1;
                }
            }
            if (i < 0) {
            }else {
                var tableName=ARRAY[i][0];
                var column=ARRAY[i][1];
            }
            if (!(tableName == undefined || tableName == "")) {
                var option1=document.createElement("option");
                option1.innerHTML=tableName;
                select2.appendChild(option1);
                option1.selected=true;
            }
            for (let k =1;k <parseInt(column)+1 ;k++){
                var th =document.createElement("th");
                th.innerHTML="Attr"+k;
                tr1.appendChild(th);
            }
            break;
        case 2:
                var x=ARRAY[0][1];
                var tr2=document.createElement("tr");
                table.appendChild(tr2);
                for (let k = 2; k < parseInt(x) + 2; k++) {
                    var TN2=document.getElementById("tn"+k);
                    var tnv2=TN2.value;
                    var td =document.createElement("td");
                    if (tnv2 == undefined || tnv2 == "") {
                        td.innerHTML="Atrr";
                    }else {
                        td.innerHTML=tnv2;
                    }
                    tr2.appendChild(td);
                }
                // var TN2=document.getElementById("tn");
                // var tnv2=TN2.value;
                // var TN3=document.getElementById("tn3");
                // var tnv3=TN3.value;
                // var TN4=document.getElementById("tn4");
            j++;
                ARRAY[0][2]=j+"";
            break;
        case 3:
            var m=parseInt(ARRAY[0][2])-1;
            var n=parseInt(ARRAY[0][1]);
            table1.innerHTML="";
            function2(n,m);
            ARRAY[0][2]=m+"";
        default:
            break;
    }
}
