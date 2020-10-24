var c_location=-1;
var c_parent=-1;
var c_path="";
var d_data;
function get_dir(id)
{
    result=[];
    for(i=0;i<d_data.length;i++)
    {
        if(d_data[i].parent==id)
        {
            result.push(d_data[i]);
        }
    }
    return(result);
    }
function get_parent(id){
    for(i=0;i<d_data.length;i++)
    {
        if(d_data[i].id==id)
        {
            return(d_data[i].parent);
        }
    }
    return(-1);
    }
function get_sibilings(id){
    var parent=get_parent(id);
    var generation=get_dir(parent);
    return(generation);
    }
function get_data(){
    var req= new XMLHttpRequest();
    req.onreadystatechange = function(){
        var obj=JSON.parse(this.responseText);
        d_data=obj;
        navigate(-1);
    }
    req.open("GET","scan.php");
    req.send();
    }
function get_item(item){
    var type= (item.type=="folder") ? "folder.svg" : "file.svg"; 
    var result="";
    if(item.type!="folder"){
    result+=    "<a href='"+item.path+"'>";
    result+=    "<div class='item' id='"+item.id+"'>";
    }
    else{
    result+=    "<div class='item' id='"+item.id+"' onclick='navigate(this.id);'>";
    }
    result+=    "<div class='thumb'><img src='" + type +"'/></div>";
    result+=    "<div class='details'>";
    result+=    "<div class='filename'>"+ item.base + "</div>";
    result+=    "<div class='format'>"+ item.type + "</div>";
    result+=    "</div></div>";
    if(item.type!="folder"){result+="</a>";}

    return(result);
    }
function get_path(id)
{   
    for(i=0;i<d_data.length;i++)
    if(d_data[i].id==id)
    {return(d_data[i].path);}
    return("/Repo/");
    }
function get_type(id){   
    for(i=0;i<d_data.length;i++)
    if(d_data[i].id==id)
    {return(d_data[i].type);}
    return("none");
    }
function get_base(id){   
    for(i=0;i<d_data.length;i++)
    if(d_data[i].id==id)
    {return(d_data[i].base);}
    return(null);
    }
    
function get_head(id)
{
    //if(id==-1){return("<div>Repo</div>");}
    head="<div onclick='navigate("+id+");'>";
    head+=get_base(id);
    head+="</div>";
    if(id==-1){return("<div onclick='navigate(-1);'>Repo</div>");}
    head+=get_head(get_parent(id));
    return(head);
}
function navigate(id=-1){
    c_parent=get_parent(id);
    c_location=id;
    var child=get_dir(id);
    num_child=child.length;
    content="";
    for(i=0;i<num_child;i++)
    {
        content+=get_item(child[i]);
    }
    console.clear();
    console.log("c_loc : "+c_location);
    console.log("c_par : "+c_parent);
    console.log("gpath : "+get_path(id));
    console.log("gtype : "+get_type(id));
    
    document.getElementById('container').innerHTML=content;
    document.getElementById('head').innerHTML=get_head(id);}
