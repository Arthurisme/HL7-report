

var keyname1
var obj_all_list
var objtoshow
var BASE_NAME = "ORU_R01"

function myFunction() {
    keyname1 = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = keyname1;
}


function writeToDom(title, content) {
    $("#results").html("<div class='header'>" + title + ":</div><div><pre>" + content + "</pre></div>");
}


$(document).ready(function(){
    $.post("json.hl7.json",
        function(data){
            var obj=jQuery.parseJSON(data);
            obj_all_list = obj

//                    $("#results2").html( JSON.stringify(obj,null,4) );


//All page:
//                    writeToDom('Formatted', JSON.stringify(obj, null, 4));


//                    writeToDom('Formatted', JSON.stringify(objtoshow, null, 4));


//
//                    var obj_ORU_R01_MSH_1 =obj.ORU_R01.MSH["MSH.1"]
//                    writeToDom('Formatted', JSON.stringify(obj_ORU_R01_MSH_1, null, 4));

//                    var obj_ORU_R01_ORU_R01_PATIENT_RESULT =obj.ORU_R01["ORU_R01.PATIENT_RESULT"][0]
//                    writeToDom('Formatted', JSON.stringify(obj_ORU_R01_ORU_R01_PATIENT_RESULT, null, 4));

//                    var obj_ORU_R01_PATIENT =obj.ORU_R01["ORU_R01.PATIENT_RESULT"][0]["ORU_R01.PATIENT"]
//                    writeToDom('Formatted', JSON.stringify(obj_ORU_R01_PATIENT, null, 4));

//                    var obj_ORU_R01_PATIENT_OBSERVATION =obj.ORU_R01["ORU_R01.PATIENT_RESULT"][0]["ORU_R01.ORDER_OBSERVATION"]
//                    writeToDom('Formatted', JSON.stringify(obj_ORU_R01_PATIENT_OBSERVATION, null, 4));


//                    for(var i=0;i<obj.length;i++){
//                        $("#results").append("Linux ID: "+obj[i].LinuxID).hide().fadeIn(500);
//                        $("#results").append("<br>Linux Distribution: "+obj[i].LinuxDist).hide().fadeIn(500);
//                        $("#results").append("<br>Company: "+obj[i].Company).hide().fadeIn(500);
//                        $("#results").append("<br><hr>").hide().fadeIn(500);
//                    }
        });


    $("#parsejason").click(function () {
        keyname1 = document.getElementById("myText").value;
        document.getElementById("demo").innerHTML = keyname1;





//                    var obj_ORU_R01 =obj[testjsname]
//                    writeToDom('Formatted', JSON.stringify(obj_ORU_R01, null, 4));

//                    var testjsname2 = "MSH"
        var testjsname2 = keyname1


        var obj_ORU_R01_MSH =obj_all_list[BASE_NAME][testjsname2]

        objtoshow = obj_ORU_R01_MSH

        writeToDom('Formatted', JSON.stringify(objtoshow, null, 4));



    });
});
