//login-btn event handler
const loginbtn=document.getElementById("login");
loginbtn.addEventListener("click", function(){
   const loginarea=document.getElementById("login-area");
   loginarea.style.display="none";
   const transaction=document.getElementById("transaction-area");
   transaction.style.display="block";
})
//deposit btn-event-handler
const deposit=document.getElementById("deposit");
deposit.addEventListener("click",function(){
   const depositAmount=document.getElementById("depositAmount").value;
   const depositNumber=parseFloat(depositAmount);
   const currentDeposit=document.getElementById("currentDeposit").innerText;
   const currentDepositNumber=parseFloat(currentDeposit);
   const totalDeposit=depositNumber+currentDepositNumber;
   document.getElementById("currentDeposit").innerText=totalDeposit;
   const mainAmount=document.getElementById("mainAmount").innerText;
   const mainAmountNumber=parseFloat(mainAmount);
   totalBalance=mainAmountNumber+depositNumber;
   document.getElementById("mainAmount").innerText=totalBalance;


})
// withdraw btn-event-handler
const withdraw=document.getElementById("withdraw");
withdraw.addEventListener("click",function(){
   const withdrawAmount=document.getElementById("withdrawAmount").value;
   const withdrawAmountNumber=parseFloat(withdrawAmount);
   const currentWithdraw=document.getElementById("currentWithdraw").innerText;
   document.getElementById("currentwithdraw").innerText=withdrawAmountNumber;
   const currentWithdrawNumber=parseFloat(currentWithdraw);
  
   const mainAmountNumber=mainAmountNumber-withdrawAmountNumber;
   document.getElementById("mainAmount").innerText=mainAmountNumber;

})