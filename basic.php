<?php
if(isset($_FILES) && $_FILES['inputfile']['error'] == 0){ // Проверяем, загрузил ли пользователь файл
$destiation_dir = dirname(__FILE__) .'/photo/'.$_FILES['inputfile']['name']; // Директория для размещения файла
move_uploaded_file($_FILES['inputfile']['tmp_name'], $destiation_dir ); // Перемещаем файл в желаемую директорию
 // Оповещаем пользователя об успешной загрузке файла
}
else{
echo 'Ошибка загрузки файла'; // Оповещаем пользователя о том, что файл не был загружен
}

?>
<html>
    <head>
    <title>Добавление фото</title>
    <meta charset="UTF-8" />
    </head>
    <body>
        <h1>Добавление фото в галерею</h1>
        <form method="post" action="basic.php" enctype="multipart/form-data" >
        <input type="file" id="inputfile" name="inputfile"></br> </br>
        <input type="submit" value="Нажмите для загрузки">
        </form>
        <br>
        <br>
        <br>
        <p>Фото отображаются в слайдере в зависимости он номера в их названии,<br>чем ниже цифра тем ближе к началу соайдера будет фото</p>
        <p>Текущая последовательность фото:</p>
        <div class="admin-cont">

        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script type="module" src="main-admin.js"></script>
        <link rel="stylesheet" href="admin-main.css" />
    </body>
</html>
