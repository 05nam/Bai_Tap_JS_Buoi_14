

function Tinh() {
var numA = document.getElementById("number__3.1").value ;
var numB = document.getElementById("number__3.2").value ;
var numC = document.getElementById("number__3.3").value ;
// console.log(numA,numB,numC)

var soChan = 0;
var soLe = 0;

if (numA%2==0) {
        soChan +=1;
        // console.log("tong so chan la",soChan)
} else {
        soLe +=1;
        // console.log("so le la",soLe);
}



if (numB%2==0) {
        soChan +=1;
        // console.log("so chan la",soChan)
} else {
        soLe +=1;
        // console.log("so le la",soLe);
}




if (numC%2==0) {
        soChan +=1;
        console.log("tong so chan la",soChan)
} else {
}


soLe = 3-soChan;
console.log("tong so le là",soLe);

document.getElementById("text_bt3").innerHTML= 'tổng số chẳn là: '+soChan;
document.getElementById("text_bt3.1").innerHTML= 'tổng số lẽ là: '+soLe;

}




//? onclick
document.getElementById("btn__03").onclick=Tinh;