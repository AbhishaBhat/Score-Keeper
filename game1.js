const p1b=document.querySelector("#p1b");
const p2b=document.querySelector("#p2b");
const p1sDisplay=document.querySelector("#p1");
const p2sDisplay=document.querySelector("#p2");
const resetButton=document.querySelector("#reset");
const winScoreSelect=document.querySelector("#winS");
let p1s=0;
let winScore=parseInt(winScoreSelect.value);
let p2s=0;
let isOver=false;
p1b.addEventListener("click",function(){
    if(!isOver)
    {
        p1s++;
    
    if(p1s===winScore)
    {
        isOver=true;
        p1sDisplay.classList.add("winner");
        p2sDisplay.classList.add("loser");
    }
    p1sDisplay.textContent=p1s;
    
}
});

p2b.addEventListener("click",function(){
    if(!isOver)
    {
        p2s++;
    
    if(p2s===winScore)
    {
        isOver=true;
         p2sDisplay.classList.add("winner");
        p1sDisplay.classList.add("loser");

    }
    p2sDisplay.textContent=p2s;
    
}
});
winScoreSelect.addEventListener("change",function(){
    alert("The game will reset when you change the win score.");
    winScore=parseInt(this.value);
    resetGame();
});

resetButton.addEventListener("click",resetGame);

function resetGame() {
     isOver=false;
    p1s=0;
    p2s=0;
    p1sDisplay.textContent=p1s;
    p2sDisplay.textContent=p2s;
    p1sDisplay.classList.remove("winner", "loser");
    p2sDisplay.classList.remove("winner", "loser");
}