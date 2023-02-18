
function tocarSom(event) {

    if (event.code === 'KeyQ') {
        let div = document.querySelector('.keyq');
        div.classList.add('active');
        let audio = document.querySelector('#s_keyq');
        audio.currentTime = 0;
        audio.play();
    }

    if (event.code === 'KeyW') {
        let div = document.querySelector('.keyw');
        div.classList.add('active');
        let audio = document.querySelector('#s_keyw');
        audio.currentTime = 0;
        audio.play();
    }

    if (event.code === 'KeyE') {
        let div = document.querySelector('.keye');
        div.classList.add('active');
        let audio = document.querySelector('#s_keye');
        audio.currentTime = 0;
        audio.play();
    }
    if (event.code === 'KeyA') {
        let div = document.querySelector('.keya');
        div.classList.add('active');
        let audio = document.querySelector('#s_keya');
        audio.currentTime = 0;
        audio.play();
    }
    if (event.code === 'KeyS') {
        let div = document.querySelector('.keys');
        div.classList.add('active');
        let audio = document.querySelector('#s_keys');
        audio.currentTime = 0;
        audio.play();
    }
    if (event.code === 'KeyD') {
        let div = document.querySelector('.keyd');
        div.classList.add('active');
        let audio = document.querySelector('#s_keyd');
        audio.currentTime = 0;
        audio.play();
    }
    if (event.code === 'KeyZ') {
        let div = document.querySelector('.keyz');
        div.classList.add('active');
        let audio = document.querySelector('#s_keyz');
        audio.currentTime = 0;
        audio.play();
    }
    if (event.code === 'KeyX') {
        let div = document.querySelector('.keyx');
        div.classList.add('active');
        let audio = document.querySelector('#s_keyx');
        audio.currentTime = 0;
        audio.play();
    }
    if (event.code === 'KeyC') {
        let div = document.querySelector('.keyc');
        div.classList.add('active');
        let audio = document.querySelector('#s_keyc');
        audio.currentTime = 0;
        audio.play();
    }
}

function limpar() {
    const elements = document.querySelectorAll('.active');

    elements.forEach((element) => {
        element.classList.remove('active');
    });

}


document.body.addEventListener('keydown', tocarSom);
document.body.addEventListener('keyup', limpar);