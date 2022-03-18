<<<<<<< HEAD
var machineChar = Math.floor(Math.random() * 20); 
do
{
    var rand = Math.floor(Math.random() * 20);
}while(machineChar == rand);
console.log(machineChar, rand);

function begin(){
    var playerCard = document.getElementById('player-card');
    playerCard.innerHTML = `<img class="w-100" src="./images/ch${rand}.jpg" alt="">`;
    document.getElementById('start-btn').disabled="true";
    document.getElementById('start-btn').style="background-color:rgb(117, 163, 117)";
    document.getElementById('ask-btn').style.display="block";
    document.getElementById('guess-btn').style.display="block";
}

function guess(){
    document.getElementById('ask-btn').style.display="none";
    document.getElementById('guess-btn').style.display="none";
    document.getElementById('guess-in').style.display="inline";
    document.getElementById('guess-fun').style.display="inline";
}
function ask(){
    document.getElementById('ask-btn').style.display="none";
    document.getElementById('guess-btn').style.display="none";
    document.getElementById('ask-in').style.display="inline";
    document.getElementById('ask-fun').style.display="inline";
}
=======
function begin(){
    var playerCard = document.getElementById('player-card')
    var rand = Math.floor(Math.random() * 20); 
    playerCard.innerHTML = `<img class="w-100" src="./images/ch${rand}.jpg" alt="">`
}
>>>>>>> 1c787e25acd516b58c96d04b316afe0f63ae81dc
