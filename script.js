// navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', ()=> {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
// end of navbar

// section 2 video 
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons button i')
const bar = document.querySelector('.video-bar')

const playPause = () =>{
    if(video.paused){
        video.play()
        btn.className='far fa-pause-circle'
        video.style.opacity='0.7'
    }else{
        video.pause()
        btn.className='far fa-play-circle'
        video.style.opacity='0.3'
    }
}

btn.addEventListener('click', ()=>{
    playPause()
})

video.addEventListener('timeupdate',()=>{
    console.log(video.currentTime, video.duration)
    const barWidth= video.currentTime / video.duration;
    bar.style.width= `${barWidth * 100}%`
    if (video.ended){
        btn.className='far fa-play-circle'
        video.style.opacity='o.3'
    }
})
// end of section 2 video 

// section 3 pricing cards
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
// end of section 3 pricing cards