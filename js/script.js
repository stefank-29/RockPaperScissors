function computerPlay(){
                let plays = ["Rock", "Paper", "Scissors"];
                return plays[Math.floor(Math.random()*3)];

            }
            
            function playRound(playerSelection, computerSelection){
                let player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
                let computer = computerSelection;
                //console.log(computer);
                if(player === computer){
                    msg.textContent = "It\'s a Draw!";
                    //console.log("It\'s a Draw!");
                    return -1;
                }
                else {
                    if(player === "Rock"){
                        if(computer === "Paper"){
                            msg.textContent = "You Lose! Paper beats Rock";
                            //console.log("You Lose! Paper beats Rock");
                            return false;
                        }
                        else {
                            msg.textContent = "You Win! Rock beats Scissors";
                            //console.log("You Win! Rock beats Scissors");
                            return true;
                        }
                    }
                    if(player === "Paper"){
                        if(computer === "Rock"){
                            msg.textContent = "You Win! Paper beats Rock";
                            //console.log("You Win! Paper beats Rock");
                            return true;
                        }

                        else {
                            msg.textContent = "You Lose! Scissors beats Paper";
                            //console.log("You Lose! Scissors beats Paper");
                            return false;
                        }
                    }
                    if(player === "Scissors"){
                        if(computer === "Rock"){
                            msg.textContent = "You Lose! Rock beats Scissors";
                            //console.log("You Lose! Rock beats Scissors");
                            return false;
                        }
                        else {
                            msg.textContent = "You Win! Scissors beats Paper";
                            //console.log("You Win! Scissors beats Paper");  
                            return true;
                        }
                    }


                }

            }
            
            const buttons = Array.from(document.querySelectorAll('button')) ;
            buttons.forEach(button => button.addEventListener('click', play));
            buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
            
            
                
            let result = 0;
            let ply = 0;
            let cmp = 0;
            const msg = document.querySelector('.message');
            msg.textContent = "Welcome to Rock, Paper, Scissors game!"
            const plyScore = document.querySelector('#player');
            const cmpScore = document.querySelector('#computer');
            plyScore.addEventListener('transitionend', removeTransition);
            cmpScore.addEventListener('transitionend', removeTransition);

            const resetButton = document.createElement('button');
            resetButton.textContent = "Reset game";
            resetButton.setAttribute('id', 'resetBtn');
            resetButton.addEventListener('click',resetGame);  
            
            const body = document.querySelector("body");

            
            plyScore.textContent = "Player: " + ply;
            cmpScore.textContent = "Computer: " + cmp;
            let cnt = 0;

            function play(e){
               if(cnt !== 5){ 
                let computer = computerPlay();
                let result = playRound(e.target.id, computer);
                e.target.classList.add("play");
               //let result = playRound(player, computer);
                if(result !== -1){

                    if(result){
                        ply++;
                        plyScore.textContent = "Player: " + ply;
                        plyScore.classList.add("playScore");
                    }
                    
                    else {
                        cmp++;
                        cmpScore.textContent = "Computer: " + cmp;
                        cmpScore.classList.add("playScore");
                    }
                }
                if(ply == 5){
                    msg.textContent = "Congratulations! You Won the game!";
                    cnt = 5;
                    body.appendChild(resetButton);
                    
                }
                if(cmp == 5) {
                    msg.textContent = "You Lost the game!"
                    cnt = 5;
                    body.appendChild(resetButton);
                   
               }
              }
            }

            function removeTransition(e){
                if(e.propertyName !== 'transform')
                    return;
                e.target.classList.remove("play");
                e.target.classList.remove("playScore");
            }
            
            function resetGame(e){
                location.reload();
            }
            