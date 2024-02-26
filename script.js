const loginbtn=document.getElementById("login");
loginbtn.addEventListener("click", function(){
   const loginarea=document.getElementById("login-area");
   loginarea.style.display="none";
   const transaction=document.getElementById("transaction-area");
   transaction.style.display="block";
})