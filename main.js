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