<html>

<head>
<meta name="viewport" content="width=device-width ,initial-scale=1">
<link rel="stylesheet" href="style.css"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="script.js" language="JavaScript"></script>
<?php include "lib_repo.php";scan();?>
</head>

<body onload="get_data();">
<div class="body_wrap">
<div class="header">  
    <input class="header_input" type="submit" value="Up" onclick="navigate(c_parent);"/>
    <div id="head" class="head"></div>
</div>
<div class="full_wrap">
<div class="container_wrap"><div class="container" id="container"></div></div>
</div>
</div>
</body>
</html>
