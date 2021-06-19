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
<html lang="en">

<head>
  <?
	include $_SERVER['DOCUMENT_ROOT'].'/head.php'; 
?>
  <link rel="stylesheet" href="/css/donate.css">
  <title>Пополнение Счета</title>
</head>
<style>
        body{
            background-image: url('//img/Back\ prot\ 1.png');
        }
    </style>

<body>

  <?
	include $_SERVER['DOCUMENT_ROOT'].'/header.php'; 
?>

<section class="pay">
    <div class="pay-card">
        <img src="/img/Pay win 1.png" alt="Pay">
        <div><a href="">Пополнить</a></div>

        <!-- <div class="title">
            <div class="name">Пополнение счета</div>
            <div class="break"></div>
          </div> -->
        <form method="post" onsubmit="checkname();return false">

            <div id="checkname" class="text-white"></div>
            <div class="input_wrap">
              <div class="label">Укажи свой логин или E-Mail</div>
              <input type="text" id="name" name="name" placeholder="Логин аккаунта">
            </div>
            <div class="input_wrap">
              <div class="label">Укажи сумму</div>
              <input type="number" id="summ" name="price" placeholder="Кол-во в рублях">
            </div>
            <div class="footer_wrap">
              <button type="submit" id="button1" name="buy">пополнить</button>
            </div>
            <div class="alert bg-dark text-light mt-4" style="display: none" id="infobuy"></div>
          </form><br><br>
          <p style="text-align:center" class="text-warning">Курс обмена:
            <span class=" upper text-white text-center rbold" style=" line-height:12px;">1 <i
                class="fas fa-ruble-sign fa-sm"></i> = 3
              <img src="/img/Coin128.png" width="24" height="24" class="filter-green" />

              </i>
    </div>
    </section>

  <!-- <section class="donate_content">
    <div class="container">
      <div class="row">
        <div class="donate_block">
          
          
        </div>
      </div>
    </div>
    
  </section> -->




  <?
	include $_SERVER['DOCUMENT_ROOT'].'/footer.php'; 
?>


  <script src="/js/donate.js"></script>
</body>

</html>