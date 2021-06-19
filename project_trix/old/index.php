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
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <head>
        <?
	include $_SERVER['DOCUMENT_ROOT'].'/head.php'; 
?>
        <title>Trix RP - Лучший Role Play сервер в ГТА 5 Онлайн | trixrp.ru</title>
    </head>
</head>

<body>
    <div class="container">
        <header>
            <div class="menu">
                <button class="btn-trix">
					<a href="/pages/donate">Пополнить Счет</a>
				</button>
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
                    <img src="img/Logo TX 1.png" alt="Logo">
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
    </div>
    <section class="play">
        <div class="play-btn">
            <a class="btn-trix" href="#game">ИГРАТЬ</a>
        </div>
        <div class="play-img">
            <img src="img/Triang Top.png" alt="Play">
        </div>
    </section>
    <section class="desc-text-mobile">
        <div class="desc-text">
            <span>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
                Ipsum является стандартной "рыбой"<span id="dots">...</span>
                <span id="more">
                    для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
                    коллекцию размеров и
                    форм шрифтов, используя Lorem Ipsum для распечатки образцов. </span>
                </span>
            <a onclick="readMore()" id="btnMore" href="javascript:void(0)">подробнее...</a>
        </div>
    </section>
    <section class="social">
        <div class="social-container">
            <div class="desc">
                <div class="desc-text"><span>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                        Lorem Ipsum является стандартной "рыбой"<span id="dots">...</span><span id="more"></span>
                        для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
                        коллекцию размеров и
                        форм шрифтов, используя Lorem Ipsum для распечатки образцов. </span></span>
                </div>
                <img class="desc-img" src="img/Triang Mid.png" alt="City">
            </div>
            <img class="mobile-img-car" src="img/Cars 3 back_1 1.png" alt="City">

            <div>
                <img src="img/Triang Girl_1.png" alt="Girl">
            </div>
            <ul class="social-icon">
                <li class="social-icon-list"><a class="social-icon-link" href="https://discord.gg/zrpNd7fxXS"><img src="img/DC v3 1.png" alt=""></a>
                </li>
                <li class="social-icon-list"><a class="social-icon-link" href="https://vk.com/trixrp_gta5"><img src="img/VK v3 1.png" alt=""></a>
                </li>
                <li class="social-icon-list"><a class="social-icon-link" href="https://www.youtube.com/channel/UCIkuiM57KQL5d93o1uf_Kwg"><img src="img/YT v3 1.png" alt=""></a>
                </li>
                <li class="social-icon-list"><a class="social-icon-link" href=""><img src="img/TT v3 1.png" alt=""></a>
                </li>
                <li class="social-icon-list"><a class="social-icon-link" href="https://t.me/trixrp_gta5"><img src="img/TG v3 1.png" alt=""></a>
                </li>
            </ul>
        </div>

        <div class="game" id="game">
            <div class="game-card-01">
                <img src="img/gta plate v2 1.png" alt="GTA">
                <span class="number">1</span>
                <span class="name">Установка GTA 5</span>
                <p class="desc">Купи и установи лицензинонную GTA 5</p>
                <a class="btn-trix" href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/">Купить в Steam</a>
            </div>
            <div class="game-card-02">
                <img src="img/RP plate v2 1.png" alt="RP">
                <span class="number">2</span>
                <span class="name">Установка RAGE MP</span>
                <p class="desc">Скачай и установи лаунчер Rage.MP. Это бесплатно.</p>
                <a class="btn-trix" href="https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe">Скачать</a>
            </div>
            <div class="game-card-03">
                <img src="img/Trix plate v2 1.png" alt="TRIX">
                <span class="number">3</span>
                <span class="name">НАЧНИ ИГРУ НА TRIX RP</span>
                <p class="desc">В Rage MP в поиске введи Trix RP или подключиcь по адресу <span class="server-address">s1.trixrp.ru:22005</span></p>
                <a class="btn-trix" href="rage://v/connect?ip=s1.trixrp.ru:22005">Играть на сервере</a>
            </div>
        </div>
        <div class="game-mobile">
            <div class="game-mobile-card-01">
                <a href="" class="name">УСТАНОВИТЕ GTA 5</a>
                <img src="img/Triang Top 2.png" alt="GTA">
            </div>

        </div>

        </div>
    </section>
    <section class="mobile-game">
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