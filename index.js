// left image
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomDiceImage1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomDiceImage1);


// right image
var randomNumber2=Math.floor((Math.random()*6)+1);
var randomDiceImage2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomDiceImage2);


// winner
if(randomNumber1===randomNumber2) {
document.querySelector("h1").textContent ="🤝🏼Draw b/w Player 1 and Player 2.";
}
else if(randomNumber1>randomNumber2) {
    document.querySelector("h1").textContent ="🚩Player 1 wins the game!";
}
else{
    document.querySelector("h1").textContent ="Player 2 wins the game!🚩";
}