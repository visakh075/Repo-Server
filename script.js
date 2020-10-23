var c_location=-1;
var c_parent=-1;
function refresh(location)
{
    //alert("refresh");
    c_location=location;
    var req= new XMLHttpRequest();
    req.onreadystatechange = function(){
        var obj=JSON.parse(this.responseText);
        console.clear();
        //console.log(this.responseText);
        console.log(obj);

        var obj_count=obj.length;
        console.log("length of return :"+ obj_count);
        {
        var content="";
        for(i=0;i<obj_count;i++)
        {
            if(obj[i].id==c_location){c_parent=obj[i].parent}
            if(obj[i].parent==location && obj[i].type=="folder")
            {
                //console.log(obj[i].base +  " of "+obj[i].parent);
                content+="<div class='item' onclick='refresh("+obj[i].id+")'>"+obj[i].base+"</div>";
            }
            else if(obj[i].parent==location)
            {
                content+="<div class='item' onclick=''><a href='"+obj[i].path+"'>"+obj[i].base+"</a></div>";  
            }
        }
        document.getElementById('container').innerHTML=content;
        }
        console.log("current parent :"+c_parent);
        console.log("current location :"+location);
    }
    req.open("GET","scan.php");
    req.send();
}