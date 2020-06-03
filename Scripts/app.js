// IFFE  - Immediately Invoiked Functions Expression 
//Anonymouse self executing function

(function () {
    function Start()
    {
        console.log("App Started....");

        let fristHeading = document.getElementById("fristHeading");
        fristHeading.textContent = "Goodby Crule World!"

        //document.getElementById("fristHeading").textContent="Ya Allah help me!"

        fristHeading.style.fontWeight="bold";

        //getElementsByTagName will return a raay and we will get the frist element of the array
        let main = document.getElementsByTagName("main")[0];
        
        //creating html element 
        //configuring my new element 
        let newH2 = document.createElement("h2");
        newH2.setAttribute("class", "Display-5");
        newH2.textContent = "Alhamdullah We have You"
        //have to atach it (newH2), as a chiled of element 

        main.appendChild(newH2);
    }    

    window.addEventListener("load", Start);
  })();
