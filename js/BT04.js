

function timTamGiac () {
    var a = document.getElementById("number__1.4").value ;
    var b = document.getElementById("number__2.4").value ;
    var c = document.getElementById("number__3.4").value ;
    // console.log(a,b,c)
    var A = Number(a);
    var B = Number(b);
    var C = Number(c);
    // console.log(A,B,C )

    if ((A-C)<B && B< (A+C) ) {
        console.log("day la tam giac")
       
        if (A==B & B==C) {
            console.log("TAM GIAC DIEU")
            document.getElementById("text_bt4").innerHTML="TAM GIAC DIEU "
        }
        if ((A=B)!=(A=C)!=(B=C)) {
            console.log("TAM GIAC CAN")
            document.getElementById("text_bt4").innerHTML="TAM GIAC CAN "
        }
        if( (A*A+B*B==C*C)!=(A*A+C*C==B*B)!=(B*B+C*C==A*A)){
            console.log("TAM GIAC VUONG")
            document.getElementById("text_bt4").innerHTML="TAM GIAC VUONG "

        }
        





    }else{
     console.log("khong phai tam giac")
     alert (" khai bao khong hop le - vui long nhap lai");
        
    }
    
}


document.getElementById("btn__04").onclick=timTamGiac;