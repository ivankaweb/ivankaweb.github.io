<?php

    header('Content-Type: text/html; charset=utf-8');
    require_once $_SERVER['DOCUMENT_ROOT'].'/engine/classes/Main.class.php';
    $Engine = new Engine();

    function toalert($content) {
        return '<div class="error-message">'.$content.'</div>';
    }

    $p = $_POST;

    if(isset($p['check'])) {

        $name = strtolower($p['name']);

            $check = $Engine->game_db->query("SELECT * FROM `accounts` WHERE `login` like '".$name."' OR `email` like '".$name."'");
            if(!$check) die(toalert("Ошибка во время MysQl-запроса БД к таблице `characters`"));
            $nums = $check->num_rows;
            if($nums == 0) die(toalert("Неверный логин или e-mail"));

            echo "success";


    }