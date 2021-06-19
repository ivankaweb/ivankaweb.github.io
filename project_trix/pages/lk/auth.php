<?php session_start(); ?>
  <meta charset="utf-8">
  <?require_once $_SERVER['DOCUMENT_ROOT'].'/engine/classes/Main.class.php';
  $Engine = new Engine();

  $db = $Engine->game_db;

  if(isset($_POST['auth'])) {
            $p = $_POST;
            $login = strtolower($p['login']);
            $password = hash("SHA256", $p['password']);
            
            $checkpass = $db->query("SELECT * FROM `accounts` WHERE `login` like '".$login."'");
            if($checkpass->num_rows == 0) die('<script>alert("Неверный логин или пароль");window.location.href="/lk/"</script>');
            $find = $checkpass->fetch_object();

            if($find->password != $password) die('<script>alert("Неверный логин или пароль");window.location.href="/lk/"</script>');
            elseif($find->password == $password) {

                $hash = hash("SHA256", md5($login.$password));
                $profile = array();
                $profile = array("login"  =>  $find->login, "email"  =>  $find->email, "hash"  =>  $hash);
                $_SESSION['profile'] = $profile;
                echo '<script>window.location.href="/lk/"</script>';
            }
        }