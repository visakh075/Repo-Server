<html>

<head>
<link rel="stylesheet" href="style.css"/>
<script src="script.js" language="JavaScript"></script>
<?php include "lib_repo.php";scan();?>
</head>

<body>

<div class="header">
    <input type="submit" value="refresh" onclick="refresh(c_location)"/>
    <input type="submit" value="up" onclick="refresh(c_parent)"/>
</div>

<div class="container" id="container"></div>

</body>
</html>
