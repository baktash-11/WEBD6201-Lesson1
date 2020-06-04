//IIFEE  - Immediately Invoked Function Expression 
//(function () { })(); IIFE example everything goes bettwen {}
(function() {

    function Start()
    {
        function mouseOver(){
            h2.style.fontWeight='bold';
        }

        
        console.log("%cApp Started ... ", "color:blue; font-size: 25px")
        //main()

        //get a reference to the content area
        let contentArea = document.getElementById("contentArea");

        //create h2 element
        let h2 = document.createElement("h2");
        //Add an cclass attribute to h2
        h2.setAttribute("class","dsiplay-6")

        //append the new node to the contentArea 
        contentArea.appendChild(h2);
        h2.textContent="A secondary header"

        //adding anonymos function 
        h2.addEventListener('click', function () 
        {
            h2.style.color=(h2.style.color=="green")? "black" : "green"; //ternary operators
        });
        //functions are object in javascript
        h2.addEventListener('mousemove', mouseOver);
        //lambda/fat arrwo function 
        h2.addEventListener('mouseout', ()=> {
            h2.style.fontWeight='normal'
        })
        
    

    }

   /*  //lambda/fat arrwo function 
    let main = ()=>{
            
    } */

    /* let main = function () {
        console.log("%c|", "color:green; font-size: 30px")
        console.log("%cV", "color:green; font-size: 30px")
        console.log("%cWelcome from let main function", "color:red; font-size: 30px")
    } */

    window.addEventListener('load', Start)    
    })();