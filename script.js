
//initial score =0 rahenga 
score = 0;

//cr0ss krne pr 1 se inrement krenga
cross = true;


audio = new Audio('music1.mp3');
audiogameOver = new Audio('gameover1.mp3');
setTimeout(()=>{
    audio.play()
},1000);


//for MOment of DINO AND obSTACLE
document.onkeydown =(e)=>{
    console.log("key Code is:",e.keyCode);
 if(e.keyCode==38){
    dino = document.querySelector('.dino');
    dino.classList.add('animatedDino');
    setTimeout(()=>{
        dino.classList.remove('animatedDino')
    }, 500);
 }
if(e.keyCode==39){
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = dinoX + 112 +'px';
}

if(e.keyCode==37){
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = (dinoX - 112) +'px';

}

}
//


setInterval(()=>{
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle')

    //dino x-axis value
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));

    // dino y-axis value
     dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

     //obstacle x-axis value
     ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));

     // obstacle y-axis value
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    //find ABSOLUTE value (-)

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log(offsetX, offsetY);
    if(offsetX < 73 && offsetY < 52){
        gameOver.style.visibility = 'visible'
      obstacle.classList.remove('obstacleAni')
      audiogameOver.play()
      setTimeout(()=>{
        //    audiogameOver.pause()
           audio.pause()
      },100)
    }
    else if(offsetX < 145 && cross){
        score+=1; 
        updateScore(score)
        cross = false;
        setTimeout(()=>{
            cross = true
        },1000);

        setTimeout(()=>{
            animationDuration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDuration = animationDuration - 0.1;
            obstacle.style.animationDuration = newDuration + 's';
        },500)

       
    }

},10);


function updateScore(score){
    scoreCount.innerHTML = "Your Score : " + score
}