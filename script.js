// Scroll stuff

window.onscroll = function () {
    stickyHeader();
    revealExperiences();

}

let forSong = false;

function titleChanger () {
    let message = "Hey, come back!";
    let original;

    window.onfocus = (function() {
      let title = 'Seymur Rahimov';
      document.title = title;
      forSong = false;
    });
    
    window.onblur = (function() {
        if(!forSong){
            let title = 'Hey, you comin back?';
            document.title = title;
        }
    })
  }


titleChanger();

let welcome = document.querySelector('.welcome');
let header = document.querySelector('header');
let stickOffset = header.offsetTop;

function stickyHeader() {
    if(window.pageYOffset>stickOffset){
        welcome.classList.add('sticky');
    }
    else {
        welcome.classList.remove('sticky');
    }
}

let stopRepeat = true;

let experiences = document.querySelector('.experience');
let experienceOffset = experiences.offsetTop-window.innerHeight/3;
let work = document.querySelector('.work');
let workOffset = work.offsetTop-window.innerHeight/2;
let htmlx = document.querySelectorAll('.progress')[0];
let cssx = document.querySelectorAll('.progress')[1];
let jssx = document.querySelectorAll('.progress')[2];
let reactx = document.querySelectorAll('.progress')[3];
let bootsx = document.querySelectorAll('.progress')[4];
let uix = document.querySelectorAll('.progress')[5];

function revealExperiences () {
    if(window.pageYOffset>experienceOffset && window.pageYOffset < workOffset){
        stopRepeat=false;
        htmlx.classList.add('html-grow');
        cssx.classList.add('css-grow');
        jssx.classList.add('js-grow');
        reactx.classList.add('react-grow');
        bootsx.classList.add('boots-grow');
        uix.classList.add('ui-grow');
    }
    else if(window.pageYOffset>workOffset || window.pageYOffset < experienceOffset){
        stopRepeat=false;
        htmlx.classList.remove('html-grow');
        cssx.classList.remove('css-grow');
        jssx.classList.remove('js-grow');
        reactx.classList.remove('react-grow');
        bootsx.classList.remove('boots-grow');
        uix.classList.remove('ui-grow');
    }
}

// music link

let songList = [
    'https://www.youtube.com/watch?v=qwbaJMbLh3Y',
    'https://www.youtube.com/watch?v=rp31_j9knMI',
    'https://www.youtube.com/watch?v=vB6d9VVwRZc',
    'https://www.youtube.com/watch?v=Lk-yBArA9fg',
    'https://www.youtube.com/watch?v=XCjAfKY65Ks',
    'https://www.youtube.com/watch?v=zH9sXggRlxc',
    'https://www.youtube.com/watch?v=K7IudufF-6o',
    'https://www.youtube.com/watch?v=Dq43TrgM3aA',
    'https://www.youtube.com/watch?v=5pXVLqupV3o',
    'https://www.youtube.com/watch?v=JoDcYRyWWYY',
    'https://www.youtube.com/watch?v=Lpjcm1F8tY8',
    'https://www.youtube.com/watch?v=zk4xaOhqYVI',
    'https://www.youtube.com/watch?v=NQh3Ejogxp4',
    'https://www.youtube.com/watch?v=UtF6Jej8yb4',
    'https://www.youtube.com/watch?v=Dr1nN__-2Po',
    'https://www.youtube.com/watch?v=YUMdd27gYbk',
    'https://www.youtube.com/watch?v=USVg_E7r20g',
    'https://www.youtube.com/watch?v=4aldkngvhH8',
    'https://www.youtube.com/watch?v=J701ucIsrrk',
    'https://www.youtube.com/watch?v=AQ0resnXCcE',
    'https://www.youtube.com/watch?v=ppy-fgbPn2s',
    'https://www.youtube.com/watch?v=szj59j0hz_4',
    'https://www.youtube.com/watch?v=xUVz4nRmxn4',
    'https://www.youtube.com/watch?v=imN-fyriY1s',
    'https://www.youtube.com/watch?v=oC-GflRB0y4',
    'https://www.youtube.com/watch?v=pAAqrqg7NiU',
    'https://www.youtube.com/watch?v=cdNgo-E95f0',
    'https://www.youtube.com/watch?v=-Kza9C_hMBQ',
    'https://www.youtube.com/watch?v=xmdOcRjXjoA',
    'https://www.youtube.com/watch?v=uA51eLELZqE',
    'https://www.youtube.com/watch?v=c3JsLFBoY5o',
    'https://www.youtube.com/watch?v=qTGnaB7bi7w',
    'https://www.youtube.com/watch?v=fvOCPf7fPaE',
    'https://www.youtube.com/watch?v=n18g4bRJDCY',
    'https://www.youtube.com/watch?v=hV1qGwYLTRE',
    'https://www.youtube.com/watch?v=ZxaoJ6q2bM0',
    'https://www.youtube.com/watch?v=9Eer_MhKoNE',
    'https://www.youtube.com/watch?v=amLi06dhx5w'

]

let songButton = document.querySelector('.wont-fail');
songButton.addEventListener('click',()=>{
    changeSong(songList);
    document.title = "How's the song?"
    forSong = true;

});

let i=1; //first song

function selectATrack (array) {
    i = Math.floor(Math.random()*(array.length));
    songButton.setAttribute('href',array[i]);
}

function changeSong (array) {
    array2=array.filter((song,index)=>{
        return index !== i;
    })
    let newsong = Math.floor(Math.random()*(array2.length));
    songButton.setAttribute('href',array2[newsong]);
    i=newsong;
    console.log(i);
}

selectATrack(songList);


workList = document.querySelectorAll('.mywork');


function workGrow() {
    workList.forEach((element,index) => {

        element.addEventListener('mouseover',()=>{

            let newone = element;
            let elementCopy = newone.cloneNode(true);
            element.parentElement.insertBefore(elementCopy,element);

            elementCopy.classList.remove('mywork');
            elementCopy.className += ` wrk-${(index+1)}`;
            elementCopy.style.position = 'absolute';
            elementCopy.style.zIndex = '20';

            if(index%2===0){
                if(index!==0){
                    elementCopy.style.top = `${(index-1)*41}vh`;
                }
            }
            else{
                elementCopy.style.right = '0vw';
                elementCopy.style.flexFlow = 'row-reverse';
                if(index!==1){
                    elementCopy.style.top = `${(index-2)*41}vh`;
                }
            }
            element.parentElement.appendChild(elementCopy);
            elementCopy.className += ' elcopy';
            elementCopy.style.width = '68vw';

            elementCopy.addEventListener('mouseleave',()=>{
                elementCopy.classList.add('leavin');
                setTimeout(() => {
                    elementCopy.style.width = '37vw';
                    setTimeout(() => {
                        elementCopy.parentElement.removeChild(elementCopy);
                    }, 400);         
                }, 400);
            })
        })
        
    });
}

workGrow();


// Toggling detailed experience information

let closeButton = document.querySelector('.btn-close');
let xpButton = document.querySelector('.xp-btn');
let modalBox = document.querySelector('.modal-det');

function modalToggle() {
    closeButton.addEventListener('click',()=>{
        modalBox.style.display = 'none';
    });
    
    xpButton.addEventListener('click',()=>{
        modalBox.style.display = 'flex';
    });
}

modalToggle();