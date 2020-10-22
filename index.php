<html>

<head>
<link rel="stylesheet" href="style.css"/>
</head>

<body>

    <?php
    include "lib_repo.php";
    print_r($_SERVER['HTTP_HOST'].$_SERVER['DOCUMENT_ROOT'].'/Repo');
    $path=getcwd();
    $map=dir_list("Repo",$path."/Repo");
    $map->show();
    ?>

</body>
</html>
