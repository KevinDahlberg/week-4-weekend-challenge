$(function(){
  init();
});// end document ready

function init(){
  getRental();
}

function getRental(){
  $.ajax({
    type: "GET",
    url: "/rental",
    success: function(response){
      appendRental(response);
      console.log(response);
    }
  });
}

function appendRental (array){
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    var rental = array[i];
    appendRentalToDom(rental);
  }
}

function appendRentalToDom (rental){
  console.log(rental);
  $('#rentals').append('<div class="rentalContainer"><p>Rental Container</p></div>');
  var $el = $("#rentals").children().last();
  $el.append('<p>'+rental.rent+'</p');
  $el.append('<p>'+rental.sqft+'</p');
  $el.append('<p>'+rental.city+'</p');
}
