const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector(".error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,50,20,10,5,1];

checkButton.addEventListener("click",function(){
    
    clearError();
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            const amountToBeReturned = (cashGiven.value - billAmount.value);
            calculateChange(amountToBeReturned);
        }else{
            showMessage("Invalid cash given");
        }

    }else{
        showMessage("Bill Amount should be greater than 0")
    }
});

function calculateChange(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;
    }
}
function clearError(){
    message.style.display="none";
}
function showMessage(msg){
    message.style.display = "block";
    message.innerText= msg;
}