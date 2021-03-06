const mario = document.querySelector('.mario');
const background = document.querySelector('.background');
const score = document.querySelector('.score');
let isJumping = false;
let position = 20;
let points = 0;
//console.log(mario);


function handlKeyUp(event)
{
    if (event.keyCode === 32 || event.keyCode === 38)
    {
        //console.log('Pressionado Tecla Espaço');
        //console.log(!isJumping);
        if(!isJumping)
        {   
            Jump();
        }
        
    }
};

function Jump(){
    //isJumping = true;
    
    let upinterval = setInterval( () => {
        if (position > 200){
           clearInterval(upinterval); 
           //Descendo
           let downInterval = setInterval( () => {
           if (position <= 20){
                clearInterval(downInterval);
                isJumping = false;
            }else{
             position -= 25;
             mario.style.bottom = position + 'px';
            }
           }, 20);
        }else{
         //Subindo
         position += 25;
         mario.style.bottom = position + 'px';
        }
    }, 20);
};

function createEnemies(){
    const enemies = document.createElement('div');
    const enemies_dois = document.createElement('div');
    let enemiesPosition = 1200;
    let randomTime = Math.random() * 6000;
    //console.log(randomTime);
    
    enemies.classList.add('enemies');
    enemies.style.left = 1200 + 'px';
    background.appendChild(enemies);
    //background.appendChild(enemies_dois);
    if (points >= 60){
        enemies.classList.add('enemies_dois');
        enemies.style.left = 1200 + 'px';
        background.appendChild(enemies);
        
    }


    let leftInterval = setInterval( () => {

        if (enemiesPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(enemies);
            points += 10;
            score.textContent = points;
        
        }else if (enemiesPosition > 0 && enemiesPosition < 60 && position < 60 ){
            //game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        }else if (points >= 20000){
            //game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Você Ganhou!!!</h1>';
        }else{
            enemiesPosition -= 10;
            enemies.style.left = enemiesPosition + 'px';
        }

    }, 20);

    setTimeout(createEnemies, randomTime);
}

function Score(){
    let pointsinterval = setInterval( () => {
        score.textContent = points;
    }, 20);
}


createEnemies();
Score();
document.addEventListener('keyup', handlKeyUp);