
let isFound = false;
 function navlist(){
    let navitems = document.getElementById("navitems");
    if(isFound === false){
         navitems.style.display = "flex";
         isFound = true;
    }
    else if(isFound === true ){
        navitems.style.display = "none";
        isFound = false;
    }
    console.log("Event Fired");
   
} 