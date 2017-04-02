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

function postItem(data){
  $.ajax({
    type: "POST",
    url: "/newItem",
    data: data,
    success: function(response){
      getRental();
    }
  });
}

function appendRental (array){
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    var property = array[i];
    propertyDivide(property);
  }
}

function propertyDivide(data){
  if (data.rent) {
    appendRentalToDom(data);
  } else if (data.cost){
    appendSaleToDom(data);
  } else {
    console.log("no data to show");
  }
}

function appendRentalToDom (rental){
  $('#rentals').append('<div class="rentalContainer"><p>Rental Container</p></div>');
  var $el = $("#rentals").children().last();
  $el.append('<p>'+rental.rent+'</p');
  $el.append('<p>'+rental.sqft+'</p');
  $el.append('<p>'+rental.city+'</p');
}

function appendSaleToDom (sale){
  console.log(sale);
  $('#rentals').append('<div class="saleContainer"><p>Sale Container</p></div>');
  var $el = $("#rentals").children().last();
  $el.append('<p>'+sale.cost+'</p');
  $el.append('<p>'+sale.sqft+'</p');
  $el.append('<p>'+sale.city+'</p');
}
