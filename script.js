var c_location=-1;
var c_parent=-1;
function refresh(location)
{
    //alert("refresh");
    c_location=location;
    var req= new XMLHttpRequest();
    req.onreadystatechange = function(){
        var obj=JSON.parse(this.responseText);
        
        var content="";
        //var filename="";
        //var thumb="";
        //var details="";
        //var item;
        var obj_count=obj.length;
        for(i=0;i<obj_count;i++)
        {
            // set c_parent
            if(obj[i].id==c_location){c_parent=obj[i].parent}

            if(obj[i].parent==location) // Item to show
            {
                filename=`<div class='filename'>${obj[i].base}</div>`;
                format="<div class='format'>"+obj[i].type+"</div>";
                details="<div class='details'>"+filename+format+"</div>";

            // a href init            
            if(obj[i].type!="folder"){content+="<a href='"+obj[i].path+"'>";}
            if(obj[i].type=="folder")
            {
                thum_src="icons/folder.png";
                content+="<div class='item' onClick='refresh("+obj[i].id+")'>";
            }
            else
            {
                thum_src="icons/file.png";
                content+="<div class='item'>";
            }
            thumb="<div class='thumb'><img src='" +thum_src+"'/></div>";
            //var item=   "<div class='item'>";
            item=  thumb;
            item+=  details;
            content+=item;
            // a href init
            content+="</div>";
            if(obj[i].type!="folder"){content+="</a>";}            
            }
        }
        document.getElementById('container').innerHTML=content;
        
        console.log("current parent :"+c_parent);
        console.log("current location :"+location);
    }
    req.open("GET","scan.php");
    req.send();
}