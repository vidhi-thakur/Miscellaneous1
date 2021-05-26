var userName = prompt("Enter your name");

var output1 = document.querySelector(".display-output1");

output1.innerText = "Hi "+ userName +", Let's see if your birth date is a prime number!";

setTimeout(function(){
  var num = prompt("Tell me the date you were born.");

    var output2 = document.querySelector(".display-output2"); 

var count = 0;

for(var i=1; i<num; i++){
  if(num%i == 0){
    count++;
  }
}

if(count == 1){
  output2.innerText = "Your birth date is a prime number!!!"
}
else{
    output2.innerText = "Nope! Definetly not a prime number!"
}
}, 3000);