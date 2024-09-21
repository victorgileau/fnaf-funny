const haa = document.querySelector('#haaa');
const body = document.querySelector('body');
const audio = document.querySelector('#audio');
const p = document.querySelector('p');
body.style.backgroundImage = 'url(./images/fnaf1night.webp)';
body.style.backgroundSize = '100vw';

const images = ['./images/freddy.webp', './images/chica.png', './images/foxy3.webp', './images/bonnie2.gif', './images/springtrap2.jpg', './images/Goldenfreddy.gif', './images/chica2.webp', './images/bonnie.png'];
const sons = ['./sons/hello.mp3', './sons/laught.mp3', './sons/scream.mp3', './sons/scream.mp3', './sons/scream.mp3'];
const nomAnimatronic = ['freddy', 'chica', 'foxy', 'bonnie', 'goldenfreddy', 'springtrap', 'ballonboy', 'shrek', 'rien'];
const comentaireAnimatronic = ['Won\'t you help me?', 'Hello...UJdscxivxvxcvxvsd...', 'WWWyyyyyhhh...hh..hyy..ywyyw..', 'Help...', '...', 'HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA...'];

const animatronic = {
    freddy: [
        {
            images: './images/freddy2.gif',
            son: './sons/scream.mp3',
            sonBack: './sons/laught.mp3',
        },
    ],
    chica: [
        {
            images: './images/chica2.webp',
            son: './sons/scream.mp3',
        },
    ],
    foxy: [
        {
            images: './images/foxy3.webp',
            son: './sons/scream2.mp3',
        },
    ],
    bonnie: [
        {
            images: './images/bonnie2.gif',
            son: './sons/scream.mp3',
        },
    ],
    goldenfreddy: [
        {
            images: './images/Goldenfreddy.gif',
            son: './sons/jumpscare_scream.mp3',
        },
    ],
    springtrap: [
        {
            images: './images/springtrap2.gif',
            son: './sons/glitch.mp3',
        },
    ],
    ballonboy: [
        {
            images: './images/ballonboy.gif',
            son: './sons/hello.mp3',
        },
    ],
    shrek: [
        {
            images: './images/shrek.gif',
            son: './sons/shrek_hello_there.mp3',
        },
    ],
    rien: [
        {
            images: './images/foxy.jpg',
            son: './sons/hello.mp3',
        },
    ]
}

setInterval(() => {
    if (haa.classList.contains('shrek')) {
        haa.classList.remove('shrek');
    }
    body.style.backgroundSize = '110vw';
    body.style.backgroundImage = 'url(./images/background.webp)';
    let randomNumber = Math.floor(Math.random()*17);
    audio.setAttribute('autoplay', true);
    audio.volume = 0.5;
    console.log('numéro random : ', randomNumber);

    if (randomNumber == 1 || randomNumber == 2 || randomNumber == 3 || randomNumber == 4 || randomNumber == 5 || randomNumber == 6 || randomNumber == 8 || randomNumber == 9 || randomNumber == 10 || randomNumber == 11) {
        audio.setAttribute('autoplay', true);
        audio.src = './sons/static.mp3';
        audio.play();
        audio.volume = 0.3;
    }
    else if (randomNumber == 7 || randomNumber == 13) {
        body.style.backgroundImage = 'url(./images/background2.webp)';
        audio.src = animatronic.freddy[0].sonBack;
        audio.play();
    }
    else if (randomNumber == 0) {
        body.style.backgroundImage = 'url(./images/background3.webp)';
        audio.src = animatronic.springtrap[0].son;
        audio.play();
    }
    else {
        let randomNb = Math.floor(Math.random()*650) + 150;
        let randomAni = Math.round(Math.random()*8);
        let ranVoiceLine = Math.floor(Math.random()*5);
        console.log(randomAni + ' nom anomatronic : ' + nomAnimatronic[randomAni]);
        if (randomAni != 5) {
            console.log(comentaireAnimatronic[ranVoiceLine]);
        }
        else {
            console.log('I always come back!');
        }
        
        let img = document.createElement('img');
        img.setAttribute('class', 'haa');
        img.src = animatronic[nomAnimatronic[randomAni]][0].images;
        haa.appendChild(img);

        audio.src = animatronic[nomAnimatronic[randomAni]][0].son;
        audio.play();

        if (nomAnimatronic[randomAni] == 'springtrap') {
            setTimeout(() => {
                haa.removeChild(img);
                audio.setAttribute('autoplay', false);
            }, 1500);
        }
        else if (nomAnimatronic[randomAni] == 'goldenfreddy') {
            setTimeout(() => {
                haa.removeChild(img);
                audio.setAttribute('autoplay', false);
            }, 1200);
        }
        else if (nomAnimatronic[randomAni] == 'shrek') {
            img.classList.add('shrek');
            body.style.backgroundImage = 'url(./images/swamp.png)';
            console.log('What are you doing on my swamp!!!!');
            setTimeout(() => {
                haa.removeChild(img);
                audio.setAttribute('autoplay', false);
            }, 4000);
        }
        else {
            setTimeout(() => {
                haa.removeChild(img);
                audio.setAttribute('autoplay', false);
            }, randomNb);
        }
    }
}, 5000);


//test
let randomnBr = Math.floor(Math.random()*6);
console.log();
console.log(animatronic[nomAnimatronic[randomnBr]][0].images);