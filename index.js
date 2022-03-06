
console.log('Самооценка - 120')
console.log('слайдер в секции Welcome +24')
console.log('кастомный видеоплеер  +36')
console.log('слайдер в секции видео +20')
console.log('слайдер в секции эксплорер +10')
console.log('калькулятор билетов +10')
console.log('карта в секции contacts +12')

console.log('допфункционал - листание слайдеров(welcom video) стрелками клавиатуры +8 ');



//---стилизация прогресбаров видеоплеера
const video__range = document.querySelector('.video__range');
const sound__range = document.querySelector('.sound__range');
video__range.addEventListener('input', function() {
  const value = this.value;
  console.log(value);
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
  player.currentTime = player.duration / 100 * value;
})
sound__range.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
  player.volume = value / 100;
  changeSoundIco(value / 100);
})








//------------обработчик кнопки Buy tickets----------------------------------

const buyBtn = document.querySelector('.buy-now-btn');
const booking = document.querySelector('.booking');
const close = document.querySelector('.close-wnd');
const overlay = document.querySelector('.overlay');

buyBtn.onclick = function() {
  booking.classList.add('open-booking');
  overlay.classList.add('overlay-open');
}

close.onclick = function() {
  booking.classList.remove('open-booking');
  overlay.classList.remove('overlay-open');
}

//-----обработчик кнопки бургер меню


const burgerBtn = document.querySelector('.nav-btn');
let switcher = 1;
burgerBtn.onclick = function() {
  if (window.innerWidth > 1023) {
    if (switcher > 0) {
      switcher *= -1;
      document.querySelector('.welcome-frame').style = 'display: none;'
      document.querySelector('.header-nav-list').classList.add('header-nav-list-on');
      document.querySelector('.nav-btn').classList.add('animate');
      console.log(switcher);
      // document.querySelector('.nav-btn img').src = 'assets/svg/cls-burgr.svg';
    } else {
      switcher *= -1;
      document.querySelector('.header-nav-list').classList.remove('header-nav-list-on');
      document.querySelector('.nav-btn').classList.remove('animate');
      document.querySelector('.welcome-frame').style = 'display: block;'
      console.log('-----');

      //  document.querySelector('.nav-btn img').src = 'assets/svg/burger.svg';
    }
  }
  if (window.innerWidth < 1023 && window.innerWidth > 767) {
    if (switcher > 0) {
      switcher *= -1;
      document.querySelector('.header-768-wrapper').classList.add('show-menu');
      document.querySelector('.header-768-wrapper').classList.remove('header-768-wrapper');
      document.querySelector('.nav-btn').classList.add('animate');
      console.log('***', switcher, window.innerWidth);
      //document.querySelector('.nav-btn').classList.toggle('nav-btn-off')
      document.querySelector('.header-nav-list').style.opacity = '1';
    } else {
      switcher *= -1;
      document.querySelector('.show-menu').classList.add('header-768-wrapper');
      document.querySelector('.header-768-wrapper').classList.remove('show-menu');
      document.querySelector('.nav-btn').classList.remove('animate');
      //  document.querySelector('.nav-btn').classList.toggle('nav-btn');
    }

  }
  if (window.innerWidth < 768) {
    if (switcher > 0) {
      switcher *= -1;
      document.querySelector('.header-menu-420-inner').classList.add('header-menu-420-inner-show');
      document.querySelector('.welcome').style.opacity = '0';
      document.querySelector('.nav-btn').classList.add('animate');
    } else if (switcher < 0) {
      switcher *= -1;
      document.querySelector('.header-menu-420-inner').classList.remove('header-menu-420-inner-show');
      document.querySelector('.welcome').style.opacity = '1';
      document.querySelector('.nav-btn').classList.remove('animate');
    }
  }
}

//-----------------------------------------------------------------------------
window.onresize = function() {

    const navList = document.querySelector('.header-nav-list');
    const header768 = document.querySelector('.header-768-menu');

    if (window.innerWidth < 1023) {
      header768.appendChild(navList);
      if (switcher < 0) {
        switcher *= -1;
        document.querySelector('.show-menu').classList.add('header-768-wrapper');
        document.querySelector('.header-768-wrapper').classList.remove('show-menu');
        document.querySelector('.nav-btn').classList.remove('animate');
        document.querySelector('.welcome-frame').style = 'display: block;'
        document.querySelector('.welcome').style.opacity = '1';
      }
    } else if (window.innerWidth > 1023) {
      document.querySelector('.header-nav').appendChild(navList);
      if (switcher < 0) {
        switcher *= -1;
        document.querySelector('.header-nav-list').classList.remove('header-nav-list-on');
        document.querySelector('.nav-btn').classList.remove('animate');
        document.querySelector('.welcome-frame').style = 'display: block;'
        console.log('-----');
      }


    }
  }
  /* 
  document.onmouseover = function() {
      if (window.innerWidth < 1023) {
        const navList = document.querySelector('.header-nav-list');
        const header768 = document.querySelector('.header-768-menu');
        header768.appendChild(navList);
      }
    } */
  //-------------------------------------------------------------------------------

/* Swiper init */

document.querySelector('#welcome-swiper').style = 'margin-right:0';

let swiper = new Swiper(".mySwiper", {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
})

/* --------Custom buttons add ------------*/

document.querySelector('.left-arrow').onclick = function() {
  swiper.slidePrev(500)
}
document.querySelector('.right-arrow').onclick = function() {
  swiper.slideNext(500)
}


/* Slide's numbers and bullet color change */
const crLst = document.querySelectorAll('.carousel-lis-item');
swiper.on('slideChange', function() {

  let slideNum = swiper.realIndex;
  crLst.forEach((el) => {
    if (el.classList.contains('current-list-item')) {
      el.classList.remove('current-list-item')
    }
  })
  crLst[slideNum].classList.add('current-list-item');
  document.querySelector('.current-num').innerHTML = `0${swiper.realIndex + 1}`;
});

/*------------- Change slide by push bullet --------*/
crLst[0].onclick = () => {
  swiper.slideTo(1, 500)
};
crLst[1].onclick = () => {
  swiper.slideTo(2, 500)
};
crLst[2].onclick = () => {
  swiper.slideTo(3, 500)
};
crLst[3].onclick = () => {
  swiper.slideTo(4, 500)
};
crLst[4].onclick = () => {
  swiper.slideTo(0, 500)
};

/* Swiper video */

let videoSwiper = new Swiper('.videoSwiper', {
  slidesPerView: 3,
  spaceBetween: 42,
  loop: true,
  keyboard: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }

});

/* document.querySelector('#swip-slide').style = 'padding-left:12px;'; */

/* Custom buttons */

document.querySelector('#l-btn-video').onclick = function() {
  videoSwiper.slidePrev(500)
}
document.querySelector('#r-btn-video').onclick = function() {
  videoSwiper.slideNext(500)
}

/* Bullets */

const bullet = document.querySelectorAll('.bullet');
videoSwiper.on('slideChange', function() {

  let slideNum = videoSwiper.realIndex;
  bullet.forEach((el) => {
    if (el.classList.contains('current-bullet')) {
      el.classList.remove('current-bullet')
    }
  })
  bullet[slideNum].classList.add('current-bullet');


  player.src = `video/video${slideNum}.mp4`
  player.poster = `video/poster${slideNum}.jpg`;
  if (player.paused) {
    playBtnOnScreen.style.opacity = '1';
    playPauseBtn.classList.remove('pause-video');
    playPauseBtn.classList.add('tools-play-btn');
  }
});
/* switch on bullets push */
bullet[0].onclick = () => {
  videoSwiper.slideTo(3, 500);
}
bullet[1].onclick = () => {
  videoSwiper.slideTo(4, 500);
}
bullet[2].onclick = () => {
  videoSwiper.slideTo(0, 500);
}
bullet[3].onclick = () => {
  videoSwiper.slideTo(1, 500);
}
bullet[4].onclick = () => {
  videoSwiper.slideTo(2, 500);
}



/*---- Player ----*/

const player = document.querySelector('.viewer');
const playPauseBtn = document.querySelector('.tools-play-btn');
const playBtnOnScreen = document.querySelector('.play-btn');
const soundBtn = document.querySelector('.tools-sound-btn');
const videoPlayer = document.querySelector('.player');
const fullScr = document.querySelector('.foolscr-on');



function playPause() {
  const method = player.paused ? 'play' : 'pause';
  player[method]();
  if (!(player.paused)) {
    playBtnOnScreen.style.opacity = '0';
    playPauseBtn.classList.add('pause-video');
    playPauseBtn.classList.remove('tools-play-btn');

  } else {
    playBtnOnScreen.style.opacity = '1';
    playPauseBtn.classList.remove('pause-video');
    playPauseBtn.classList.add('tools-play-btn');
  }
}

player.onclick = playPause;
playPauseBtn.onclick = playPause;
playBtnOnScreen.onclick = playPause;


function changeSoundIco(num) {
  if (!num) {
    soundBtn.classList.add('mute');
    soundBtn.classList.remove('tools-sound-btn')
  } else {
    soundBtn.classList.remove('mute');
    soundBtn.classList.add('tools-sound-btn')
  }
}
/* Video progress bar */
player.addEventListener('timeupdate', function() {
  /* console.log(player.currentTime); */
  const num = player.currentTime / player.duration * 100
  video__range.style.background = `linear-gradient(to right, #710707 0%, #710707 ${num}%, #fff ${num}%, white 100%)`
  video__range.value = num;
})

player.addEventListener('ended', function() {
  playBtnOnScreen.style.opacity = '1';
  playPauseBtn.classList.remove('pause-video');
  playPauseBtn.classList.add('tools-play-btn');
})

/* Toggle динамик */
let vol;
soundBtn.addEventListener('click', muteToggle)

function muteToggle() {

  if (player.volume) {
    vol = player.volume;
    console.log(vol);
  }
  if (player.volume) {
    player.volume = 0;
    changeSoundIco(0);
    sound__range.value = 0;
    sound__range.style.background = `linear-gradient(to right, #710707 0%, #710707 ${0}%, #fff ${0}%, white 100%)`

  } else {
    player.volume = vol;
    changeSoundIco(vol);
    sound__range.value = vol * 100;
    sound__range.style.background = `linear-gradient(to right, #710707 0%, #710707 ${vol*100}%, #fff ${vol*100}%, white 100%)`
  }
}


/* -----Fullscreen mode -----*/

fullScr.addEventListener('click', () => {
  player.requestFullscreen();
})

/*--- Keyboard events ---*/

document.addEventListener('keypress', (ev) => {
  console.log(ev.key);
  if (ev.code == 'Space') {
    console.log('+++');
    playPause();
    ev.preventDefault();
  } else if (ev.code == 'KeyM') {
    muteToggle();
  } else if (ev.key == '>') {
    player.playbackRate -= 0.1;
  } else if (ev.key == '<') {
    player.playbackRate += 0.1;
  } else if (ev.code == 'KeyF')
    player.requestFullscreen();
})