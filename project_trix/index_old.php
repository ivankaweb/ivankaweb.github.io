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
<?
	include $_SERVER['DOCUMENT_ROOT'].'/head.php'; 
?>
	<title>Trix RP - Лучший Role Play сервер в ГТА 5 Онлайн | trixrp.ru</title>
</head>

<body>

	<?
	include $_SERVER['DOCUMENT_ROOT'].'/header.php'; 
?>
	<section class="header">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 serverInfo">
					<img src="/images/picture_header.png" class="picture" alt="" style="">
					<div class="nameServer">Trix RolePlay <div class="line" style=""></div>
					</div>
					<div class="titleBox">
						<div class="title">Заходи к нам <br> <span>и выбирай роль</span> </div>
						<div class="bg"></div>
					</div>
					<div class="desc col-lg-5 col-md-5">
						Уютная атмосфера, Discord-общение, Голосовой чат, Ивенты от администраторов, Круглосуточная
						поддержка, а также сотни других увлекательных квестов и бонусов
					</div>
					<ul class="buttons_list">
						<a href="#how_to_play" class="btn_link">
							<li class="server-color">Начать играть</li>
						</a>
						<a href="/donate.php" class="btn_link">
							<li class="server-color lighter">Пополнить счет</li>
						</a>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<section class="how_to_play" id="how_to_play">
		<div class="container">
			<div class="row">
				<div class="nameSectionBlock">
					<div class="name">Как начать играть?</div>
					<div class="break"></div>
				</div>
				<div class="col-lg-4 col-md-12 stepBlock oneStep">
					<img src="/images/step_one.png" alt="" class="step_picture" style="">
					<div class="logo">
						<img src="/images/icon_one.png" alt="">
					</div>
					<div class="titleStep">
						Установите <br> Лицензионную GTA 5
					</div>
					<div class="descStep">
						Подойдет так же забаненый аккаунт
					</div>
					<div class="footerStep">
						<a href="https://www.epicgames.com/store/ru/product/grand-theft-auto-v/home" target="_blank"
							class="step_btn">Купить игру</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-12 stepBlock twoStep">
					<img src="/images/step_two.png" alt="" class="step_picture" style="filter: hue-rotate(-0deg);">
					<div class="logo">
						<img src="/images/icon_two.png" alt="">
					</div>
					<div class="titleStep">
						Установите <br> мультиплеер RAGE
					</div>
					<div class="descStep">
						Далее вам потребуется скачать и установить RAGE:MP. Он бесплатный.
					</div>
					<div class="footerStep">
						<a href="https://rage.mp" target="_blank" class="step_btn">Загрузить</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-12 stepBlock thereStep">
					<img src="/images/step_there.png" alt="" class="step_picture" style="filter: hue-rotate(-0deg);">
					<div class="logo">
						<img src="/images/icon_there.png" alt="">
					</div>
					<div class="titleStep">
						Начните игру <br> на <?=$srvName?>
					</div>
					<div class="descStep">
						В Rage Multiplayer в поиске введите “Trix RP” или подключитесь по адресу сервера
					</div>
					<div class="footerStep" id="connectButton">
						<input type="text" value="s1.trixrp.ru:22005" id="serverIp" hidden>
						<div class="step_btn connectButtonText">Скопировать адрес</div>
						<!-- <div class="step_btn connectButtonText">Скопировать адрес сервера</div> -->
						<div id="tooltip" class="displayNone">IP скопирован</div>
					</div>

				</div>
			</div>
		</div>
	</section>

	<section class="why_we">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-6 picture">
					<img src="/images/picture_why.png" alt="">
				</div>
				<div class="col-lg-6 col-md-12 info">
					<div class="title">
						Преимущества <br> <span><?=$srvName?> RP</span>
					</div>
					<div class="desc">
						Мы недавно открылись, а значит у тебя есть уникальная возможность быстро подняться в
						государственных или криминальных кругах, купить себе машину, дом, бизнесы
					</div>
					<ul class="why_list">
						<li>
							<div class="icon">
								<img src="/images/icon_smile.png" alt="">
							</div>
							<div class="title">
								Интересная <br> игра!
							</div>
						</li>
						<li>
							<div class="icon">
								<img src="/images/icon_update.png" alt="">
							</div>
							<div class="title">
								Регулярные <br> обновления
							</div>
						</li>
						<li>
							<div class="icon">
								<img src="/images/icon_star.png" alt="">
							</div>
							<div class="title">
								Современный <br>игровой мод
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<?
	include $_SERVER['DOCUMENT_ROOT'].'/footer.php'; 
?>

</body>

</html>