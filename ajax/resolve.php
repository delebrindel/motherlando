<?php
$Comienzo = array('La escasez','La inflación','La inseguridad','El contrabando','La crisis econónmica','El crimen');
$P1=array('es un invento','es una estrategia','es un montaje','es una maniobra','es una táctica','es una operación');
$P2=array('de los burgueses','del imperio','de los fascistas','de la oposición','de Donald Trump','de los capitalistas');
$P3=array('para amedrentar','para oprimir','para destruir','para desmoralizar','para controlar','para atacar');
$Fin=array('al pueblo','la revolución','a los pobres','al chavismo','a la patria','al gobierno');
arma($Comienzo,$P1,$P2,$P3,$Fin);
function arma($Comienzo, $P1,$P2,$P3,$Fin){
    $arr = get_defined_vars();
    $cont=0;
    foreach ($arr as $Parte) {
		$Random=random_int(0,sizeof($Parte)-1);
		if($cont==0){
		$Frase=$Parte[$Random];
		}
		else{
		$Frase=$Frase." ".$Parte[$Random];
		}
		$cont++;
    }
    $Frase=$Frase.".";
	echo json_encode(utf8_encode($Frase));
}
?>