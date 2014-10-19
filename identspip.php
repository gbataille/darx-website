<?php

if(isset($_POST["passwd"])){
	if($_POST["passwd"]=="magique"){
	?>
		<script>
			top.location="buro.html";
		</script>

	<?
	}else{
	?>
		<script>
			top.location="index.html";
		</script>
	<?
	}
}
?>
<html>
<head>
</head>
<body text="#FFFFFF" bgcolor="#000000" link="#FFFF00" vlink="#FFFF99">
<p align="center" style="font-family:verdana; color:#ffffff;">

<form name="ident" action="ident.php" method="POST">
	Votre mot de passe
	<input type="password" name="passwd" />
	<input type="submit" value="valider" />
</form>

</body>

</html>