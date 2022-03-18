function begin(){
    var playerCard = document.getElementById('player-card')
    var rand = Math.floor(Math.random() * 20); 
    playerCard.innerHTML = `<img class="w-100" src="./images/ch${rand}.jpg" alt="">`
}