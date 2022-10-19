/**
 * ! nhập 3 só tự nhiên a,b,c
 * ! so sánh 
 *  a>b  true/false
 * ? a>b  true => b>c true => kết thúc in ra a>b>c;
 * *              b>c false=> a>c true => kết thúc in ra a>c>b
 * *                          a>c false=> kết thúc in ra c>a>b   
 * ?a>b   false=> a>c true => kết thúc in ra b>a>c
 * *              a>c fslse=> c>b true=> kết thúc in ra  c>b>a
 * *                          c>b false => kết thúc in ra b>c>a       
 */

function ascending (params) {
    var num__a = document.getElementById("number__1").value ;
    var num__b = document.getElementById("number__2").value ;
    var num__c = document.getElementById("number__3").value ;
    // console.log(num__a, num__b, num__c );
    if (num__a > num__b ) {

        if (num__b > num__c) {
            console.log(num__a, num__b, num__c);
             document.getElementById("text_bt1").innerHTML=num__a+'>'+num__b+'>'+num__c;
        } else {
            if (num__a > num__c) {
                console.log(num__a, num__c, num__b);
                document.getElementById("text_bt1").innerHTML = num__a +'>'+ num__c +'>'+ num__b ;
            } else {
                console.log(num__c, num__a,num__b );
                document.getElementById("text_bt1").innerHTML = num__c +'>'+ num__a +'>'+ num__b ;
                document.getElementById("text_bt1").innerHTML = num__c +'>'+ num__a +'>'+ num__b ;
            }
        }
    } else {
        if (num__a > num__c) {
            console.log(num__b, num__a, num__c);
            document.getElementById("text_bt1").innerHTML = num__b +'>'+ num__a +'>'+ num__c ;
        } else {
            if (num__c > num__b) {
                console.log(num__c, num__b, num__a);
                document.getElementById("text_bt1").innerHTML= num__c +'>'+ num__b +'>'+ num__a ;
            } else {
                console.log(num__b, num__c, num__a);
                document.getElementById("text_bt1").innerHTML= num__b +'>'+ num__c +'>'+ num__a ;
            }
        }
    }
};

document.getElementById("btn__01").onclick = ascending;

