<div class="container-fluid">
	<div class="row justify-content-center">

<?php
		$login = $_SESSION['profile']['login'];
		$infoQuery = $db->query("SELECT * FROM `accounts` WHERE `login` like '{$login}'");
		$info =	$infoQuery->fetch_object();
		$characters = array();
		$characters[] = $info->character1;
		$characters[] = $info->character2;
		$characters[] = $info->character3;


?>
	

		<div class="col-lg-11 text-center py-4">
			<h1>Личный кабинет</h1>
			<br>
			<table class="user-details">
				<tbody>
					<tr>
						<!-- <td class="text-right text-white"></td> -->
						<td class="text-right text-white">
							<i class="fas fa-user text-green"></i> <?=$info->login?>
							<i class="fas fa-envelope text-green"></i> <?=$info->email?></td>
						<td></td>
						<td class=" text-white font20">
						<img src="/lk/img/Coin128.png" width="40" height="40" class="filter-green">
							 <?=$info->redbucks?></td>
					</tr>
				</tbody>
			</table>
		</div>

<?php

		$i = 0;
		foreach($characters as $char) {
			$i = $i + 1;
			$uuid = intval($char);
			if($uuid > 0) {
				$charQuery = $db->query("SELECT * FROM `characters` where `uuid` like '{$uuid}'");
				$charInfo = $charQuery->fetch_object();
				$bankId = $charInfo->bank;
				$bankQuery = $db->query("SELECT * FROM `money` WHERE `id` = '{$bankId}'");
				$bankBalance = $bankQuery->fetch_object();
				switch ($charInfo->gender) {
					case '1':
						$gen = 'Мужской';
						$genimg = '/images/male.png';
						break;
					default:
						$gen = 'Женский';
						$genimg = '/images/female.png';
						break;
				}
				$housesQuery = $db->query("SELECT * FROM `houses` WHERE `owner` like '".$charInfo->firstname.'_'.$charInfo->lastname."'");
				if($housesQuery->num_rows != 0) {
					$house = $housesQuery->fetch_object();
					switch ($house->type) {
						case '1':
							$namehouse = 'Эконом';
							break;
						case '2':
							$namehouse = 'Эконом+';
							break;
						case '3':
							$namehouse = 'Комфорт';
							break;
						case '4':
							$namehouse = 'Комфорт+';
							break;
						case '5':
							$namehouse = 'Премиум';
							break;
						case '6':
							$namehouse = 'Премиум+';
							break;
					}
				} else {
					$namehouse = 'Нет недвижимости';
				}
?>
			<div class="col-lg-4"  style="border-radius: 45px;display: flex;
    flex-flow: row wrap;">
				<div class="donate_page-card card-success" style="border-radius: 25px;">
						<table style="border-radius: 45px;">
							<thead>
								<tr class="py-0 my-0">
									<th colspan="2" class="py-0 my-0 text-center">
										<span class="text-white" style="position: absolute;top:10px;right: 10px;font-size: 25px!important;opacity: 0.6;transform: rotate(10deg);">#<?=$charInfo->uuid?></span>
										<img src="<?=$genimg?>" width="50%">
									</th>
								</tr>
								<tr>
									<th class="bg-dark text-white text-center">
										<div class="row px-0 mx-0 py-2">
											<div class="col-2 px-0 mx-0"><i class="fas fa-heartbeat"></i></div>
											<div class="col-9 px-0 mx-0">
												<div class="progress">
												  <div class="grayback" style="left:<?=$charInfo->health?>%"></div>
												  <div class="strips"></div>
												</div>
											</div>
										</div>
									</th>
									<th class="bg-dark text-white text-center">
										<div class="row px-0 mx-0">
											<div class="col-9 px-0 mx-0">
												<div class="progress aa">
												  <div class="grayback" style="left:<?=$charInfo->armor?>%"></div>
												  <div class="strips aa" style="background-color: #A0ACD0"></div>
												</div>
											</div>
											<div class="col-2 px-0 mx-0"><i class="fas fa-shield-alt"></i></div>
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr class="card-lines">
									<td><strong>Имя:</strong></td>
									<td class="text-white"><?=$charInfo->firstname?></td>
								</tr>
								<tr class="card-lines">
									<td><strong>Фамилия:</strong></td>
									<td class="text-white" ><?=$charInfo->lastname?></td>
								</tr>
								<tr class="card-lines">
									<td><strong><i class="fas fa-venus-mars m-0"></i> Пол:</strong></td>
									<td class="text-white"><?=$gen?></td>
								</tr>
								<tr class="card-lines">
									<td><strong><i class="fas fa-money-bill-alt m-0"></i> Наличные:</strong></td>
									<td>
										<b class="text-white ">
											<?=$charInfo->money?><i class="fas fa-dollar-sign text-success"></i>
										</b>
									</td>
								</tr>
								<tr class="card-lines">
									<td><strong><i class="fas fa-money-check-alt m-0"></i> На карте:</strong></td>
									<td>
										<b class="text-white">
											<?=$bankBalance->balance?><i class="fas fa-dollar-sign text-success"></i>
										</b>
									</td>
								</tr>
								<tr class="card-lines">
									<td><strong><i class="fas fa-angle-double-up m-0"></i> Уровень:</strong></td>
									<td class="text-white"><?=$charInfo->lvl?></td>
								</tr>
								<tr class="card-lines">
									<td><strong><i class="fas fa-home m-0"></i> Недвижимость:</strong></td>
									<td class="text-white"><?=$namehouse?></td>
								</tr>
								<tr class="card-lines">
									<td><strong><i class="fas fa-calendar-alt m-0"></i> Дата создания:</strong></td>
									<td class="text-white"><?=$charInfo->createdate?></td>
								</tr>
							</tbody>
						</table>
					<div class="card-body px-1">
<?php

	$fullname = $charInfo->firstname.'_'.$charInfo->lastname;
	$vehQuery = $db->query("SELECT * FROM `vehicles` WHERE `holder` like '{$fullname}'");
	if($vehQuery->num_rows > 0) {
?>						
						<table class="text-center">
							<thead>
								<tr class="alert-secondary">
									<th>Модель авто</th><th>Номерной знак</th><th>Бензин (л.)</th>
								</tr>
							</thead>
							<tbody>
<?php
	while($veh = $vehQuery->fetch_object()) {
?>
					<tr>
						<td><?=$veh->model?></td>
						<td><b><?=$veh->number?></b></td>
						<td><?=$veh->fuel?></td>
					</tr>
<?php		
	}
?>				</tbody>			
						</table>
<?php
				} else {
?>
		<div class="alert alert-danger">Нет личного транспорта</div>
<?php					
				}
?>						
					</div>

			</div>
			</div>
<?php				
			} else {?>
			<div class="col-lg-3 text-center align-middle py-auto my-auto">
				<div class="alert donate_page-not-created text-white py-5" style="border-radius: 60px;opacity: 0.6">
						<h2 class="my-4"><i class="fas fa-lock text-white" style="font-size: 85px;"></i></h2>
					<strong class="my-5 ">Персонаж №<?=$i?> не создан</strong></div>
			</div>
<?php			}
		}
?>
		<div class="donate_page-exit col-12 text-center pt-5">
			<p><a href="/lk?exit">Выйти из личного кабинета</a></p>
		</div>
	</div>
