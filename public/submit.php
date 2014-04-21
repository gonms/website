<?php
    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
	$cabeceras .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
	$cabeceras .= 'From: ' . $_POST['nombre'] . '<' . $_POST['email']  .'>' . "\r\n";
	
	$mensaje = $_POST['mensaje'];
	
	$txt = ((strpos($_SERVER['HTTP_REFERER'],"/en") !== false)?"Message sent!":"Mensaje enviado correctamente");
	

	mail("gon.munoz.sanchez@gmail.com", "Contacto desde la web", $mensaje, $cabeceras);  
	
	echo $txt;      
?>