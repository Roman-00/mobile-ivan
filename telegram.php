<?php

/**
 * ? https://api.telegram.org/bot5068551815:AAG1j83cPjog2eiF8EzC8mhakWUnVEnpro0/getUpdates,
 * ? где - XXXXXXXXXXXXXXXX -токен вашего бота, полученый ранее
 */

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$name 				= $obj['name'];
$phone 				= $obj['phone'];
$textValuation 		= $obj['valuationFrom'];
$api_Token 			= "5068551815:AAG1j83cPjog2eiF8EzC8mhakWUnVEnpro0";
$chat_id 			= "-723121263";

$arr = array(
	'Заявка' => '',
	'Откуда: ' => $textValuation,
	'Имя пользователя: ' => $name,
	'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$api_Token}/sendMessage?chat_id={$chat_id}
	&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
	echo '<h1>Спасибо за отправку вашего сообщения!</h1>';
	return true;
}
