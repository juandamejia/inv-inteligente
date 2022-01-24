<?php
    

    include 'conexion_login.php';

    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena1'];

    $validar_login = mysqli_query ($conexion, "SELECT * FROM usuarios WHERE correo='$correo' and contrasena='$contrasena'");

    if(mysqli_num_rows($validar_login) > 0){
        $_SESSION['usuarios'] = $correo;
        header("location: index.php");
        exit;
      
    }else{
        echo '
        <script>
            alert("Usuario no registrado en el sistema ");
            window.location = "login.php";
        </script>
        ';
        
        exit;
    }
   