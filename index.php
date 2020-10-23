<html>

<head>
<link rel="stylesheet" href="style.css"/>
</head>

<body>

    <?php
    include "lib_repo.php";
    $path=getcwd();
    $map=dir_list("Repo",$path."/Repo");
    //$map->show();
    $json=json_decode($map);
    echo($json);
    ?>

</body>
</html>
