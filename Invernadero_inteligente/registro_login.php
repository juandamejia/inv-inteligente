<?php

    include 'conexion_login.php';
   
    $nombre_completo =$_POST['nombre_completo'];
    $correo =$_POST['correo_electronico'];
    $usuario =$_POST['usuario'];
    $contrasena =$_POST['contrasena'];

    $contrasena = hash('sha512', $contrasena);
    

    $query = "INSERT INTO usuarios(nombre_completo, correo, usuario, contrasena) 
    VALUES('$nombre_completo', '$correo', '$usuario', '$contrasena')";
    
   
    
    $verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo'");
    

    if(mysqli_num_rows($verificar_correo) > 0){
        echo '
            <script>
                alert("Este correo ya esta registrado, intenta con otro correo");
                window.location = "login.php";
            </script>
            ';
            exit();
    }
    $verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE usuario='$usuario'");
    

    if(mysqli_num_rows($verificar_usuario) > 0){
        echo '
            <script>
                alert("Este usuario ya esta registrado, intenta con otro nombre");
                window.location = "login.php";
            </script>
            ';
            exit();
    }

    
    
    $ejecutar = mysqli_query($conexion, $query);

    if ($ejecutar){
        echo'
        <script>
            alert("usuario registrado!!");
            window.location = "login.php";
        </script>';
    }else{ '
        <script>
            alert("error vuelve a intentarlo");
            window.location = "login.php";
        </script>';
    }

    mysqli_close($conexion);  
?>