jQuery(document).ready(function($) {
	var P1=['La escasez','La inflación','La inseguridad','El contrabando','La crisis econónmica','El crimen'];
	var P2=['es un invento','es una estrategia','es un montaje','es una maniobra','es una táctica','es una operación'];
	var P3=['de los burgueses','del imperio','de los fascistas','de la oposición','de Donald Trump','de los capitalistas'];
	var P4=['para amedrentar','para oprimir','para destruir','para desmoralizar','para controlar','para atacar'];
	var P5=['al pueblo','la revolución','a los pobres','al chavismo','a la patria','al gobierno'];
	obtiene_frase(P1,P2,P3,P4,P5);
});
function obtiene_frase(){
	var args = Array.prototype.slice.call(arguments);
		// or [].slice.call(arguments)
	var contador=0;
	var Frase;
	args.forEach(function(arg) {
		longitud=arg.length;
		random = Math.floor((Math.random()*longitud))
		if(contador==0){
			Frase=arg[random];
		}
		else{
			Frase=Frase+" "+arg[random];
		}
		contador++;
	});
	Frase=Frase+".";
	typewriter(Frase,"#Frase");
};
function typewriter(texto,contenedor){
	var spans = '<span>' + texto.split('').join('</span><span>') + '</span>';
	$(spans).hide().appendTo(contenedor).each(function (i) {
		$(this).delay(75 * i).css({
			display: 'inline',
			opacity: 0
		}).animate({
			opacity: 1
		}, 100);
	});

}