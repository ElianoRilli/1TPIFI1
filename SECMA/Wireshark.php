<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h1>Welcome</h1>

    <h2>Add your information:</h2>

    <input placeholder="Username" id="user" type="text"></input><br>
    <input placeholder="Password" id="pass" type="password"></input><br>
    <br>
    <button type="submit" name="button" onclick="register()">Register</button>



    <script>
        var User
        var Pass

        function register() {
            User = document.getElementById("user").value;
            Pass = document.getElementById("pass").value;

            alert(User + " has been registered with " + Pass);
        }
    </script>

</body>

</html>