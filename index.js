var dateInput=document.querySelector(".date-input");
var inputNumber=document.querySelector(".input-number");
var checkResult=document.querySelector(".check-result");
var result=document.querySelector(".result");

checkResult.addEventListener("click",answer);

function answer(){

    var number=inputNumber.value;
    var dob=dateInput.value;

    dob=dob.replaceAll("-","");

    console.log(number)
    console.log(dob)

    var sum=0;


   for(let digit of dob){
       console.log(digit)
       sum=sum+Number(digit)
   }
   console.log(sum)

   if(sum%number==0){


       result.innerText="Yeah your nummber is lucky!!"
   }

   else{
       result.innerText="Sorry!! Your Number is Not Lucky"
   }

    


    



}




