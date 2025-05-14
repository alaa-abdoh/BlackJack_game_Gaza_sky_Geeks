let player={
    name: "Alaa",
    selectedChips: 500
}

let cards= [];
let sum=0;
let hasBlackJack= false;
let isAlive= false;
let msg="";
let messageEle= document.getElementById("messageEle");
let cardsEle= document.getElementById("cards");
let sumEle= document.getElementById("sum");
let playerEle= document.getElementById("player")

playerEle.innerHTML=`${player.name} : $${player.selectedChips}`;

function getRandomCard(){
    let randomNumber= Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10)
        return 10
    else if(randomNumber === 1)
        return 11
    else return randomNumber
}

function startGame(){
    isAlive= true;
    let firstCard= getRandomCard();
    let secondCard= getRandomCard();
    cards=[firstCard, secondCard];
    sum= firstCard + secondCard;
}