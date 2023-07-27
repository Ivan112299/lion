// вывод фото из директории 

$.getJSON('./photo', photos => {

  console.log('SDFASDF', photos);
  let container = document.querySelector('.carousel-slider-ya')
    photos.forEach((photo) => {
      let photoItem = document.createElement('img')
      photoItem.className = 'photo-mini'
      photoItem.src = `photo/${photo}`
      photoItem.alt = photo
      container.append(photoItem)
    }) 

    // слайдер
    const buttonPrev = document.querySelector('.btn-prev');
    const buttonNext = document.querySelector('.btn-next');
    const photosMini = document.querySelectorAll('.photo-mini');
    const carousel = document.querySelector('.carousel');
    const firstImg = carousel.querySelectorAll('img')[0];
    const countPhoto = carousel.querySelectorAll('img').length;
    const counterPhoto = document.querySelector('.numof');

    let firstImgWidth = firstImg.clientWidth;
    let curPhoto = 1;

    buttonNext.addEventListener('click', nextPhoto);
    buttonPrev.addEventListener('click', prevPhoto);

    function nextPhoto() {
      carousel.scrollLeft += firstImgWidth;
      counter(true);
      buttonNext.classList.add('disable');
      buttonPrev.classList.add('disable');
      setTimeout(() => {
        buttonNext.classList.remove('disable');
        buttonPrev.classList.remove('disable');
      }, 400);
    }

    function prevPhoto() {
      carousel.scrollLeft -= firstImgWidth;
      counter(false);
      buttonNext.classList.add('disable');
      buttonPrev.classList.add('disable');
      setTimeout(() => {
        buttonNext.classList.remove('disable');
        buttonPrev.classList.remove('disable');
      }, 400);
    }

    // форма просмотра фото
    photosMini.forEach(item => {
      item.addEventListener('click', e => {
        const containerPrev = document.querySelector('.preview');
        const closePrevBtn = document.querySelector('.btn-close-prev');
        const currentPhotoUrl = e.target.getAttribute('src');
        const viewPhoto = containerPrev.querySelector('img');
        containerPrev.classList.remove('hide');

        viewPhoto.setAttribute('src', currentPhotoUrl);

        viewPhoto.addEventListener('click', e => {
          e.stopPropagation(); //отключаю всплытие
        });
        containerPrev.addEventListener('click', () => {
          containerPrev.classList.add('hide');
        });
        closePrevBtn.addEventListener('click', () => {
          containerPrev.classList.add('hide');
        });
      });
    });
    // форма ввода номера
    const inputPhone = document.querySelector('.input-phone');
    inputPhone.addEventListener('click', () => {
      inputPhone.value = '+7';
    });

    // уменьшение хедера
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');

    window.addEventListener('scroll', function () {
      if (window.screen.width < 600) return;
      let img = logo.querySelector('img');
      let a = window.scrollY;
      if (a > 0) {
        img.style.width = '255px';
        header.style.height = '155px';
      } else if (a == 0) {
        img.style.width = '355px';
        header.style.height = '205px';
      }
});



// каунтер на слайдере
counter();
function counter(next) {
  if (next && curPhoto < countPhoto) {
    curPhoto++;
    buttonPrev.classList.remove('disable');
    if (curPhoto >= countPhoto) {
      buttonNext.classList.add('disable');
    }
  } else if (!next && curPhoto > 1) {
    curPhoto--;
    buttonNext.classList.remove('disable');
    if (curPhoto <= 1) {
      buttonPrev.classList.add('disable');
    }
  }
  counterPhoto.innerHTML = `${curPhoto}/${countPhoto.toString()}`;
}
});





// отправка формы
$(document).ready(function () {
  $('form').submit(function () {
    // Получение ID формы
    var formID = $(this).attr('id');
    // Добавление решётки к имени ID
    var formNm = $('#' + formID);
    $.ajax({
      type: 'POST',
      url: '/email2.php',
      data: formNm.serialize(),
      beforeSend: function () {
        // Вывод текста в процессе отправки
        $(formNm).html('<p style="text-align:center">Отправка...</p>');
      },
      success: function (data) {
        console.log('успешно');
        // Вывод текста результата отправки
        $(formNm).html(
          '<p style="text-align:center; width:100%">Спасибо, мы свяжемся с вами в ближайщее время!</p>'
        );
      },
      error: function (jqXHR, text, error) {
        // Вывод текста ошибки отправки
        $(formNm).html(error);
      }
    });
    return false;
  });
});
