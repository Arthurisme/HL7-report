

var keyLevel2
var obj_all_list
var returnsubset
var BASE_NAME = "ORU_R01"


function myFunction() {
    keyLevel2 = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = keyLevel2;
}


function writeToDom(title, content) {
    $("#results").html("<div class='header'>" + title + ":</div><div><pre>" + content + "</pre></div>");
}


//using this methed after load the  json file to obj_all_list(in document.ready):
function returnsubsetjson(obj,subsetname) {

    var obj_subset =obj[subsetname]

    subsetforreturn = obj_subset
    return subsetforreturn

}



$(document).ready(function(){
    //  load the  json file to obj_all_list:
    //$.post("json.hl7.json",
        $.post("json_allpage.json",
        function(data){
            var obj=jQuery.parseJSON(data);
            obj_all_list = obj



        });




    $("#parsejason").click(function () {
        keyLevel2 = document.getElementById("myText").value;
        document.getElementById("demo").innerHTML = keyLevel2;





//                    var obj_ORU_R01 =obj[testjsname]
//                    writeToDom('Formatted', JSON.stringify(obj_ORU_R01, null, 4));

//                    var testjsname2 = "MSH"
        var subsetname = keyLevel2

        //add OBX:
        //obj_all_list[BASE_NAME]["ORU_R01.PATIENT_RESULT"][0]["ORU_R01.ORDER_OBSERVATION"][0][ "ORU_R01.OBSERVATION"]

        //var obj_subset =obj_all_list[BASE_NAME][subsetname]

        level1name = "ORU_R01"
        level2name = "ORU_R01.PATIENT_RESULT"
        level3name = 0
        level4name = "ORU_R01.ORDER_OBSERVATION"
        level5name = 0
        level6name = "ORU_R01.OBSERVATION"

        returnsubset1= returnsubsetjson(obj_all_list,level1name)
        returnsubset2= returnsubsetjson(returnsubset1,level2name)
        returnsubset3= returnsubsetjson(returnsubset2,level3name)
        returnsubset4= returnsubsetjson(returnsubset3,level4name)
        returnsubset5= returnsubsetjson(returnsubset4,level5name)
        returnsubset6= returnsubsetjson(returnsubset5,level6name)



        //for all obx in a file:
        //if (keyLevel2 == "OBX")
        //{
        //    var obj_OBX_all_lists =obj_all_list[BASE_NAME]["ORU_R01.PATIENT_RESULT"][0]["ORU_R01.ORDER_OBSERVATION"][0]
        //    returnsubset = obj_OBX_all_lists
        //
        //}
        returnsubset = returnsubset6

        writeToDom('Formatted', JSON.stringify(returnsubset, null, 4));



    });
});
