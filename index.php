<html>

<head>
<link rel="stylesheet" href="style.css"/>
<script src="script.js" language="JavaScript"></script>
<?php include "lib_repo.php";scan();?>
</head>

<body onload="get_data();">

<div class="header">  
    <input type="submit" value="refresh" onclick="navigate(c_location)"/>
    <input type="submit" value="up" onclick="navigate(c_parent)"/>
    <div id="head">head</div>
</div>
<div class="full_wrap">

<div class="container" id="container"></div>
</div>
</body>
</html>
