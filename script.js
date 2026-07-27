document.addEventListener("DOMContentLoaded", function(){

    const button = document.querySelector("button");

    if(button){
        button.addEventListener("click", function(){
            alert("Welcome to Light of Madina Academy 🌙\nAdmission details ke liye contact karein.");
        });
    }


    // Smooth scroll effect
    const links = document.querySelectorAll("a");

    links.forEach(link=>{
        link.addEventListener("click", function(){
            this.style.opacity = "0.7";
        });
    });

});
