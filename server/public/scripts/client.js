$(function(){
  init();
});// end document ready

function init(){
  getRental();
}

//append loop
function appendRental (array){
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    var property = array[i];
    propertyDivide(property);
  }
}

//figures out whether a property is a rental or a sale
function propertyDivide(data){
  if (data.rent) {
    appendRentalToDom(data);
  } else if (data.cost){
    appendSaleToDom(data);
  } else {
    console.log("no data to show");
  }
}

//append rental to DOM
function appendRentalToDom (rental){
  $('#rentals').append('<div class="col-md-3 rentalContainer"><p>Rental Container</p></div>');
  var $el = $("#rentals").children().last();
  $el.append('<p>Price: '+rental.rent+'</p');
  $el.append('<p>Size: '+rental.sqft+'</p');
  $el.append('<p>Location: '+rental.city+'</p');
}

//append sale to DOM
function appendSaleToDom (sale){
  $('#sales').append('<div class="col-md-3 saleContainer"><p>Sale Container</p></div>');
  var $el = $("#sales").children().last();
  $el.append('<p>Price: '+sale.cost+'</p');
  $el.append('<p>Size: '+sale.sqft+'</p');
  $el.append('<p>Location: '+sale.city+'</p');
}

//ajax calls
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
