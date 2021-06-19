<?php
require_once $_SERVER['DOCUMENT_ROOT'].'/engine/classes/Main.class.php';
$Engine = new Engine();
$config = $Engine->cfg;

    $merchant_id = $config['freekassa']['merchant_id']; // ID вашего магазина
    $merchant_secret = $config['freekassa']['secret']; // Секретное слово которое сгенерировали 

    function getIP() {
    if(isset($_SERVER['HTTP_X_REAL_IP'])) return $_SERVER['HTTP_X_REAL_IP'];
    return $_SERVER['REMOTE_ADDR'];
    }
  //  if (!in_array(getIP(), array('136.243.38.147', '136.243.38.149', '136.243.38.150', '136.243.38.151', '136.243.38.189', '136.243.38.108'))) {
 //   die("hacking attempt!");
  //  }

    $sign = md5($merchant_id.':'.$_REQUEST['AMOUNT'].':'.$merchant_secret.':'.$_REQUEST['MERCHANT_ORDER_ID']);

    if ($sign != $_REQUEST['SIGN']) {
    die('wrong sign');
    }

                
$setstatus = $Engine->query("UPDATE `orders` SET `status` = '1', `profit` = '".$_REQUEST['AMOUNT']."' WHERE `id` = ".$_REQUEST['MERCHANT_ORDER_ID']);
if(!$setstatus) die("NO");

$data = $Engine->order($_REQUEST['MERCHANT_ORDER_ID']);
$aname = $data->nick;
$account_query = $Engine->game_db->query("SELECT * FROM `accounts` WHERE `login` like '".$aname."' or `email` like '".$aname."'");
if($account_query->num_rows > 0) {
    $account = $account_query->fetch_object();
    $money = (int) $data->price;
    $Engine->game_db->query("UPDATE `accounts` SET `redbucks` = ( `redbucks` + ".$money." ) WHERE `login` like '".$aname."' OR `email` like '".$aname."'");
    die('YES');
} else {
    $char = explode("_", $aname);
    $character_query = $Engine->game_db->query("SELECT * FROM `characters` WHERE `firstname` like '".$char[0]."' and `lastname` like '".$char[1]."'");
    $character = $character_query->fetch_object();
    $uuid = $character->uuid;
    $money = (int) $data->price;
    $Engine->game_db->query("UPDATE `accounts` SET `redbucks` = ( `redbucks` + ".$money." ) WHERE `character1` = '$uuid' OR `character2` = '$uuid' OR `character3` = '$uuid'");
    die('YES');
}