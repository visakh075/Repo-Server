function refresh()
{
    var req= new XMLHttpRequest();
    req.onreadystatechange = function(){
        var obj=JSON.parse(this.responseText);
        document.write(obj);
    }
    req.open("GET","scan.php");
    req.send();
}