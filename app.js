const keys = document.querySelectorAll('li');
let audio = new Audio("tunes/a.wav");

const volumeRang = document.querySelector('.volume input');
volumeRang.addEventListener('input', (e)=>{
    audio.volume = e.target.value;
})

const showHideBtn = document.querySelector('.showKeys input');
showHideBtn.addEventListener('input', (e)=>{
    keys.forEach((key)=>{key.classList.toggle('hide')});
})

const keyPresed = (key)=>{

    const keyGeted = document.querySelector(`[data-key="${key}"]`);
    keyGeted.classList.add('active');
    setTimeout(() => {
        keyGeted.classList.remove('active');
    }, 150);

    audio.src = `tunes/${key}.wav`;
    audio.play();
}

const keysArr = [];

keys.forEach((key)=>{
    keysArr.push(key.dataset.key);
    key.addEventListener('click', () => keyPresed(key.dataset.key));
    }
);

document.addEventListener('keydown', (event)=>{
   
    if(keysArr.includes(event.key)){

        keyPresed(event.key);
    }
})