'use strict'

const thumbUp_toggleBtn = document.querySelector('.meta_area .fa-thumbs-up');
const thumbDown_toggleBtn = document.querySelector('.meta_area .fa-thumbs-down');
const likeNum = document.querySelector('.meta_area .like .num');
const dislikeNum = document.querySelector('.meta_area .dislike .num');




thumbUp_toggleBtn.addEventListener('click', () => {

    if(thumbDown_toggleBtn.classList.contains('active')){
        thumbDown_toggleBtn.classList.toggle('active');
        dislikeNum.innerHTML = Number(dislikeNum.textContent) - 1;
    }

    if(thumbUp_toggleBtn.classList.contains('active')){
        likeNum.innerHTML = Number(likeNum.textContent) - 1;
    }
    else{
        likeNum.innerHTML = Number(likeNum.textContent) + 1;
    }


    thumbUp_toggleBtn.classList.toggle('active');
    
});

thumbDown_toggleBtn.addEventListener('click', () => {
    if(thumbUp_toggleBtn.classList.contains('active')){
        thumbUp_toggleBtn.classList.toggle('active');
        likeNum.innerHTML = Number(likeNum.textContent) - 1;
    }
    
    if(thumbDown_toggleBtn.classList.contains('active')){
        dislikeNum.innerHTML = Number(dislikeNum.textContent) - 1;
    }
    else{
        dislikeNum.innerHTML = Number(dislikeNum.textContent) + 1;
    }

    thumbDown_toggleBtn.classList.toggle('active');
    
});

const subscribe = document.querySelector('.info_area .subscribeBtn');
const subscribeBell = document.querySelector('.info_area .subscribe_box .ico_bell');
const subscribeNum = document.querySelector('.info_area .channel_count .num');



subscribe.addEventListener('click' , ()=>{

    if(subscribe.classList.contains('active')){
        subscribe.innerHTML="구독";
        subscribeNum.innerHTML = Number(subscribeNum.textContent) -1;
        subscribe.classList.remove('active');
        subscribeBell.classList.remove('active');
    }
    else{
        subscribeNum.innerHTML = Number(subscribeNum.textContent) + 1;
        subscribe.innerHTML="구독중";
        subscribe.classList.add('active');
        subscribeBell.classList.add('active');
    }
});

function subscribe_confirm () {
    const result = confirm("구독취소하겠습니까?");

    if(result){
        subscribe.innerHTML="구독";
        subscribeNum.innerHTML = Number(subscribeNum.textContent) -1;
        subscribe.classList.remove('active');
        subscribeBell.classList.remove('active');
    }
    else

    return;
}


const moreBtn_channel = document.querySelector('.info_area .moreBtn');


moreBtn_channel.addEventListener('click', () => {
    
    if(moreBtn_channel.classList.contains('active')){
        
        moreBtn_channel.innerHTML = '더보기'
        moreBtn_channel.classList.toggle('active');
        return;
    }
    moreBtn_channel.innerHTML = '간략히'
    moreBtn_channel.classList.toggle('active');
});

const ham_bar = document.querySelector('header .ham_bar');
const sideBar = document.querySelector('section');
const sectionBar =document.querySelector('section .ham_bar');

const moreBtn_section = document.querySelector('section .moreBtn');
const hideBox = document.querySelector('section .hide');
const textBtn = document.querySelector('section .moreBtn .text');
const angleDown = document.querySelector('.fa-angle-down');
const overlay = document.querySelector('section .overlay');


ham_bar.addEventListener('click' , ( ) =>{
    
console.log(moreBtn_section);
    sideBar.classList.add('open');
});

sectionBar.addEventListener('click' , ( ) =>{
    sideBar.classList.remove('open');
});

moreBtn_section.addEventListener('click', () =>{

    if(hideBox.classList.toggle('active')){
        textBtn.innerHTML="간략히";
        angleDown.classList.add('rotate');
        return;
    }

    textBtn.innerHTML = "더보기";
    angleDown.classList.remove('rotate');
});

overlay.addEventListener('click' , ( ) =>{
    sideBar.classList.remove('open');
});

console.log(window.innerWidth);

// upNext move
const upNext = document.querySelector('.UpNext');
const secondary = document.querySelector('.secondary');
const main = document.querySelector('main');
const before_upNext = document.querySelector('main .comments');


if(window.innerWidth > 1020){
    const upNextParent = upNext.parentElement;
    upNextParent.removeChild(upNext);
    secondary.appendChild(upNext);
}

const mediaQuery = '(min-width: 1020px)';
const mediaQueryList = window.matchMedia(mediaQuery);

mediaQueryList.addEventListener('change', event => {  
    const upNextParent = upNext.parentElement;  
    console.log(window.innerWidth);
    console.log(upNextParent);
  if (event.matches) {
    console.log('The window is now 1020px or under');
    upNextParent.removeChild(upNext);
    secondary.appendChild(upNext);
  } else {
    console.log('The window is now over 1020px');
    upNextParent.removeChild(upNext);
    main.insertBefore(upNext,before_upNext);
  }
});