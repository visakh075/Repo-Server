var c_location=-1;
var c_parent=-1;
var c_c_parent=-1;
var c_path="";
function refresh(location)
{
    c_location=location;
    var req= new XMLHttpRequest();
    req.onreadystatechange = function(){
        var obj=JSON.parse(this.responseText);
        var content="";
        var side_panel="";
        var obj_count=obj.length;
        for(i=0;i<obj_count;i++)
        {
            //c_c_parent=c_parent;
            // set c_parent
            if(obj[i].id==c_location){
                c_parent=obj[i].parent       
                c_path=obj[i].path;
                }

            if(obj[i].type=="folder"){
                if(obj[i].parent==c_location)
                {
                    side_panel+=("<div class='entry in_dir'>"+obj[i].base+"</div>");
                }
                
                else if(obj[i].parent==c_parent)
                {
                    side_panel += ("<div class='entry ext_dir'>"+obj[i].base+"</div>");
                }
                
                else if(obj[i].id==c_location)
                {
                    side_panel += ("<div class='entry c_dir'>"+obj[i].base+"</div>");
                }
                else{
                    side_panel += ("<div class='entry'>"+obj[i].base+"</div>");
                }
            }
    

                if(obj[i].parent==location){
                
                // items to show (ie content of the path)
                    filename=`<div class='filename'>${obj[i].base}</div>`;
                    format="<div class='format'>"+obj[i].type+"</div>";
                    details="<div class='details'>"+filename+format+"</div>";

                // a href init            
                if(obj[i].type!="folder"){content+="<a href='"+obj[i].path+"'>";}
                if(obj[i].type=="folder")
                {
                    thum_src="folder.svg";
                    content+="<div class='item' onClick='refresh("+obj[i].id+")'>";
                }
                else
                {
                    thum_src="file.svg";
                    content+="<div class='item'>";
                }
                thumb="<div class='thumb'><img src='" +thum_src+"'/></div>";
                item=  thumb;
                item+=  details;
                content+=item;
                // a href init
                content+="</div>";
                if(obj[i].type!="folder"){content+="</a>";}            
            }
        }
        console.clear();
        console.log("c_parent"+c_parent);
        console.log("2c_parent"+c_c_parent);
        console.log("c_location"+c_location);

        if(c_location==-1){c_path="/Repo/";}
        document.getElementById('side_panel').innerHTML=side_panel;
        document.getElementById('container').innerHTML=content;
        document.getElementById('head').innerText=c_path;
    }
    req.open("GET","scan.php");
    req.send();
}