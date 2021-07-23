var bDate = document.querySelector("#date");
var checkBtn = document.querySelector("#btn");
var outputDiv = document.querySelector("output");
var rem,temp,final = 0;
var rem2,temp2,final2 =0;
var rem3,temp3,final3 = 0;
var rem4,temp4,final4 = 0;
var rem5,temp5,final5 = 0;

function moveInArray(arr,from,to){

    var item = arr.splice(from,1);
    arr.splice(to,0,item[0])
}
function clicked(){
    var dateArr = bDate.value.split("-");
//yyyymmdd    
    var yyyymmdd = dateArr.join("");
    temp=yyyymmdd;
    while(yyyymmdd>0){
        rem = yyyymmdd%10;
        yyyymmdd = parseInt(yyyymmdd/10);
        final = final*10 + rem;
    }
    if(final==temp){
        console.log("yyyymmdd:yup")
    }
//ddmmyyyy
    moveInArray(dateArr,2,0);
    moveInArray(dateArr,2,1);
    var ddmmyyyy=dateArr.join("");
    temp2=ddmmyyyy;
    while(ddmmyyyy>0){
        rem2 = ddmmyyyy%10;
        ddmmyyyy = parseInt(ddmmyyyy/10);
        final2 = final2*10 + rem2;
    }
    // console.log("ddmmyyyy "+final)
    if(final2==temp2 && final!=temp){
        console.log("ddmmyyyy:yup")
    }
//mmddyy
    moveInArray(dateArr,1,0)
    var mmddyyyy=dateArr.join("")
    temp3 = mmddyyyy;
    while(mmddyyyy>0){
        rem3 = mmddyyyy%10;
        mmddyyyy = parseInt(mmddyyyy/10);
        final3 = final3*10 + rem3;
    }
    if(final3==temp3 && final2!=temp2 && final!=temp){
        console.log("mmddyyyy:yup")
    }
   
    //ddmmyy
    moveInArray(dateArr,1,0)
    var yy=  dateArr[2].split("");
    yy.splice(0,1)
    yy.splice(0,1)
   var yyyy= dateArr.splice(2,1)
    var ddmmyyArr = dateArr.concat(yy)
    var ddmmyy = ddmmyyArr.join("");
    temp4 = ddmmyy;
    // console.log(ddmmyy)
    while(ddmmyy>0){
        rem4 = ddmmyy%10;
        ddmmyy = parseInt(ddmmyy/10);
        final4 = final4*10 + rem4;
    }
    if(final4==temp4&&final3!=temp3 && final2!=temp2 && final!=temp){
        console.log("ddmmyy:yup")
    }
    //mddyy
    var whole = dateArr.concat(yyyy) 
    moveInArray(whole,1,0)//mmddyyyy
    var m = whole[0].split("")
    m.splice(0,1);
    whole.splice(0,1);
    var mddyyyyArr = whole.concat(m)//ddyyyym
    moveInArray(mddyyyyArr,2,0)
    var mddyyyy = mddyyyyArr.join("")
    
    temp5=mddyyyy
    while(mddyyyy>0){
        rem5 = mddyyyy%10;
        mddyyyy = parseInt(mddyyyy/10);
        final5 = final5*10 + rem5;
    }
    if(final5==temp5&&final4!=temp4&&final3!=temp3 && final2!=temp2 && final!=temp){
        console.log("mddyyyy:yup")
    }
    
    //final no
    if(final!=temp&&final2!=temp2&&final3!=temp3&&final4!=temp4&&final5!=temp5){
        console.log("nope")
    }

 clear()
}

checkBtn.addEventListener("click",clicked)
function clear(){
     bDate.value=null;
     rem2,temp2,final2 =0;
     rem3,temp3,final3 = 0;
     rem4,temp4,final4 = 0;
     rem5,temp5,final5 = 0;
}