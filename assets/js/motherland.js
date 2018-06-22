 jQuery(document).ready(function($) {
  obtiene_frase();
});
function obtiene_frase(){
  $.ajax({
    url: 'ajax/resolve.php',
    type: 'GET',
    dataType: 'json'
  })
  .done(function(data) {
    typewriter(data,"#Frase")
  })
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