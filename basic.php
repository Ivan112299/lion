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
        </br>
        </br>
        </br>
        <p>Название файла должно быть цифрой от 0 до 999</p>
        <p>Файлы загружаются по одному</p>
        <p>Чем ниже цифра тем ближе будет файл к началу списка</p>
    </body>
</html>