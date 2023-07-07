const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')
const photosMini = document.querySelectorAll('.photo-mini')

buttonNext.addEventListener('click', nextPhoto)
buttonPrev.addEventListener('click', prevPhoto)

init()

function init(){
    var elementsPhoto = photosMini
    console.log('elementsPhoto', elementsPhoto)
}


function nextPhoto(){
    console.log('nextPhoto')
}

function prevPhoto(){
    console.log('prevPhoto')
}

function renderPhoto(){

}