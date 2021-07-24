var bDate = document.querySelector("#date");
var checkBtn = document.querySelector("#btn");
var outputMsgDiv = document.querySelector("#outputMsg");
var loadingImg = document.querySelector("#loading")
const datesInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
const log = console.log;

function dateHandler(){
    if(date){
        loadingImg.style.display ="block"
        setTimeout(()=>{
            checkPalindrome();
        }, 3000);
    }
    else{
        outputMsgDiv.innerText("Please fill date field.")
    }
}
function checkPalindrome(){
    loadingImg.style.display ="none"
    var bDateArr = bDate.value.split("-");
    var inputYear = bDateArr[0];
    var inputMonth = bDateArr[1];
    var inputDate = bDateArr[2];
    let cheked = checkAllCombi(inputYear,inputMonth,inputDate);

    if(cheked){
        outputMsgDiv.innerHTML="Whoa!!! Your birthdate in format",cheked, "is palindrome"
    }else{
        var [nextdate,diff]=findNextDate(inputYear,inputMonth,inputDate);
        // outputMsgDiv.innerHTML="`Awww! Your birthdate is not palindrome. Nearest palindrome date is "
        // +{nextdate}+ "You missed it by " +{diff}+ " days."
        outputMsgDiv.innerHTML= `Awww! Your birthdate is not palindrome. Nearest palindrome date is ${nextdate} You missed it by ${diff} days.`;
    }
}
function checkAllCombi(yyyy,mm,dd){
    //yyyymmdd
    var dateFormat1 = yyyy+mm+dd;
    // log(dateFormat1);
    //ddmmyyyy 
    var dateFormat2 = dd+mm+yyyy;
    // log(dateFormat2);
     //mmddyy 
     var dateFormat3 = mm+dd+yyyy.substring(2);
    //  log(dateFormat3);
        
     //mddyyyy 
     var dateFormat4 = Number(mm)+dd+yyyy;
    //  log(dateFormat4);
    
     if(isPalindrome(dateFormat1)){
         return (yyyy-mm-dd);
     }else if(isPalindrome(dateFormat2)){
         return(dd-mm-yyyy);
     }else if(isPalindrome(dateFormat3)){
         return(mm-dd-yyyy.substring(2));
     }else if(isPalindrome(dateFormat4)){
         return(Number(mm)-dd-yyyy);
     }else{
         return null;
     }
}
function isPalindrome(combistring){
var mid = parseInt(combistring/2);
for(var i =0;i<mid;i++){
    if(combistring[i]!=combistring[combistring.length-1-i])
    return false;
    }
    return true; 
}
function findNextDate(date,month,year){
    var ddNo1 = Number(date);
    var mmNo1 = Number(month);
    var yyNo1 = Number(year);
    let ddNo2= Number(date);
    let mmNo2= Number(month);
    let yyNo2=Number(year);
    
    for(var i=1;i>0;i++){

        //forward check
        ddNo1=ddNo1+1;
        if(ddNo1>datesInMonth[mmNo1-1]){
            ddNo1=1
            mmNo1=mmNo1+1
            if(mmNo1>12){
                mmNo1=1;
                yyNo1=yyNo1+1;
            }
        }
    var yystring = yyNo1.toString();
    var mmString = mmNo1.toString();
    var ddString = ddNo1.toString();

    if(mmString.length==1){
        mmString="0"+mmString;
    }
    if(ddString.length==1){
        ddString="0"+ddString;
    }
    var dateFound = checkAllCombi(yystring,mmString,ddString)
    if(dateFound){
        return[dateFound,i]
    }

      //backward check
      if(yyNo2>1){
        ddNo2 = ddNo2-1;
        if(ddNo2<1){
            mmNo2 = mmNo2-1;
            if(mmNo2 < 1){
                mmNo2 = 12;
                yyNo2 = yyNo2-1;
                if(yyNo2<1){
                    break;
                }
                ddNo2 = datesInMonth[mmNo2-1];
            }
        }
        let yyString = yyNo2.toString();
        let mmString = mmNo2.toString();
        let ddString = ddNo2.toString();
        if(mmString.length==1){
            mmString="0"+mmString;
        }
        if(ddString.length==1){
            ddString="0"+ddString;
        }
        let dateFound = checkAllCombi(yyString, mmString, ddString);
        if(dateFound){
            return [dateFound, i];
        }
    }

    }
    
}
checkBtn.addEventListener("click",dateHandler)