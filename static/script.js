const dino = document.querySelector('.dino');
//console.log(dino);

function handlKeyUp(event)
{
    if (event.keyCode === 32 || event.keyCode === 38)
    {
        console.log('Pressionado Tecla Espaço');
        jump();
    }
};

function jump(){
    let position = 0;
    let upinterval = setInterval( () => {
        if (position >= 150){
           clearInterval(upinterval); 
           //Descendo
           let downInterval = setInterval( () => {
           if (position <= 0){
                clearInterval(upinterval);
            }else{
             position -= 20;
             dino.style.bottom = position + 'px';
            }
           }, 20);
        }else{
         //Subindo
         position += 20;
         dino.style.bottom = position + 'px';
        }
    }, 20);
};

document.addEventListener('keyup', handlKeyUp);


/*
document.addEventListener('keyup', () => {
    console.log("presionou uma tecla");
});

document.addEventListener('keyup', function () {
    console.log("presionou uma tecla");
});
*/

