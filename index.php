<?php
include "lib_repo.php";
$dirscan=scandir("Repo");
$dirscan=array_values(array_diff($dirscan,[".",".."]));
print_r($dirscan);
$path=getcwd();
//echo $path;

dir_list($path."\Repo");
?>