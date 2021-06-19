<?php
  session_start();
header('Content-Type: text/html; charset=utf-8');
  require_once $_SERVER['DOCUMENT_ROOT'].'/engine/classes/Main.class.php';
  $Engine = new Engine();

  require $_SERVER['DOCUMENT_ROOT'].'/config.php';

  $db = $Engine->game_db;

  if(isset($_GET['page'])) $page = $_GET['page'];
  else $page = 'index';

  if(isset($_GET['exit'])) {
  	unset($_SESSION);
  	session_destroy();
  	print_r('<script>window.location.href="/lk";</script>');
  }

?>
<!DOCTYPE html>
<html lang="en">

<head>

<?
	include $_SERVER['DOCUMENT_ROOT'].'/head.php'; 
?>
  <title>Личный кабинет</title>


</head>
<?php
  include $_SERVER['DOCUMENT_ROOT'].'/header.php'; 
?>

<body class="donate_page">
  <?php
		if(!($_SESSION['profile']['hash'])) {
?>
  <section class="donate_content">
    <div class="container ">
      <div class="row">
        <div class="donate_block">
          <div class="title">
            <div class="name">Личный кабинет</div>
          </div>
          <form method="post" action="auth.php">
            <div class="input_wrap">
              <div class="label">Укажи свой логин</div>
              <input type="text" name="login" placeholder="Логин с сервера">
            </div>
            <div class="input_wrap">
              <div class="label">Введи свой пароль</div>
              <input type="password" name="password" placeholder="Пароль">
            </div>
            <div class="footer_wrap">
              <button type="submit" name="auth"><strong>Авторизоваться</strong></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <?php
		} else {
			$loginname = $_SESSION['profile']['login'];
			$loginQuery = $db->query("select * from accounts where login like '{$loginname}'");
			$account = $loginQuery->fetch_object();
			if($_SESSION['profile']['hash'] == hash("SHA256", md5($account->login.$account->password))) {

				if(file_exists("./pages/".$page.".php")){
					include("./pages/".$page.".php");
				}
				else{
					echo("404");
				}	
			}
		}
?>

  <?
	include $_SERVER['DOCUMENT_ROOT'].'/footer.php'; 
?>

  <script src="js/tellarion.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
  </script>

</body>