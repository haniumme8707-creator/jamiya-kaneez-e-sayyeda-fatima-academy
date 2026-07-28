function searchLibrary(){

let input = document.getElementById("searchInput").value.toLowerCase();

let cards = document.querySelectorAll(".library-card");

cards.forEach(function(card){

let text = card.innerText.toLowerCase();

if(text.includes(input)){

card.style.display="block";

}else{

card.style.display="none";

}

});

}
