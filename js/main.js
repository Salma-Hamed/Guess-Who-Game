var flip = [];
var flip2 = [];
window.onload = function(){
    flipCards();
}
var machineChar = Math.floor(Math.random() * 20); 
var rand;
var machineTurn = 0;

function flipCards(){
    var x = '';
    var y = '';
    var z = '';
    var w = '';
    for (var i = 0; i < 5;  i++)
    {
        if(flip.includes(i))
        {
            x += `<div class="col-md-2 col-sm-4">
                <div class="card">
                    <div class="item">
                        <img class="w-100" src="./images/hidden.jpg" alt="">
                    </div>
                </div>
            </div>`;
        }
        else{
            x += `<div class="col-md-2 col-sm-4">
                <div class="card">
                    <div class="item">
                        <img class="w-100" src="./images/ch${i}.jpg" alt="">
                    </div>
                </div>
            </div>`;
        }
    }
    document.getElementById('row1').innerHTML = x;
    for (var i = 5; i < 10;  i++)
    {
        if(flip.includes(i))
        {
            y += `<div class="col-md-2 col-sm-4">
                <div class="card">
                    <div class="item">
                        <img class="w-100" src="./images/hidden.jpg" alt="">
                    </div>
                </div>
            </div>`;
        }
        else{
            y += `<div class="col-md-2 col-sm-4">
                <div class="card">
                    <div class="item">
                        <img class="w-100" src="./images/ch${i}.jpg" alt="">
                    </div>
                </div>
            </div>`;
        }
        
    }
    document.getElementById('row2').innerHTML = y;
    for (var i = 10; i < 15;  i++)
    {
        if(flip.includes(i))
        {
            z += `<div class="col-md-2 col-sm-4">
                <div class="card">
                    <div class="item">
                        <img class="w-100" src="./images/hidden.jpg" alt="">
                    </div>
                </div>
            </div>`;
        }
        else{
            z += `<div class="col-md-2 col-sm-4">
                <div class="card">
                    <div class="item">
                        <img class="w-100" src="./images/ch${i}.jpg" alt="">
                    </div>
                </div>
            </div>`;
        }
    }
    document.getElementById('row3').innerHTML = z;
    for (var i = 15; i < 20;  i++)
    {
        if(flip.includes(i))
        {
            w += `<div class="col-md-2 col-sm-4">
                <div class="card">
                    <div class="item">
                        <img class="w-100" src="./images/hidden.jpg" alt="">
                    </div>
                </div>
            </div>`;
        }
        else{
            w += `<div class="col-md-2 col-sm-4">
                <div class="card">
                    <div class="item">
                        <img class="w-100" src="./images/ch${i}.jpg" alt="">
                    </div>
                </div>
            </div>`;
        }
    }
    document.getElementById('row4').innerHTML = w;
}
var characters = [{name: "lucas", hair:"brown", eyes:"brown", nose:"small", mustatche:true, beard:false, smiling:false, glasses:false, darkSkin:true, male:true, cap:false},
                  {name: "anne", hair:"white", eyes:"blue", nose:"small", mustatche:false, beard:false, smiling:false, glasses:true, darkSkin:false, male:false, cap:false},
                  {name: "joe", hair:"yellow", eyes:"blue", nose:"small", mustatche:false, beard:false, smiling:true, glasses:false, darkSkin:false, male:true, cap:false},
                  {name: "bernard", hair:"brown", eyes:"brown", nose:"big", mustatche:false, beard:false, smiling:false, glasses:false, darkSkin:true, male:true, cap:true},
                  {name: "stephen", hair:"brown", eyes:"brown", nose:"small", mustatche:true, beard:false, smiling:false, glasses:false, darkSkin:false, male:true, cap:false},
                  {name: "paul", hair:"white", eyes:"brown", nose:"small", mustatche:false, beard:true, smiling:false, glasses:false, darkSkin:false, male:true, cap:false},
                  {name: "sophie", hair:"black", eyes:"brown", nose:"small", mustatche:false, beard:false, smiling:false, glasses:true, darkSkin:true, male:false, cap:false},
                  {name: "max", hair:"black", eyes:"brown", nose:"small", mustatche:false, beard:true, smiling:true, glasses:false, darkSkin:true, male:true, cap:false},
                  {name: "charles", hair:"orange", eyes:"blue", nose:"small", mustatche:false, beard:false, smiling:false, glasses:true, darkSkin:false, male:true, cap:false},
                  {name: "katrin", hair:"brown", eyes:"brown", nose:"small", mustatche:false, beard:false, smiling:false, glasses:false, darkSkin:false, male:false, cap:true},
                  {name: "maria", hair:"orange", eyes:"brown", nose:"small", mustatche:false, beard:false, smiling:true, glasses:false, darkSkin:false, male:false, cap:true},
                  {name: "eric", hair:"yellow", eyes:"brown", nose:"small", mustatche:false, beard:false, smiling:true, glasses:false, darkSkin:false, male:true, cap:true},
                  {name: "philippe", hair:"bald", eyes:"brown", nose:"small", mustatche:true, beard:true, smiling:false, glasses:false, darkSkin:false, male:true, cap:false},
                  {name: "theo", hair:"black", eyes:"brown", nose:"big", mustatche:false, beard:false, smiling:true, glasses:false, darkSkin:false, male:true, cap:false},
                  {name: "vector", hair:"white", eyes:"brown", nose:"big", mustatche:true, beard:false, smiling:false, glasses:false, darkSkin:false, male:true, cap:false},
                  {name: "daniel", hair:"brown", eyes:"blue", nose:"small", mustatche:false, beard:false, smiling:false, glasses:true, darkSkin:false, male:true, cap:false},
                  {name: "anita", hair:"yellow", eyes:"blue", nose:"small", mustatche:false, beard:false, smiling:false, glasses:false, darkSkin:false, male:false, cap:false},
                  {name: "hans", hair:"yellow", eyes:"brown", nose:"small", mustatche:true, beard:false, smiling:true, glasses:false, darkSkin:false, male:true, cap:false} ,
                  {name: "roger", hair:"bald", eyes:"brown", nose:"small", mustatche:false, beard:true, smiling:false, glasses:false, darkSkin:true, male:true, cap:false},
                  {name: "frank", hair:"black", eyes:"brown", nose:"big", mustatche:false, beard:false, smiling:false, glasses:false, darkSkin:false, male:true, cap:true}
                ]


var questions = ["Is the character a male?",
                 "Does the character wear glasses?",
                 "Does the character wear a cap?",
                 "Are the character's eyes blue?",
                 "Does the character have a mustatche?",
                 "Does the character have a beard?",
                 "Does the character have a big nose?",
                 "Is the character smiling?",
                 "Is the character bald?",
                 "Does the character have a dark skin?",
                 "Is the character's hair yellow?",
                 "Is the character's hair brown?",
                 "Is the character's hair white?"
                ]
var qNum = Math.floor(Math.random() * 13);

var machineGuessChar = []; 
do
{
    rand = Math.floor(Math.random() * 20);
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
function playerTurn(k){
    document.getElementById('ask-btn').style.display="block";
    document.getElementById('guess-btn').style.display="block";
    document.getElementById('mach-question').style.display="none";
    document.getElementById('yes').style.display="none";
    document.getElementById('no').style.display="none";
    if(questions[qNum].includes('male'))
    {
        if(k)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].male)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
        else{
            
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].male)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
    }
    else if(questions[qNum].includes('glasses'))
    {
        if(k)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].glasses)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
        else{
            
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].glasses)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
    }
    else if(questions[qNum].includes('cap'))
    {
        if(k)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].cap)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
        else{
            
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].cap)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
    }
    else if(questions[qNum].includes('mustatche'))
    {
        if(k)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].mustatche)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
        else{
            
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].mustatche)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
    }
    else if(questions[qNum].includes('beard'))
    {
        if(k)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].beard)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
        else{
            
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].beard)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
    }
    else if(questions[qNum].includes('smiling'))
    {
        if(k)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].smiling)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
        else{
            
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].smiling)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
    }
    else if(questions[qNum].includes('bald'))
    {
        if(k)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].bald)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
        else{
            
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].bald)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
    }
    else if(questions[qNum].includes('dark skin'))
    {
        if(k)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].darkSkin)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
        else{
            
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].darkSkin)
                {
                    if(!flip2.includes(i))
                    flip2.push(i);

                }
            }
        }
    }
    else if(questions[qNum].includes('eyes'))
    {
        if(questions[qNum].includes('blue'))
        {
            if(k)
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].eyes != 'blue')
                    {
                        if(!flip2.includes(i))
                        flip2.push(i);

                    }
                }
            }
            else{
                
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].eyes == 'blue')
                    {
                        if(!flip2.includes(i))
                        flip2.push(i);

                    }
                }
            }
        }
    }
    else if(questions[qNum].includes('hair'))
    {
        if(questions[qNum].includes('brown'))
        {
            if(k)
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair != 'brown')
                    {
                        if(!flip2.includes(i))
                        flip2.push(i);

                    }
                }
            }
            else{
                
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair == 'brown')
                    {
                        if(!flip2.includes(i))
                        flip2.push(i);

                    }
                }
            }
        }
        else if(questions[qNum].includes('yellow'))
        {
            if(k)
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair != 'yellow')
                    {
                        if(!flip2.includes(i))
                        flip2.push(i);

                    }
                }
            }
            else{
                
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair == 'yellow')
                    {
                        if(!flip2.includes(i))
                        flip2.push(i);

                    }
                }
            }
        }
        else if(questions[qNum].includes('white'))
        {
            if(k)
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair != 'white')
                    {
                        if(!flip2.includes(i))
                        flip2.push(i);

                    }
                }
            }
            else{
                
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair == 'white')
                    {
                        if(!flip2.includes(i))
                        flip2.push(i);

                    }
                }
            }
        }
    }
    else if(questions[qNum].includes('nose'))
    {
        if(questions[qNum].includes('big'))
        {
            if(k)
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].nose != 'big')
                    {
                        if(!flip2.includes(i))
                        flip2.push(i);

                    }
                }
            }
            else{
                
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].nose == 'big')
                    {
                        if(!flip2.includes(i))
                        flip2.push(i);

                    }
                }
            }
        }
    }
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
function ansQuestion(q){
    
    if(q.includes('male'))
    {
        if(characters[machineChar].male)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].male)
                {
                    if(!flip.includes(i))
                    flip.push(i);

                }
            }
            console.log(flip);
            return true;
        }
        else{
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].male)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            console.log(flip);
            return false;
        }

    }
    else if(q.includes('glasses'))
    {
        if(characters[machineChar].glasses)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].glasses)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return true;
        }
        else{
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].glasses)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return false;
        }
    }
    else if(q.includes('cap'))
    {
        if(characters[machineChar].cap)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].cap)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return true;
        }
        else{
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].cap)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return false;
        }
    }
    else if(q.includes('mustatche'))
    {
        if(characters[machineChar].mustatche)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].mustatche)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return true;
        }
        else{
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].mustatche)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return false;
        }
    }
    else if(q.includes('beard'))
    {
        if(characters[machineChar].beard)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].beard)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return true;
        }
        else{
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].beard)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return false;
        }
    }
    else if(q.includes('dark skin'))
    {
        if(characters[machineChar].darkSkin)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].darkSkin)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return true;
        }
        else{
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].darkSkin)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return false;
        }
    }
    else if(q.includes('smiling'))
    {
        if(characters[machineChar].smiling)
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].smiling)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return true;
        }
        else{
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].smiling)
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return false;
        }
    }
    else if(q.includes('bald'))
    {
        if(characters[machineChar].hair == 'bald')
        {
            for(var i = 0; i < characters.length; i++)
            {
                if(!characters[i].hair == 'bald')
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return true;
        }
        else{
            for(var i = 0; i < characters.length; i++)
            {
                if(characters[i].hair == 'bald')
                {
                    if(!flip.includes(i))
                    flip.push(i);
                }
            }
            return false;
        }
    }
    else if(q.includes('nose'))
    {
        if(q.includes('big'))
        {
            if(characters[machineChar].nose == 'big')
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].nose == 'small')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return true;
            }
            else{
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].nose == 'big')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
            
                return false;
            }
        }
        else if(q.includes('small'))
        {
            if(characters[machineChar].nose == 'small')
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].nose == 'big')
                    {
                        flip.push(i);
                    }
                }
                return true;
            }
            else{
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].nose == 'small')
                    {
                        flip.push(i);
                    }
                }
                return false;
            }
        }
        return false;
    }
    else if(q.includes('hair'))
    {
        if(q.includes('black'))
        {
            if(characters[machineChar].hair == 'black')
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair != 'black')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return true;
            }
            else{
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair == 'black')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return false;
            }
        }
        else if(q.includes('brown'))
        {
            if(characters[machineChar].hair == 'brown')
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair != 'brown')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return true;
            }
            else{
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair == 'brown')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return false;
            }
        }
        else if(q.includes('yellow'))
        {
            
            if(characters[machineChar].hair == 'yellow')
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair != 'yellow')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return true;
            }
            else{
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair == 'yellow')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return false;
            }
        }
        else if(q.includes('orange'))
        {
            if(characters[machineChar].hair == 'orange')
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair != 'orange')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return true;
            }
            else{
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair == 'orange')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return false;
            }
        }
        else if(q.includes('white'))
        {
            if(characters[machineChar].hair == 'white')
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair != 'white')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return true;
            }
            else{
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].hair == 'white')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return false;
            }
        }
        return false;
    }
    else if(q.includes('eyes'))
    {
        if(q.includes('brown'))
        {
            if(characters[machineChar].eyes == 'brown')
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].eyes != 'brown')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return true;
            }
            else{
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].eyes == 'brown')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return false;
            }
        }
        else if(q.includes('blue'))
        {
            if(characters[machineChar].eyes == 'blue')
            {
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].eyes != 'blue')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return true;
            }
            else{
                for(var i = 0; i < characters.length; i++)
                {
                    if(characters[i].eyes == 'blue')
                    {
                        if(!flip.includes(i))
                        flip.push(i);
                    }
                }
                return false;
            }
        }
    }
    
}
function playerAsk(){
    var q = document.getElementById('ask-in').value;
    if(ansQuestion(q))
    {
        document.getElementById('q-ans').innerHTML = 'YES';
        document.getElementById('q-ans').style = 'color: green; font-style:bold; font-size: 26px; margin-top: 4px';
    }
    else{
        document.getElementById('q-ans').innerHTML = 'NO';
        document.getElementById('q-ans').style = 'color: red; font-style:bold; font-size: 26px; margin-top: 4px';
    }
    setTimeout(() => {
        document.getElementById('guess-in').style.display="none";
    document.getElementById('guess-fun').style.display="none";
    document.getElementById('ask-in').style.display="none";
    document.getElementById('ask-fun').style.display="none";
    document.getElementById('q-ans').style.display="none";
    document.getElementById('ask-in').value = '';
    flipCards();
    }, 3000)
    setTimeout(() =>{ 
        if(flip2.length >= 18 || flip.length >= 18)
        {
            // var mayBe = [];
            var s;
            do{
                s = Math.floor(Math.random() * 20);
            }while(flip2.includes(s));
            // for(var i = 0; i < 20; i++)
            // {
            //     if(flip2.includes(i) == false)
            //     {
            //        mayBe.push(i);
            //     }
            // }
            // s = Math.floor(Math.random() * mayBe.length);
            // console.log(mayBe);
            console.log(flip2);
            document.getElementById('mach-question').innerHTML = `I guess it's ` + characters[s].name;
            document.getElementById('mach-question').style.display = "block";
            
        }
        else{
            machineMove()
        }  
    }, 8000);
    
}
function machineMove(){
    document.getElementById('mach-question').innerHTML = questions[qNum];
    document.getElementById('mach-question').style.display = "block";
    document.getElementById('yes').style.display="block";
    document.getElementById('no').style.display="block";
    qNum = Math.floor(Math.random() * 13);
}
function playerGuess(){
    var g = document.getElementById('guess-in').value;
    for (var i = 0; i < characters.length; i++)
    {
        if(characters[i].name === g)
        {
            if(machineChar == i)
            {
                alert("YOU WIN!!");
                return;
            }
            
        }
    }
    alert("YOU LOSE!!");
    return;
}
