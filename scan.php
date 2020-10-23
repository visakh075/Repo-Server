<?php
    include "lib_repo.php";
    header('content-type: application/json');
    echo (scan());
    /*
    for($i=0;$i<sizeof($map);$i++)
    {
        if($map[$i] instanceof dir_obj)
        {
            echo
             '<br>Name:'. $map[$i]->base.
             '<br>Id :'. $map[$i]->id.
             '<br>Parent :'. $map[$i]->parent.
             '<br>Type :'. $map[$i]->type.
             '<br><hr>';

        }
    }*/
    
?>