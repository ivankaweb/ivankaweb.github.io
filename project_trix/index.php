<?
  session_start();
  require_once $_SERVER['DOCUMENT_ROOT'].'/engine/classes/Main.class.php';
  $Engine = new Engine();

    if(isset($_POST['buy'])) {
        $Engine->buy_price($_POST['name'], '99', "buy", $_POST['price']);
    }
    require $_SERVER['DOCUMENT_ROOT'].'/config.php';

?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRIX</title>
    <link rel="stylesheet" type="text/css" href="css/main.css">

    <head>
        <?
	include $_SERVER['DOCUMENT_ROOT'].'/head.php'; 
?>
        <title>Trix RP - Лучший Role Play сервер в ГТА 5 Онлайн | trixrp.ru</title>
    </head>
</head>

<body>
    <header>
        <div class="container">
            <div class="header">
                <div>
                    <a class="btn-trix btn-donate" href="/pages/donate">Пополнить Счет</a>
                </div>
                <div class="menu-nav">
                    <ul class="nav">
                        <li class="nav-list"><a class="nav-link" target="_blank" href="https://">Форум</a></li>
                        <li class="nav-list"><a class="nav-link" href="/pages/donate">Магазин</a></li>
                        <li class="nav-list"><a class="nav-link" href="/pages/lk">Личный кабинет</a></li>
                    </ul>
                </div>
            </div>
            <div class="header-logo">
                <div class="header-logo-trix" href="">
                    <img src="img/logo.png" alt="Logo">
                </div>
            </div>
        </div>
    </header>
        <div class="header-mobile">
            <div class="header-logo">
                <a class="header-logo-trix" href="">
                    <img src="img/Logo TX 1.png" alt="Logo">
                </a>
            </div>
            <div onclick="menuToggle()" class="menu-icon"></div>
            <div class="nav-mobile">
                <div class="nav-mobile-content">
                    <ul class="nav-mobile-list">
                        <li class="nav-mobile-list-item"><a href="" class="nav-mobile-list-link">Личный кабинет</a></li>
                        <li class="nav-mobile-list-item"><a href="" class="nav-mobile-list-link">Магазин</a></li>
                        <li class="nav-mobile-list-item"><a href="" class="nav-mobile-list-link">Форум</a></li>
                    </ul>
                    <div class="nav-mobile-bottom">
                        <a href="">Политика конфиденциальности</a>
                        <a href="">Пользовательское соглашение</a>
                    </div>
                </div>
            </div>
        </div>
    
        <section class="play">
        <div class="container">
            <div class="play-content">
                <div class="play-content-btn">
                    <a class="btn-trix btn-play" href="">ИГРАТЬ</a>
                </div>
                <div class="play-content-img">
                    <img src="img/Cars 1.png" alt="Cars">
                </div>
            </div>
            <div class="play-text">
                <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" <span> для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</span> 
                </p>
                <a class="mobile-btn-details" href="">подробнее...</a>
            </div>
            <div class="city-img">
                <img src="img/City 1.png" alt="City">
                <img src="img/Cars 3 back_1 1.png" alt="Cars">
            </div>
        </div>
    </section>
    <section>
        <div class="social-img">
            <img src="img/girl_bg.png" alt="Girl">
        </div>
        <div class="socials">
            <ul class="social-icon">
                <li class="social-icon-list">
                    <a class="social-icon-link" href="https://discord.gg/zrpNd7fxXS"><img src="img/socials/DC v3.png" alt=""></a>
                </li>
                <li class="social-icon-list">
                    <a class="social-icon-link" href="https://vk.com/trixrp_gta5"><img src="img/socials/VK v3.png" alt=""></a>
                </li>
                <li class="social-icon-list">
                    <a class="social-icon-link" href="https://www.youtube.com/channel/UCIkuiM57KQL5d93o1uf_Kwg"><img src="img/socials/YT v3.png" alt=""></a>
                </li>
                <li class="social-icon-list">
                    <a class="social-icon-link" href=""><img src="img/socials/TT v3.png" alt=""></a>
                </li>
                <li class="social-icon-list">
                    <a class="social-icon-link" href="https://t.me/trixrp_gta5"><img src="img/socials/TG v3.png" alt=""></a>
                </li>
            </ul>
        </div>
    </section>
    <section class="gameflow">
        <div class="gameflow-content">
            <div class="gameflow-img">
                <img src="img/Mike 1.png" alt="Mike">
            </div>
            <div class="gameflow-list-content">
                <div class="gameflow-list">
                    <div class="gameflow-card-01">
                        <div>
                            <img src="img/Plate1 v5 1.png" alt="GTA">
                        </div>
                        <span class="number">1</span>
                        <div class="card-content">
                            <span class="name">УСТАНОВИ GTA 5</span>
                            <p class="desc">ПОНАДОБИТСЯ УСТАНОВИТЬ ЛИЦЕНЗИОННУЮ ВЕРСИЮ ИГРЫ.</p>
                            <a class="btn-trix btn-gameflow" href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/">Купить Игру</a>
                        </div>
                    </div>
                    <div class="gameflow-card-02">
                        <div>
                            <img src="img/Plate2 v5 1.png" alt="RP">
                        </div>
                        <span class="number">2</span>
                        <div class="card-content">
                            <span class="name">УСТАНОВИ RAGE MP</span>
                            <p class="desc">СКАЧАЙ И УСТАНОВИ RAGE:MP. ОН БЕСПЛАТНЫЙ.</p>
                            <a class="btn-trix btn-gameflow" href="https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe">Загрузить</a>
                        </div>
                    </div>
                    <div class="gameflow-card-03">
                        <div>
                            <img src="img/Plate 3 v 5 1.png" alt="TRIX">
                        </div>
                        <span class="number">3</span>
                        <div class="card-content">
                            <span class="name">НАЧНИ ИГРУ НА TRIX</span>
                            <p class="desc">В RAGE MP В ПОИСКЕ ВВЕДИ “TRIX RP” ИЛИ ПОДКЛЮЧИСЬ ПО АДРЕСУ</p>
                            <span class="server-address">s1.trixrp.ru:22005</span>
                            <a class="btn-trix btn-gameflow" href="rage://v/connect?ip=s1.trixrp.ru:22005">Начать Играть</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="mobile-game">
        <div class="mobile-game-card-01">
            <a href="" class="name">УСТАНОВИТЕ GTA 5</a>
            <img src="img/Triang Top 2.png" alt="GTA">
        </div>
        <div class="mobile-game-card-02">
            <img src="img/Triang Mid 1 .png" alt="MID">
            <a href="" class="name">УСТАНОВИТЕ МУЛЬТИПЛЕЕР RAGE</a>
        </div>
        <div class="mobile-game-card-03">
            <a href="" class="name">НАЧНИТЕ ИГРУ НА TRIX</a>
            <img src="img/Triang RP 2.png" alt="TRIX">
        </div>
    </section>
    <?
	include $_SERVER['DOCUMENT_ROOT'].'/footer.php'; 
    ?>
</body>

</html>