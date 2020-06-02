// IFFE  - Immediately Invoiked Functions Expression 
//Anonymouse self executing function

(function () {
    function Start()
    {
        console.log("App Started....");
    }    
    window.addEventListener("load", Start);
  })();