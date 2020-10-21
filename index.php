<?php
$dirscan=scandir("Repo");
$dirscan=array_diff($dirscan,[".",".."]);
print_r($dirscan);
?>