$(function(){
  init();

});// end document ready

function init(){
  eventListeners(true);
  getRental();

}

//Event Listeners
function eventListeners (value){
  if (true){
    $("#nav").on('click', '#rentalNav', showRentals);
    $("#nav").on('click', '#saleNav', showSales);
    $('#nav').on('click', "#showAll", showAll);
    $('#formItem').on('submit', addItem);
  } else {
    $("#nav").off('click', '#rentalNav', showRentals);
    $("#nav").off('click', '#saleNav', showSales);
    $('#nav').off('click', '#addItem', addItem);
  }
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

//show rentals
function showRentals (){
  console.log('in show rental path');
  $('.saleContainer').hide();
  $('.rentalContainer').show();
  //code to show rentals
}

//show sales
function showSales (){
  console.log('in show sales path');
  $('.saleContainer').show();
  $('.rentalContainer').hide();
  //code to show just rentals
}

function showAll () {
  $('.saleContainer').show();
  $('.rentalContainer').show();
}

//add item
function addItem(){
  event.preventDefault();
  console.log('in add item path');
  var newItem = {cost: $('#priceInput').val(), sqft: $('#sizeInput').val(), city: $('#locationInput').val()};
  postItem(newItem);
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
  console.log("trying to post ", data);
  $.ajax({
    type: "POST",
    url: "/rental/newItem",
    data: data,
    success: function(response){
      getRental();
    }
  });
}
