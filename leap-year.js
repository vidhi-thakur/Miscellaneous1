setTimeout(function(){
    var userName = prompt("Enter your name");
  
  var output1 = document.querySelector(".display-output1");
  
  output1.innerText = "Hi "+ userName +", Let's see if your birth date is a prime number!";
  }, 2000);
  
  setTimeout(function(){
    var num=0;
    num = prompt("Tell me the year you were born.");
  
    var output2 = document.querySelector(".display-output2"); 
  
    if(num%4 == 0){
        if(num%100 == 0){
          if(num%400 == 0){
            output2.innerText = "Yupp. You were born in a leap year.";
          }
          else{
            output2.innerText = "Nope! Not a leap year.";
        }
        }
        else{
            output2.innerText = "Yupp. You were born in a leap year.";
        }
      }
      else{
        output2.innerText = "Nope! Not a leap year.";
      }
  }, 3000);