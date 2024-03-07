const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const verde = document.querySelector('.verde');


let contador = 0;
function on(){
    setInterval(() => {
        if (contador === 0 || contador === 6) {
            vermelho.classList.add('vermelho-ativo');
            const audio = new Audio('apito.mp3');
            audio.play();
            verde.classList.remove('verde-ativo');
            amarelo.classList.remove('amarelo-ativo');
        } else if (contador === 3) {
            verde.classList.add('verde-ativo');
            vermelho.classList.remove('vermelho-ativo');
            amarelo.classList.remove('amarelo-ativo');
        } else if (contador === 4) {
            amarelo.classList.add('amarelo-ativo');
            vermelho.classList.remove('vermelho-ativo');
            verde.classList.remove('verde-ativo');
        } else if (contador === 7) {
            amarelo.classList.remove('amarelo-ativo');
        }

        
        
        contador = (contador + 1) % 8;
    }, 1000);
}
function off(){
    setInterval(() => {
        if(contador === 0 || contador === 6){
            amarelo.classList.add('amarelo-ativo');
        }else if(contador === 3){
            amarelo.classList.remove('amarelo-ativo');
        }else if(contador === 4){
            amarelo.classList.add('amarelo-ativo');
        }else if(contador === 7){
            amarelo.classList.remove('amarelo-ativo');
        }
    
    contador = (contador + 1) % 8;
}, 1000);
}
