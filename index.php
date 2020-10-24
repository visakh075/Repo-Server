<html>

<head>
<link rel="stylesheet" href="style.css"/>
<script src="script.js" language="JavaScript"></script>
<?php include "lib_repo.php";scan();?>
</head>

<body onload="refresh(-1);">

<div class="header">  
    <input type="submit" value="refresh" onclick="refresh(c_location)"/>
    <input type="submit" value="up" onclick="refresh(c_parent)"/>
    <div id="head">head</div>
</div>
<div class="full_wrap">
<div class="side_panel" id="side_panel">side</div>
<div class="container" id="container"></div>
</div>
</body>
</html>
