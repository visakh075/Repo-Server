<?php

function dir_list(string $dir = null)
{
    $arr=scandir($dir);
    $arr=array_values(array_diff($arr,[".",".."]));
    for($i=0;$i<sizeof($arr);$i++)
    {
        $ele=$arr[$i];
        $path=$dir."\\".$ele;
        
        if(is_dir($path))
        {
            $arr[$i]=dir_list($path);
        }
    }
    echo "<br>";
    //print_r($arr);
    return($arr);
}
?>