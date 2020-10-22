<?php
class dir_obj{

    public $base="";
    public $path="";
    public $list=array();
    
    public function show()
    {
        print_r("<br><ul>");
        print_r($this->base."<br>");
        print_r($this->path."<br>");
        
        for($i=0;$i<sizeof($this->list);$i++)
        {
            if($this->list[$i] instanceof dir_obj)
            {
                $this->list[$i]->show();
            }
            else{echo("..".$this->list[$i]."<br>");}
        }
        print_r("</ul>");
    }
} 
$map=new dir_obj();
function dir_list(string $base,string $dir)
{
    global $map;
    $arr=scandir($dir);
    $arr=array_values(array_diff($arr,[".",".."]));
    //print_r($arr);
    for($i=0;$i<sizeof($arr);$i++)
    {
        $ele=$arr[$i];
        $path=$dir."/".$ele;
        //array_push($map,$path);
        if(is_dir($path))
        {
            $arr[$i]=dir_list($ele,$path);
        }
    }
    $obj=new dir_obj();
    $obj->base=$base;
    $obj->path=$dir;
    $obj->list=$arr;
    //echo "<br>";
    //print_r($arr);
    //$map=$obj;
    //print_r($obj);
    return($obj);
}
?>