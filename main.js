const imgExample = document.querySelector('.stack-slider__slide1')
const imgExample2 = document.querySelector('.stack-slider__slide2')
const imgExample3 = document.querySelector('.stack-slider__slide3')
const imgExample4 = document.querySelector('.stack-slider__slide4')
const imgExample5 = document.querySelector('.stack-slider__slide5')
const imgExample6 = document.querySelector('.stack-slider__slide6')
const imgExample7 = document.querySelector('.stack-slider__slide7')
const imgExample8 = document.querySelector('.stack-slider__slide8')
const imgExample9 = document.querySelector('.stack-slider__slide9')
const imgExample10 = document.querySelector('.stack-slider__slide10')

function openQrCode() {
        imgExample.classList.add('active') 
        imgExample2.classList.add('active')
        imgExample3.classList.add('active')
        imgExample4.classList.add('active')
        imgExample5.classList.add('active')
        imgExample6.classList.add('active')
        imgExample7.classList.add('active')
        imgExample8.classList.add('active')
        imgExample9.classList.add('active')
        imgExample10.classList.add('active')
    }

function closeQrCode() {
    imgExample.classList.remove('active')
    imgExample2.classList.remove('active')
    imgExample3.classList.remove('active')
    imgExample4.classList.remove('active')
    imgExample5.classList.remove('active')
    imgExample6.classList.remove('active')
    imgExample7.classList.remove('active')
    imgExample8.classList.remove('active')
    imgExample9.classList.remove('active')
    imgExample10.classList.remove('active')
}

/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

const swiperService = new Swiper('.swiper-container-service', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination-service'
    },
    mousewheel: true,
    keyboard: true,
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true,
      }
    }
  })

  const swiperGerenciamento = new Swiper('.swiper-container-gerenciamento', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination-gerenciamento'
    },
    mousewheel: true,
    keyboard: true,
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true,
      }
    }
  })

  const swiperConstruction = new Swiper('.swiper-container-construction', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination-construction'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 4,
        setWrapperSize: true,
    
        
      }
    }
  })

  const swiperFinishing = new Swiper('.swiper-container-finishing', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination-finishing'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 4,
        setWrapperSize: true,
    
        
      }
    }
  })

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 999,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text, #about .stats ,
  #services header, #services .service-card, #services .service-card2 ,
 #constructions .construction-slider ,  #constructions .construction-slider2 , 
  #constructions .construction-btn ,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links ,
  footer .brand, footer .social
  `,
  { interval: 200 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
    })


const openGallery = document.querySelector('.construction-btn')
const openGalleryFinishing = document.querySelector('.construction-btn-finishing')
const gallery = document.querySelector('.construction-gallery')
const galleryAnimation = document.querySelector('.construction-animation')
const galleryFinishing = document.querySelector('.construction-gallery-finishing')
const galleryAnimationFinishing = document.querySelector('.construction-animation-finishing')

function galleryActive () {
        gallery.classList.toggle('gallery-active')
        galleryAnimation.classList.toggle('gallery-show')
    } 

function galleryActiveFinishing () {
    galleryFinishing.classList.toggle('gallery-active-finishing')
    galleryAnimationFinishing.classList.toggle('gallery-show-finishing')
} 


let valueDisplays = document.querySelectorAll(".num")
let interval = 9999
let about = document.getElementById("about")

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        if (window.pageYOffset >= about.offsetTop) {
            startValue += 5
            valueDisplay.textContent = startValue
        }
         if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
})


  
