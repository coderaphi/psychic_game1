

   var wintext =document.getElementById ('windata');
   var losstext =document.getElementById ('lossdata');
   var guesseditems = document.getElementById ('guesseddata')
   var guessesremaining = document.getElementById ('guessesLeft');
   var computerguess = document.getElementById('compguess')
   var usersguess = document.getElementById('guess')
   
   var win= 0;
   var losses= 0;
   var guessesLeft=5;
   var guessed = [];
   var guessedCount= 0;


   document.onkeyup = function () {

    var guess = event.key;
   console.log (guess) ;
  


   var letterz = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'] ;     
   var compguess = letterz [Math.floor(Math.random()*letterz.length)] ;
   console.log (compguess);
 
   for (var i=0 ; i<letterz.length ; i++) {

   if (guess   === compguess [i]) {
   
    win ++;
    


   }

   else if (guess [i]!== compguess [i] ){


    guessed.push(guess);
    guessesLeft--;
    losses ++;
    
    
   }
  

    

    
  
     if (guessesLeft<0){

    win= 0;
    losses= 0;
    guessesLeft=5;
    guessed = [];
   

 

    alert ('Game over')
    
   

}




   wintext.textContent ="wins : " + win;
   losstext.textContent="losses : " + losses;
   guesseditems.textContent=  guessed ;
   guessesremaining.textContent= " Remaining :  " + guessesLeft ;
   computerguess.textContent = " CPU Guessed :  " + compguess;
   usersguess.textContent = " You Guessed :  " + guess;
  
   
} 
   


}




    
    

   





