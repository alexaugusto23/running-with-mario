const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
//console.log(dino);

function handlKeyUp(event)
{
    if (event.keyCode === 32 || event.keyCode === 38)
    {
        //console.log('Pressionado Tecla Espaço');
        if(!isJumping){jump();}
        
    }
};

function jump(){
    isJumping = true;
    let upinterval = setInterval( () => {
        if (position >= 150){
           clearInterval(upinterval); 
           //Descendo
           let downInterval = setInterval( () => {
           if (position <= 0){
                clearInterval(upinterval);
                isJumping = false;
            }else{
             position -= 20;
             dino.style.bottom = position + 'px';
            }
           }, 20);
        }else{
         //Subindo
         position += 15;
         dino.style.bottom = position + 'px';
        }
    }, 15);
};

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    console.log(randomTime);
    
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval( () => {

        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }

    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handlKeyUp);


/*
document.addEventListener('keyup', () => {
    console.log("presionou uma tecla");
});

document.addEventListener('keyup', function () {
    console.log("presionou uma tecla");
});
*/

