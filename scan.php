<?php
    include "lib_repo.php";
    $path=getcwd();
    $map=dir_list("Repo",$path."/Repo");
    //$map->show();
    $json=json_encode($map);
    echo($json);
?>