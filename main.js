const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')
const photosMini = document.querySelectorAll('.photo-mini')
const carousel = document.querySelector('.carousel')
const firstImg = carousel.querySelectorAll('img')[0];
const thridImg = carousel.querySelectorAll('img')[2];
const countPhoto = carousel.querySelectorAll('img').length;
const counterPhoto = document.querySelector('.numof');

buttonNext.addEventListener('click', nextPhoto)
buttonPrev.addEventListener('click', prevPhoto)

console.log('скролл на ините', carousel.scrollLeft)
let isDragStart = false;
let prevPageX;
let prevScrollLeft;
let positionDiff;
let firstImgWidth = firstImg.clientWidth + 10;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth + 1           // разобраться что за единичка

init()
// counter ()

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

function counter () {
    console.log('Вызов каунтера', countPhoto)
    counterPhoto.innerHTML = countPhoto.toString()
}

function nextPhoto(){
    carousel.scrollLeft += firstImgWidth
    setTimeout(() => showArrow(), 100);
}

function prevPhoto(){
    carousel.scrollLeft -= firstImgWidth
    setTimeout(() => showArrow(), 60);
}

const autoSlide = () => {
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 10;
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




function renderPhoto(){

}





// отправка формы
$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: '/send.php',
            data: formNm.serialize(),
            beforeSend: function () {
                // Вывод текста в процессе отправки
                $(formNm).html('<p style="text-align:center">Отправка...</p>');
            },
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html('<p style="text-align:center">'+data+'</p>');
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });
        return false;
    });
});