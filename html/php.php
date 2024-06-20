<?php
$map['main'] = 'Главная';
$map['form'] = 'Подать заявку';
$map['rules'] = 'условия участия';
$map['events'] = 'События';
$map['nearest-event'] = 'Ближайшее событие';
$map['photo-gallery'] = 'Галерея фотографий';
$map['album'] = 'Альбом';
$map['contacts'] = 'Контакты';

$page = trim($_GET['page']);

if (empty($page) || empty($map[$page])){
    header ('Location: /~s334238/web/cursovaya/php.php');
    die();
}

echo '<ul class="menu>';

foreach($map as $key => $item){
    if ($page == $key){
        echo '<li><a class="active' . $item . '</a><li>';
    }
    else{
        echo '<li><a href="?page=' . $key . '">' . $item . '</a><li>';
    }
}

echo '</ul>';
echo '<h1>' . $map[$page] . '</h1>';
include 'pages/' . $page . '.php';