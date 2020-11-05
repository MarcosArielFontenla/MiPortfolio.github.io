<?php

function validar_campo($campo)
{
    $campo = trim($campo);
    $campo = stripslashes($campo);
    $campo = htmlspecialchars($campo);

    return $campo;
}

    
if (isset($_POST['nombre']) && !empty($_POST['nombre']) &&
        isset($_POST['email']) && !empty($_POST['email']) &&
        isset($_POST['mensaje']) && !empty($_POST['mensaje'])) {

        $destino = "marcos.fontenla@hotmail.com";

        $nombre = validar_campo($_POST['nombre']);
        $email = validar_campo($_POST['email']);
        $mensaje = validar_campo($_POST['mensaje']);

        $contenido = "Nombre " . $nombre;
        $contenido .= "Mail " . $email;
        $contenido .= "Mensaje " . $mensaje;

        mail($destino, "Mensaje del cliente" . $nombre, $contenido);

        return print(json_encode('ok'));
}
return print(json_encode('no enviado'));
?>