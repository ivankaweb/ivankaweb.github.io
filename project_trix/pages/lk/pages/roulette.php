       <div class="container-fluid server-color">
        <?php
        $login = $_SESSION['profile']['login'];
        $infoQuery = $db->query("SELECT * FROM `accounts` WHERE `login` like '{$login}'");
        $info = $infoQuery->fetch_object();
        $characters = array();
        $characters[] = $info->character1;
        $characters[] = $info->character2;
        $characters[] = $info->character3;


?><meta charset="utf-8">
    <div class="row justify-content-center">
                <div class="col-lg-9 text-center py-4">
            <h1><strong style="font-family: ubuntu;text-transform: uppercase;">Личный кабинет</strong></h1>
            <br>
            <table class="table table-sm">
                <tbody>
                    <tr>
                        <td class="capt text-muted text-left"><i class="fas fa-envelope text-primary"></i> <?=$info->email?></td>
                        <td></td>
                        <td class="capt bg-danger text-white font30"><i class="fas fa-gem"></i> <?=$info->redbucks?> iCoins</td>
                    </tr>
                </tbody>
            </table>
        </div>
    <div class="col-lg-12">
        <main style="width: auto;">
            <div class="container" style="margin-top:-250px;">
                <div id="win" class="alert gilroy text-center upper font30" style="display: none">Вы выиграли</div>
                <div class="bar shadow" style="width: 100%">
                    <div class="spin" style="width: 100%">
                        <div class="move">
                            <!-- CALLBACK & -->
                        </div>
                    </div>
                    <button class="btn gilroy text-white font20 btn-primary server-color btn-lg shadow">Испытать удачу за <font class="capt"><i class="fas fa-gem"></i> 99 iCoins</font></button>
                </div>
            </div>
        </main>
    </div>
    </div>
</div>