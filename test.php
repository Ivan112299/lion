<?php
$home = $_SERVER['DOCUMENT_ROOT'];
$dir    = '/photo';
$files = scandir($home . $dir, SCANDIR_SORT_ASCENDING);

 echo exit(json_encode($files));
?>