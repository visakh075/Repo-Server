<?php
$map=array();
$id_count=0;
class dir_obj{

    public $base="";
    public $path="";
    public $id;
    public $type="";
    public $parent;
    }
function dir_list(string $base,string $dire,int $parent){
    // Use $base as name
    // Use $dire as directory or path
    // assign $id
    // pass as parent for a child
    global $id_count,$map;
    
    // Scan Directory
    $arr=scandir($dire);
    $arr=array_values(array_diff($arr,[".",".."]));

    for($i=0;$i<sizeof($arr);$i++)
    {
        $obj=new dir_obj();
        $obj->id=$id_count;$id_count++;   // assign id
        $obj->parent=$parent;

        $element = $arr[$i]; // item in search list
        $path=$dire."/".$element;   // new item
        $obj->base=$element;
        if(is_dir($path))
        {
            // if new item is a dir recurse and add in $map
            $obj->type="folder";
            dir_list($element,$path,$obj->id);
        }
        elseif(is_file($path))
        {
            // if new item is file just add
            $obj->type="file";
        }
        $short_path=str_replace([getcwd()],[""],$path);
        $obj->path=$short_path;
        array_push($map,$obj); 
    }
    }
function scan(){
    global $map;
    $map=array();
    $path=getcwd();
    dir_list("root",$path."/Repo",-1);

    $json_map=json_encode($map);
    return($json_map);
    }
?>