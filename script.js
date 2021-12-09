let scoreBoard,scores,activePlayer,isPlaying;


document.querySelector(".btn-roll").addEventListener("click", ()=> {
    
    if(isPlaying){
    let dice1= Math.floor((Math.random()*6 )+ 1);
    let dice2= Math.floor((Math.random()*6) + 1)
    
     if(dice1 && dice2){
         scoreBoard+=dice1 + dice2;
         document.getElementById("current-"+  activePlayer).innerText=scoreBoard;
        document.querySelector(".dice").src="./assets/dice-"+dice1+".png";
        document.querySelector(".dice1").src="./assets/dice-"+dice2+".png";
        document.querySelector(".dice").style.display="block";
        document.querySelector(".dice1").style.display="block";
     }else{
       change();
     }

    }
})
document.querySelector(".btn-new").addEventListener("click", ()=>{
  init();
})
document.querySelector(".btn-hold").addEventListener("click",()=>{
  if(isPlaying){
    scores[activePlayer]+=scoreBoard;
    document.getElementById("score-"+  activePlayer).innerText=scores[activePlayer];
    if(scores[activePlayer] >=20){
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        isPlaying=false;
    }else{
       change();
    }
}
})

function change(){
    scoreBoard=0;
    document.getElementById("current-"+  activePlayer).innerText=scoreBoard;
    activePlayer==0 ? activePlayer=1 : activePlayer=0
    document.querySelector(".dice").style.display="none"
    document.querySelector(".dice1").style.display="none"
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-"+activePlayer+"-panel").classList.add("active");
}

function init(){
   scoreBoard = 0;
   scores= [0,0];
   activePlayer=0;
   isPlaying=true;

   document.querySelector("#name-0").innerText = "player 1";
   document.querySelector("#name-1").innerText = "player 2";
   document.querySelector("#score-0").innerText = "0";
   document.querySelector("#score-1").innerText = "0";
   document.querySelector("#current-0").innerText = "0";
   document.querySelector("#current-1").innerText = "0";
   document.querySelector(".dice").style.display="none"
   document.querySelector(".dice1").style.display="none"
    
   document.querySelector(".player-0-panel").classList.remove("active");
   document.querySelector(".player-0-panel").classList.remove("winner");
   document.querySelector(".player-1-panel").classList.remove("active");
   document.querySelector(".player-1-panel").classList.remove("winner");
   document.querySelector(".player-0-panel").classList.add("active");
}
init();