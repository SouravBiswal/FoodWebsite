// PANIGRAHI MF 🤑🤑🤑

document.querySelector(".dropDown").addEventListener("click", function(){
    console.log("CLICKED");
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
});

