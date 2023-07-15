const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')
const photosMini = document.querySelectorAll('.photo-mini')
const carousel = document.querySelector('.carousel')
const firstImg = carousel.querySelectorAll('img')[0];
// const curPhoto = carousel.querySelectorAll('img')[1];
const countPhoto = carousel.querySelectorAll('img').length;
const counterPhoto = document.querySelector('.numof');

const header = document.querySelector('header')
const logo = document.querySelector('.logo')

buttonNext.addEventListener('click', nextPhoto)
buttonPrev.addEventListener('click', prevPhoto)

console.log('скролл на ините', carousel.scrollLeft)
let isDragStart = false;
let prevPageX;
let prevScrollLeft;
let positionDiff;
let firstImgWidth = firstImg.clientWidth;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth + 1           // разобраться что за единичка
let curPhoto = 1
init()
counter ()

window.addEventListener('scroll', function() {
    if (window.screen.width < 600) return;
    let img = logo.querySelector('img')
    let a  = window.scrollY
    if (a > 0) {
        img.style.width = '255px'
        // img.classList.add('width-zoom-in')
        header.style.height = '155px'
    } else if (a == 0) {
        img.style.width = '355px'
        header.style.height = '255px'
    } 
  });

function showArrow (){
    // if (carousel.scrollLeft == 0) {
    //     buttonNext.style.display = "block"
    //     buttonPrev.style.display = "none"
    // }
    // if (carousel.scrollLeft > 0 && carousel.scrollLeft < scrollWidth) {
    //     buttonPrev.style.display = "block"
    //     buttonNext.style.display = "block"
    // }
    // if (carousel.scrollLeft == scrollWidth) {
    //     buttonPrev.style.display = "block"
    //     buttonNext.style.display = "none"
    // }
}

function counter (next) {
    

    if (next && curPhoto < countPhoto) {
        console.log('лист вправо')
        curPhoto++
        buttonPrev.classList.remove('disable')
        // buttonPrev.removeAttribute(disabled)
        if (curPhoto >= countPhoto) {
            buttonNext.classList.add('disable')
            // buttonNext.setAttribute(disabled)
        }
    } else if (!next && curPhoto > 1) {
        console.log('лист влево')
        curPhoto--
        buttonNext.classList.remove('disable')
        // buttonNext.removeAttribute(disabled)
        if (curPhoto <= 1) {
            buttonPrev.classList.add('disable')
            // buttonPrev.setAttribute(disabled)
        }
    } 
    counterPhoto.innerHTML = `${curPhoto}/${countPhoto.toString()}`
}

function changeCounter() {

}

function nextPhoto(){
    carousel.scrollLeft += firstImgWidth
    counter(true)
    setTimeout(() => showArrow(), 100);
}

function prevPhoto(){
    carousel.scrollLeft -= firstImgWidth
    counter(false)
    setTimeout(() => showArrow(), 60);
}

const autoSlide = () => {
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth;
    let valDiff = firstImgWidth - positionDiff;
    let startScrollLeft = carousel.scrollLeft
    if(startScrollLeft > prevScrollLeft) {
        console.log('скролим вправо')
        carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDiff :  -positionDiff

    }
    if(startScrollLeft < prevScrollLeft) {
        console.log('скролим влево')
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDiff :  -positionDiff
    }

}
const dragStart = (e) => {
    console.log('вызов dragStart')
    // обновляю переменные при старте скролла
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft

}
const dragStop = () => {
    if(!isDragStart) return
    console.log('вызов dragStop')
    isDragStart = false;
    carousel.classList.add('dragging')
    // showArrow ()
    autoSlide()
}
function drag(e){
    if(!isDragStart) return;
    console.log('вызов drag')
    e.preventDefault();
    carousel.classList.add('dragging')
    
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
    carousel.scrollLeft = prevScrollLeft - positionDiff
   
}
carousel.addEventListener('mousemove', drag)
carousel.addEventListener('touchmove', drag)

carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('touchstart', dragStart)

carousel.addEventListener('mouseup', dragStop)
carousel.addEventListener('touchend', dragStop)
carousel.addEventListener('mouseleave', dragStop)




function init(){
    
    // thridImg.style.width = '500px';
    // thridImg.style.height = '500px';
}





// отправка формы
// $(document).ready(function () {
//     $("form").submit(function () {
//         // Получение ID формы
//         var formID = $(this).attr('id');
//         // Добавление решётки к имени ID
//         var formNm = $('#' + formID);
//         $.ajax({
//             type: "POST",
//             url: '/send.php',
//             data: formNm.serialize(),
//             beforeSend: function () {
//                 // Вывод текста в процессе отправки
//                 $(formNm).html('<p style="text-align:center">Отправка...</p>');
//             },
//             success: function (data) {
//                 // Вывод текста результата отправки
//                 $(formNm).html('<p style="text-align:center">'+data+'</p>');
//             },
//             error: function (jqXHR, text, error) {
//                 // Вывод текста ошибки отправки
//                 $(formNm).html(error);
//             }
//         });
//         return false;
//     });
// });