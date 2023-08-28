<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     
    <link rel="icon" href="favicon.ico" />
    <link rel="stylesheet" href="main.css" />
   
    <!-- 32×32 -->
    <title>Lion - мебельная компания</title>
  </head>
  <body>
      <?php
$dir    = '/photo';
$files1 = scandir($dir);
$files2 = scandir($dir, SCANDIR_SORT_DESCENDING);

print_r($files1);
print_r($files2);
?>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        'script',
        'https://mc.yandex.ru/metrika/tag.js',
        'ym'
      );

      ym(94384895, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      });
    </script>
    <noscript>
      <div>
        <img
          src="https://mc.yandex.ru/watch/94384895"
          style="position: absolute; left: -9999px"
          alt=""
        />
      </div>
    </noscript>
    <!-- /Yandex.Metrika counter -->
    <header>
      <nav>
        <a href="" class="logo">
          <img src="icons/logo.png" alt="Lion" />
        </a>
        <menu>
          <li><a href="#block_2">Проекты</a></li>
          <li><a href="#block_3">Записаться</a></li>
          <li><a href="#block_1">О нас</a></li>
          <li><a href="#block_4">Партнеры</a></li>
          <li><a href="#block_5">Контакты</a></li>
        </menu>
        <div class="phone">
          <a href="tel:+79206763078">
            <img src="icons/phone.png" alt="" /> +7 (920) 676-30-78</a
          >
        </div>
      </nav>
    </header>
    <div class="about">
      <div class="image">
        <img src="icons/kichen_1.jpg" alt="Кухня" />
      </div>
      <div class="text-wrapper">
        <div class="text">
          <h1>Мебельная компания LION</h1>
          <p>
            Наша компания на рынке уже более 10 лет Работаем с проектами любого
            масштаба Делаем мебель не только для дома, НО и для бизнеса.
            <br /><br />
            Используем только самые качественные материалы . Качественная
            фурнитура - это залог долговечности вашего изделия. Понимая важность
            фурнитуры для надежной работы мы отдает предпочтение ведущим
            европейским производителям.
            <br /><br />
            Гарантия 2 года.
            <br /><br />
            Работаем индивидуально с каждым заказчиком. Делаем современный,
            удобный и продуманный дизайн-проект. Учитываем все особенности при
            проектировании. Озвучиваем реальные сроки и соблюдаем их.
            <br /><br />
            Репутация компании заработанная годами плодотворной работы
          </p>
          <br />
          <div class="btn-appointment">
            <a class="btn-in-head" href="#block_3">Записаться на замер</a>
          </div>
        </div>
        <div class="text-fake"></div>
      </div>
    </div>
    <div class="slider slider-ya " id="block_2">
      <div class="full-photo"></div>
      <div class="wrapper">
        <div class="carousel carousel-slider-ya">
        </div>
        <div class="buttons">
          <button class="btn-prev"></button>
          <p class="numof"></p>
          <button class="btn-next"></button>
        </div>
      </div>
    </div>
    <div class="preview hide">
      <div class="photo-prev">
        <img src="photo/01.jpg" alt="Фото" draggable="false" />
      </div>
      <button class="btn btn-close-prev">Закрыть</button>
    </div>
    <div class="contacts" id="block_3">
      <div class="title">
        <h2>Оставьте заявку на замер технолога</h2>
        <div class="subtitle">
          Мы свяжемся с Вами, договоримся о замере в удобное для Вас время,<br />
          технолог выполнит замер и мы подготовим проект Вашей мебели по
          размерам помещения
        </div>
      </div>
      <form
        class="form-box"
        action="email2.php"
        method="post"
        id="form-request"
      >
        <p style="text-align: center" class="cuccess-send hide">
          Спасибо, мы свяжемся с вами в ближайщее время!
        </p>
        <div class="input-box">
          <input
            type="text"
            name="name"
            class="item"
            placeholder=" "
            required
            id="username"
          />
          <label for="name">Ваше имя</label>
        </div>
        <div class="input-box">
          <input
            type="tel"
            name="phone"
            class="item input-phone"
            placeholder=" "
            id="phone"
            pattern="+7[0-9]{10}"
            maxlength="12"
            required
          />
          <label for="phone">Номер телефона для связи</label>
        </div>
        <div class="input-box">
          <input
            type="text"
            name="message"
            class="item"
            placeholder=" "
            id="message"
          />
          <label for="message">Оставьте комментарий, если это необходимо</label>
        </div>
        <div class="button-box">
          <button class="btn" type="submit">Оставить заявку</button>
        </div>
      </form>
      <small
        >Нажимая на кнопку "Оставить заявку", Вы даете согласие на
        <a href="persdata.html">обработку персональных данных</a></small
      >
    </div>
    <div class="video-wrapper" id="block_1">
      <div class="video-wrap">
        <video
          id="my-video"
          class="video-js video-1"
          controls
          preload="auto"
          width="320"
          height="585"
          poster="icons/kichen_video_1.jpg"
          data-setup="{}"
        >
          <source src="video/video-1.mp4" type="video/mp4" />
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank"
              >supports HTML5 video</a
            >
          </p>
        </video>
      </div>
      <div class="about-video">
        <h2>5 причин заказать мебель у нас</h2>
        <p>
          <img src="icons/check-mark.png" alt="" /> Качество. Мы работаем только
          с высококачественными материалами и фурнитурой. Даем гарантию 2 года.
        </p>
        <p>
          <img src="icons/check-mark.png" alt="" /> Имеем колоссальный опыт
          работы в данной сфере (с 2007г.)
        </p>
        <p>
          <img src="icons/check-mark.png" alt="" /> Работаем индивидуально с
          каждым заказчиком. Делаем современный, удобный и продуманный
          дизайн-проект.
        </p>
        <p>
          <img src="icons/check-mark.png" alt="" /> Учитываем все индивидуальные
          особенности при проектировании.
        </p>
        <p>
          <img src="icons/check-mark.png" alt="" /> Сроки исполнения. Озвучиваем
          реальные сроки и соблюдаем их.
        </p>
      </div>

      <script src="https://vjs.zencdn.net/8.3.0/video.min.js"></script>
    </div>
    <div class="clients" id="block_4">
      <div class="title"><h2>Наши партнеры</h2></div>
      <div class="brands">
        <img src="brands/avengo.png" alt="Айвенго" />
        <img src="brands/riat.jpg" alt="Риат-маркет" />
        <img src="brands/renault.png" alt="Рено" />
        <img src="brands/olimp.jpg" alt="Олимпия" />
        <img src="brands/gazprom.png" alt="Газпром" />
        <img src="brands/energy.png" alt="Радио-энерджи" />
      </div>
    </div>
    <div class="map-wrapper" id="block_5">
      <div class="title"><h2>Контакты и адрес:</h2></div>
      <div class="adress-wrapper">
        <div class="attention">
          <p>
            Внимание!<br />
            Посещение офиса возможно по предварительной записи
          </p>
        </div>
        <div class="adress">
          <a>
            <img src="icons/placeholder.png" alt="" /> Рабфаковская, 17 <br />
            2 этаж, офис 4</a
          >
          <a href="tel:+79206763078">
            <img src="icons/phone.png" alt="" /> +7 (920) 676-30-78</a
          >
          <a> <img src="icons/email.png" alt="" /> lion37mk@mail.ru</a>
          <a href="https://vk.com/lion37mk">
            <img src="icons/vk (1).png" alt="" /> vk.com/lion_37mk</a
          >
        </div>
      </div>
      <div class="map-full-hd">
        <script
          type="text/javascript"
          charset="utf-8"
          async
          src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3a9414273e5a5d85d840edf48c4e46fa238f83341234c6339874813fb2e195cf&amp;width=100%&amp;height=80%&amp;lang=ru_RU&amp;scroll=false"
        ></script>
      </div>
      <div class="map-mob">
        <!-- <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3a9414273e5a5d85d840edf48c4e46fa238f83341234c6339874813fb2e195cf&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"></script> -->
        <a
          href="https://yandex.ru/maps/?um=constructor%3A3a9414273e5a5d85d840edf48c4e46fa238f83341234c6339874813fb2e195cf&amp;source=constructorStatic"
          target="_blank"
          ><img
            src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A3a9414273e5a5d85d840edf48c4e46fa238f83341234c6339874813fb2e195cf&amp;width=300&amp;height=450&amp;lang=ru_RU"
            alt=""
            style="border: 0"
        /></a>
      </div>
    </div>
    <footer>
      <a href="" class="logo">
        <img src="icons/logo.png" alt="Lion" />
      </a>
      <div class="col-2"></div>
      <div class="col-3"></div>
      <div class="nav">
        <li><a href="#block_1">О нас</a></li>
        <li><a href="#block_2">Проекты</a></li>
        <li><a href="#block_3">Записаться</a></li>
      </div>
      <div class="contacts-footer">
        <div class="phone">
          <a href="tel:+79206763078">
            <img src="icons/phone.png" alt="" /> +7 (920) 676-30-78</a
          >
        </div>
        <div class="phone">
          <a> <img src="icons/email.png" alt="" /> lion37mk@mail.ru</a>
        </div>
      </div>
    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    
    <link href="https://vjs.zencdn.net/8.3.0/video-js.css" rel="stylesheet" />

    <script type="module" src="main.js"></script>
    <meta name="referrer" content="no-referrer" />
  </body>
</html>
