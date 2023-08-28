// вывод фото из директории 

$.ajax({
  type: "POST",
  url: "../test.php",
  success: function (data) {
    let data_photos = $.parseJSON(data)
    let photos = data_photos.slice(2)

    let container = document.querySelector('.carousel-slider-ya')
    photos.forEach((photo) => {
      let photoItemWrap = document.createElement('div')
      photoItemWrap.className = 'photo-mini-wrap'
      let photoItem = document.createElement('img')
      photoItem.className = 'photo-mini'
      photoItem.src = `../photo/${photo}`
      photoItem.alt = photo
      container.append(photoItemWrap)
      photoItemWrap.append(photoItem)
    })

    // слайдер
    const photosMini = document.querySelectorAll('.photo-mini');

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
  },
  error: function (jqXHR, text, error) {
    console.log(jqXHR, text, error)
  }
})

// +++++++++++++++++++++++++++++++++++++++
// раскомментировать для локальной отладки 
// вывод фото из директории 

// $.getJSON('../photo', photos => {

//   console.log('SDFASDF', photos);
//   let container = document.querySelector('.carousel-slider-ya')
//   photos.forEach((photo) => {
//     let photoItemWrap = document.createElement('div')
//     photoItemWrap.className = 'photo-mini-wrap'
//     let photoItem = document.createElement('img')
//     photoItem.className = 'photo-mini'
//     photoItem.src = `../photo/${photo}`
//     photoItem.alt = photo
//     container.append(photoItemWrap)
//     photoItemWrap.append(photoItem)
//   })

//   // слайдер
//   const photosMini = document.querySelectorAll('.photo-mini');

//   // форма просмотра фото
//   photosMini.forEach(item => {
//     item.addEventListener('click', e => {
//       const containerPrev = document.querySelector('.preview');
//       const closePrevBtn = document.querySelector('.btn-close-prev');
//       const currentPhotoUrl = e.target.getAttribute('src');
//       const viewPhoto = containerPrev.querySelector('img');
//       containerPrev.classList.remove('hide');

//       viewPhoto.setAttribute('src', currentPhotoUrl);

//       viewPhoto.addEventListener('click', e => {
//         e.stopPropagation(); //отключаю всплытие
//       });
//       containerPrev.addEventListener('click', () => {
//         containerPrev.classList.add('hide');
//       });
//       closePrevBtn.addEventListener('click', () => {
//         containerPrev.classList.add('hide');
//       });
//     });
//   });
//   // форма ввода номера
//   const inputPhone = document.querySelector('.input-phone');
//   inputPhone.addEventListener('click', () => {
//     inputPhone.value = '+7';
//   });
// });

//+++++++++++++++++++++++++++++++++++



// отправка формы
$(document).ready(function () {
  $('form').submit(function () {
    // Получение ID формы
    var formID = $(this).attr('id');
    // Добавление решётки к имени ID
    var formNm = $('#' + formID);
    $.ajax({
      type: 'POST',
      url: '../email2.php',
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

