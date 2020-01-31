// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato.
$(document).ready(function() {

  // Generiamo 36 quadrati con un ciclo
  for (var i = 0; i < 35; i++) {
    var grid = $('.template .grid').clone();
    $('.grid-container').append(grid);
  }

  // Evento click
  $(document).on('click', '.grid', function() {
    var element = $(this);

    // Chiamata AJAX
    if (!element.hasClass('green') && !element.hasClass('yellow')) {
      var ajaxCall = {
        'url': "https://flynn.boolean.careers/exercises/api/random/int ",
        'method': "GET",
        'success': function (response) {
          console.log(response.response);
          console.log(this);

          var number = response.response;
          if (number <= 5) {
            element.addClass('green');
          }else{
            element.addClass('yellow');
          }
          element.text(number);
        },
        'error': function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }
      };
      $.ajax(ajaxCall);
    }
  });
});
